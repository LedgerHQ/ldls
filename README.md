# Ledger Design System

<h3 align="center">A cross-platform design system for React and React Native applications</h3>

<p align="center">
  <a href="https://ldls.vercel.app" target="_blank">📚 View Storybook</a> |
  <a href="https://github.com/LedgerHQ/ldls/releases">📋 Changelog</a>
</p>

---

## 👩‍💻 Using LDLS in Your Project

LDLS is a comprehensive design system that provides consistent UI components for both web and mobile applications.

### Quick Start

1. Ensure you are connected to the VPN, login to the npm registry and create a `.npmrc` file in your project root:

```bash
npm login --registry=https://jfrog.ledgerlabs.net/artifactory/api/npm/ldls-npm-prod-public/
```

```bash
# .npmrc
@ldls:registry=https://jfrog.ledgerlabs.net/artifactory/api/npm/ldls-npm-prod-public/
```

2. Install the packages and their peer dependencies:

```bash
# Install the UI Kit and required peer dependencies
npm install @ledgerhq/ldls-ui-react @ledgerhq/ldls-design-core clsx tailwind-merge class-variance-authority
```

3. Configure Tailwind:

```typescript
import type { Config } from 'tailwindcss';
import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Your project's files
    "./node_modules/@ledgerhq/ldls-ui-react/dist/lib/**/*.{js,ts,jsx,tsx}" // Ledger UI Kit components
  ],
  presets: [ledgerLivePreset], // the installed tailwind preset
} satisfies Config;

export default config;
```

4. Use components:

```bash
# Install peer dependency related to the button component
npm install @radix-ui/react-slot
```

`@radix-ui/react-slot`: This dependency is used internally by the Button component to enable flexible composition patterns. It allows the Button to merge its props with child elements when needed.

```tsx
import { Button } from '@ledgerhq/ldls-ui-react';

function App() {
  return <Button appearance="accent">Get Started</Button>;
}
```

### Learn More

- [📖 Full User Guide](./USER_GUIDE.md) - Comprehensive guide for using LDLS
- [🎨 Design Guidelines](./USER_GUIDE.md#design-tokens) - Learn about our design tokens and principles
- [🧩 Component Library](https://your-storybook-url.com) - Explore available components
- [⚙️ Configuration Guide](./USER_GUIDE.md#configuration) - Advanced configuration options

---

## 🛠 Contributing to LDLS

LDLS is built with Nx, supporting both React and React Native development. Here's how to get started with development:

### Setup Development Environment

1. Clone and install dependencies:

```bash
npm install --legacy-peer-deps
```

2. Start development environment:

```bash
# Start React Storybook
npx nx run @ledgerhq/ldls-ui-react:serve:storybook

# Build all libraries
npx nx run-many --target=build --all
```

### Project Structure

```
ldls/
├── libs/
│   ├── ui-core/       # Shared utilities and types
│   ├── ui-react/      # React components
│   ├── ui-rnative/    # React Native components
│   ├── design-core/   # Design tokens and themes
│   └── utils-shared/  # Shared utilities
└── apps/
    └── ldls-react/    # Demo React application
```

### Development Workflow

1. Create a new branch from main
2. Make your changes
3. Add tests and stories
4. Submit a pull request

### Learn More About Contributing

- [🔧 Development Guide](./CONTRIBUTING.md) - Detailed development setup and guidelines
- [📝 Coding Standards](./CONTRIBUTING.md#coding-standards) - Our coding conventions
- [🧪 Testing Guide](./CONTRIBUTING.md#testing) - How to write and run tests
- [📚 Documentation Guide](./CONTRIBUTING.md#documentation) - How to document your changes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

---

<p align="center">
  Built with ❤️ by the LDS Team.
</p>
