# MakeHub AI Code Assistant Changelog

## [0.0.5] - 2025-02-06

### MakeHub Integration

- **Universal API Load Balancing**: Integrated with MakeHub.ai's universal API router for intelligent request routing
- **Cost Optimization**: Automatically route requests to the fastest, cheapest provider in real time
- **Performance Enhancement**: Smart provider selection based on cost, speed, and availability
- **Reliability**: Automatic failover to backup providers when primary providers are unavailable

### Enhanced Features

- **MakeHub Provider**: Native integration with MakeHub.ai platform
- **Real-time Cost Tracking**: Monitor API spending across all providers
- **Provider Diversity**: Access multiple AI providers through a single unified interface
- **Transparent Routing**: Full visibility into routing decisions and performance metrics

### Branding Updates

- Rebranded from Roo-Code to MakeHub AI Code Assistant
- Updated extension metadata and descriptions
- Enhanced documentation with MakeHub-specific features
- Updated marketplace presence and branding

---

## Previous Versions (Roo Code Heritage)

This extension is built upon the excellent foundation of Roo-Code. Below is the complete changelog from the original project:

## [3.19.2] - 2025-06-01

- Add support for Streamable HTTP Transport MCP servers (thanks @taylorwilsdon!)
- Add cached read and writes to stats and cost calculation for LiteLLM provider (thanks @mollux!)
- Prevent dump of an entire file into the context on user edit (thanks @KJ7LNW!)
- Fix directory link handling in markdown (thanks @KJ7LNW!)
- Prevent start_line/end_line in apply_diff REPLACE (thanks @KJ7LNW!)
- Unify history item UI with TaskItem and TaskItemHeader (thanks @KJ7LNW!)
- Fix the label of the OpenAI-compatible API keys
- Fix Virtuoso footer re-rendering issue (thanks @kiwina!)
- Optimize ChatRowContent layout and styles (thanks @zhangtony239!)
- Release memory in apply diff (thanks @xyOz-dev!)
- Upgrade Node.js to v20.19.2 for security enhancements (thanks @PeterDaveHello!)
- Fix typos (thanks @noritaka1166!)

## [3.19.1] - 2025-05-30

- Experimental feature to allow reading multiple files at once (thanks @samhvw8!)
- Fix to correctly pass headers to SSE MCP servers
- Adding support for custom VPC endpoints when using Amazon Bedrock (thanks @kcwhite!)
- Fix bug with context condensing in Amazon Bedrock
- Fix UTF-8 encoding in ExecaTerminalProcess (thanks @mr-ryan-james!)
- Set sidebar name bugfix (thanks @chrarnoldus!)
- Fix link to CONTRIBUTING.md in feature request template (thanks @cannuri!)
- Add task metadata to Unbound and improve caching logic (thanks @pugazhendhi-m!)

## [3.19.0] - 2025-05-29

- Enable intelligent content condensing by default and move condense button out of expanded task menu
- Skip condense and show error if context grows during condensing
- Transform Prompts tab into Modes tab and move support prompts to Settings for better organization
- Add DeepSeek R1 0528 model support to Chutes provider (thanks @zeozeozeo!)
- Fix @directory not respecting .rooignore files (thanks @xyOz-dev!)
- Add rooignore checking for insert_content and search_and_replace tools
- Fix menu breaking when Roo is moved between primary and secondary sidebars (thanks @chrarnoldus!)
- Resolve memory leak in ChatView by stabilizing callback props (thanks @samhvw8!)
- Fix write_to_file to properly create empty files when content is empty (thanks @Ruakij!)
- Fix chat input clearing during running tasks (thanks @xyOz-dev!)
- Update AWS regions to include Spain and Hyderabad
- Improve POSIX shell compatibility in pre-push hook (thanks @PeterDaveHello and @chrarnoldus!)
- Update PAGER environment variable for Windows compatibility in Terminal (thanks @SmartManoj!)
- Add environment variable injection support for whole MCP config (thanks @NamesMT!)
- Update codebase search description to emphasize English query requirements (thanks @ChuKhaLi!)

## [Previous versions continue...]

For the complete changelog of the underlying Roo-Code project, please see the [original project repository](https://github.com/RooCodeInc/Roo-Code).

---

## Acknowledgments

MakeHub AI Code Assistant is built upon the excellent [Roo-Code](https://github.com/RooCodeInc/Roo-Code) project. We thank the original team and all contributors for their outstanding work in creating the foundation for this enhanced version.

## License

[Apache 2.0 © 2025 MakeHub.ai](./LICENSE)
