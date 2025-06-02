**English** • [Català](locales/ca/CONTRIBUTING.md) • [Deutsch](locales/de/CONTRIBUTING.md) • [Español](locales/es/CONTRIBUTING.md) • [Français](locales/fr/CONTRIBUTING.md) • [हिंदी](locales/hi/CONTRIBUTING.md) • [Italiano](locales/it/CONTRIBUTING.md) • [Nederlands](locales/nl/CONTRIBUTING.md) • [Русский](locales/ru/CONTRIBUTING.md)

[日本語](locales/ja/CONTRIBUTING.md) • [한국어](locales/ko/CONTRIBUTING.md) • [Polski](locales/pl/CONTRIBUTING.md) • [Português (BR)](locales/pt-BR/CONTRIBUTING.md) • [Türkçe](locales/tr/CONTRIBUTING.md) • [Tiếng Việt](locales/vi/CONTRIBUTING.md) • [简体中文](locales/zh-CN/CONTRIBUTING.md) • [繁體中文](locales/zh-TW/CONTRIBUTING.md)

# Contributing to MakeHub AI Code Assistant

MakeHub AI Code Assistant is a community-driven project built upon the excellent foundation of Roo-Code and enhanced with MakeHub.ai's universal API load balancing technology. We deeply value every contribution. To streamline collaboration, we operate on an [Issue-First](#issue-first-approach) basis, meaning all [Pull Requests (PRs)](#submitting-a-pull-request) must first be linked to a GitHub Issue. Please review this guide carefully.

## Table of Contents

- [Before You Contribute](#before-you-contribute)
- [Finding & Planning Your Contribution](#finding--planning-your-contribution)
- [Development & Submission Process](#development--submission-process)
- [Legal](#legal)

## Before You Contribute

### 1. Code of Conduct

All contributors must adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

### 2. Project Roadmap

Our roadmap guides the project's direction. Align your contributions with these key goals:

### Reliability First

- Ensure diff editing and command execution are consistently reliable.
- Reduce friction points that deter regular usage.
- Guarantee smooth operation across all locales and platforms.
- Expand robust support for a wide variety of AI providers and models through MakeHub's universal API router.

### Enhanced User Experience

- Streamline the UI/UX for clarity and intuitiveness.
- Continuously improve the workflow to meet the high expectations developers have for daily-use tools.
- Integrate cost optimization features seamlessly into the developer experience.

### Leading on Agent Performance & Cost Optimization

- Establish comprehensive evaluation benchmarks (evals) to measure real-world productivity.
- Make it easy for everyone to easily run and interpret these evals.
- Ship improvements that demonstrate clear increases in eval scores.
- Optimize API costs through intelligent routing while maintaining performance.

### MakeHub Integration Goals

- Enhance the universal API load balancing capabilities.
- Improve cost tracking and provider diversity features.
- Develop better failover and reliability mechanisms.
- Create seamless integration between the VS Code extension and MakeHub.ai platform.

Mention alignment with these areas in your PRs.

### 3. Join the MakeHub AI Code Assistant Community

- **Primary:** Join our [Discord](https://discord.gg/roocode) and DM **Hannes Rudolph (`hrudolph`)**.
- **Alternative:** Experienced contributors can engage directly via [GitHub Projects](https://github.com/orgs/RooCodeInc/projects/1).
- **MakeHub Platform:** Visit [MakeHub.ai](https://makehub.ai) to learn more about our universal API load balancing technology.

## Finding & Planning Your Contribution

### Types of Contributions

- **Bug Fixes:** Addressing code issues.
- **New Features:** Adding functionality, especially MakeHub integration features.
- **Documentation:** Improving guides and clarity.
- **MakeHub Enhancements:** Improving cost optimization, provider routing, and platform integration.

### Issue-First Approach

All contributions must begin with a GitHub Issue.

- **Check existing issues**: Search [GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues).
- **Create an issue**: Use appropriate templates:
    - **Bugs:** "Bug Report" template.
    - **Features:** "Detailed Feature Proposal" template. Approval required before starting.
    - **MakeHub Features:** Clearly indicate if the feature relates to MakeHub integration.
- **Claim issues**: Comment and await official assignment.

**PRs without approved issues may be closed.**

### Deciding What to Work On

- Check the [GitHub Project](https://github.com/orgs/RooCodeInc/projects/1) for unassigned "Good First Issues."
- For docs, visit [Roo Code Docs](https://github.com/RooCodeInc/Roo-Code-Docs).
- Consider MakeHub-specific features like cost optimization, provider management, and API routing improvements.

### Reporting Bugs

- Check for existing reports first.
- Create new bugs using the ["Bug Report" template](https://github.com/RooCodeInc/Roo-Code/issues/new/choose).
- **Security issues**: Report privately via [security advisories](https://github.com/RooCodeInc/Roo-Code/security/advisories/new).
- **MakeHub-specific issues**: Clearly indicate if the bug is related to MakeHub integration features.

## Development & Submission Process

### Development Setup

1. **Fork & Clone:**

```
git clone https://github.com/YOUR_USERNAME/Roo-Code.git
```

2. **Install Dependencies:**

```
pnpm install
```

3. **Debugging:** Open with VS Code (`F5`).

4. **MakeHub Testing:** If working on MakeHub features, ensure you have access to test the API routing functionality.

### Writing Code Guidelines

- One focused PR per feature or fix.
- Follow ESLint and TypeScript best practices.
- Write clear, descriptive commits referencing issues (e.g., `Fixes #123`).
- Provide thorough testing (`npm test`).
- Rebase onto the latest `main` branch before submission.
- For MakeHub features, ensure proper error handling and cost tracking integration.

### Submitting a Pull Request

- Begin as a **Draft PR** if seeking early feedback.
- Clearly describe your changes following the Pull Request Template.
- Provide screenshots/videos for UI changes.
- Indicate if documentation updates are necessary.
- For MakeHub features, include details about cost optimization impact and provider compatibility.

### Pull Request Policy

- Must reference pre-approved, assigned issues.
- PRs without adherence to the policy may be closed.
- PRs should pass CI tests, align with the roadmap, and have clear documentation.
- MakeHub-related PRs should demonstrate proper integration with the universal API router.

### Review Process

- **Daily Triage:** Quick checks by maintainers.
- **Weekly In-depth Review:** Comprehensive assessment.
- **Iterate promptly** based on feedback.
- **MakeHub Review:** Features affecting cost optimization or API routing will receive additional technical review.

## Legal

By contributing, you agree your contributions will be licensed under the Apache 2.0 License, consistent with MakeHub AI Code Assistant's licensing.

## Acknowledgments

This project builds upon the excellent [Roo-Code](https://github.com/RooCodeInc/Roo-Code) project. We thank the original team and contributors for their outstanding work in creating the foundation for this enhanced version with MakeHub.ai integration.
