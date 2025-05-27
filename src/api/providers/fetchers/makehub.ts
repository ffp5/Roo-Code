import axios from "axios"
import type { ModelRecord } from "../../../shared/api"

const MAKEHUB_BASE_URL = "https://api.makehub.ai/v1"

interface MakehubModelResponse {
	data: Array<{
		context: number
		model_id: string
		model_name: string
		display_name?: string
		organisation: string
		price_per_input_token: number
		price_per_output_token: number
		provider_name: string
		quantisation: string | null
		max_tokens?: number
		supports_images?: boolean
		supports_prompt_cache?: boolean
		cache_writes_price?: number
		cache_reads_price?: number
		assistant_ready: boolean
		providers_available?: string[]
		thinking_config?: {
			max_budget?: number
			output_price?: number
		}
		tiers?: Array<{
			context_window: number
			input_price?: number
			output_price?: number
			cache_writes_price?: number
			cache_reads_price?: number
		}>
		capabilities?: {
			image_input?: boolean
			tool_calling?: boolean
			json_mode?: boolean
		}
	}>
}

/**
 * Fetches available models from the MakeHub API
 *
 * @param apiKey - The API key for authentication
 * @returns A promise that resolves to a record of model IDs to model info
 */
export const getMakehubModels = async (apiKey?: string): Promise<ModelRecord> => {
	try {
		// Configure headers based on whether API key is provided
		const headers: Record<string, string> = {
			Accept: "application/json",
			"Content-Type": "application/json",
			"HTTP-Referer": "vscode.dev",
			"X-Title": "RooCode",
		}

		// Add Authorization header if API key is provided
		if (apiKey) {
			headers.Authorization = `Bearer ${apiKey}`
		}

		const response = await axios.get<MakehubModelResponse>(`${MAKEHUB_BASE_URL}/models`, {
			headers,
			timeout: 10000,
		})

		if (!response.data?.data) {
			console.error("Invalid MakeHub API response format:", response.data)
			return {}
		}

		const modelRecord: ModelRecord = {}

		for (const model of response.data.data) {
			if (!model.model_id || !model.assistant_ready) continue

			// Create a model ID that includes provider information
			// Use just the model_id as provided by the API, since it already has the proper format
			const fullModelId = model.model_id.includes("/")
				? model.model_id // Already has organization format
				: `${model.organisation}/${model.model_id}` // Add organization prefix

			// Log the raw price values from the API for debugging
			console.log(`Model ${fullModelId} raw prices:`, {
				input: model.price_per_input_token,
				output: model.price_per_output_token,
			})

			// MakeHub API returns prices already in cost per million tokens,
			// so we can use them directly without further conversion
			const inputPrice = model.price_per_input_token
			const outputPrice = model.price_per_output_token

			console.log(`Model ${fullModelId} stored prices:`, {
				input: inputPrice,
				output: outputPrice,
			})

			modelRecord[fullModelId] = {
				maxTokens: model.max_tokens ?? undefined,
				contextWindow: model.context,
				supportsImages: model.capabilities?.image_input ?? false,
				supportsComputerUse: model.capabilities?.tool_calling ?? false,
				supportsPromptCache: model.supports_prompt_cache ?? false,
				inputPrice: inputPrice,
				outputPrice: outputPrice,
				cacheWritesPrice: model.cache_writes_price,
				cacheReadsPrice: model.cache_reads_price,
				description: model.display_name,
				tiers: model.tiers?.map((tier) => ({
					contextWindow: tier.context_window,
					inputPrice: tier.input_price,
					outputPrice: tier.output_price,
					cacheWritesPrice: tier.cache_writes_price,
					cacheReadsPrice: tier.cache_reads_price,
				})),
			}
		}

		return modelRecord
	} catch (error) {
		console.error("Error fetching MakeHub models:", error)
		if (axios.isAxiosError(error)) {
			console.error("Response:", error.response?.data)
			console.error("Status:", error.response?.status)
		}
		return {}
	}
}
