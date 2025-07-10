# LDLS Design System Documentation

<p align="center">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45" alt="Nx logo">
</p>

<h3 align="center">A cross-platform design system for React and React Native applications</h3>

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Design Tokens](#design-tokens)
- [Components](#components)
- [Theming](#theming)
- [Development](#development)
- [Contributing](#contributing)
- [Alpha Release Information](#alpha-release-information)

## Introduction

LDLS is a comprehensive design system built to provide a consistent user experience across both web and mobile platforms. It leverages modern technologies to create a flexible, maintainable, and scalable component library that can be used across different applications.

### Key Features

- **Cross-platform compatibility**: Works seamlessly with both React and React Native
- **Consistent design language**: Shared design tokens and components across platforms
- **Flexible theming**: Support for multiple brands and themes
- **Modern development workflow**: Built with Nx, Storybook, and other modern tools

## Architecture

The LDLS Design System is structured as a monorepo using Nx, with the following key libraries:

- **ui-core**: Shared utilities and types used across platforms
- **ui-react**: React-specific components and patterns
- **ui-rnative**: React Native-specific components and patterns
- **design-core**: Design tokens and symbols for the design system
- **design-tokens**: Token definitions and configurations
- **utils-shared**: Shared utility functions

### Technology Stack

- **Monorepo Management**: [Nx](https://nx.dev/)
- **UI Development**: [React](https://reactjs.org/) & [React Native](https://reactnative.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [NativeWind](https://nativewind.dev/)
- **Documentation & Testing**: [Storybook](https://storybook.js.org/) & [Chromatic](https://www.chromatic.com/)
- **Building & Bundling**: [Rollup](https://rollupjs.org/) & [Vite](https://vitejs.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Component Variants**: [class-variance-authority](https://cva.style/docs)
- **Utility Libraries**: clsx, tailwind-merge, lodash-es

## Getting Started

### Installation

> **Note**: The alpha version is currently only available for React applications. React Native support will be added in future releases.

To install the LDLS Design System in your React project:

```bash
# Using npm
npm install @ldls/ui-react @ldls/design-core

# Using yarn
yarn add @ldls/ui-react @ldls/design-core
```

### Configuration

#### Tailwind Configuration

Add the LDLS Design System preset to your Tailwind configuration:

```js
// tailwind.config.js or tailwind.config.ts
import { ledgerLivePreset } from '@ldls/design-core';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ldls/ui-react/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [ledgerLivePreset], // Choose the preset that matches your brand
};

export default config;
```

Available presets:
- `ledgerLivePreset`: Optimized for Ledger Live applications
- `enterprisePreset`: Optimized for enterprise applications
- `websitesPreset`: Optimized for websites
- `allBrandsPreset`: Includes all brand tokens

#### Using Components

Import and use components in your React application:

```jsx
import { Button } from '@ldls/ui-react';

function MyComponent() {
  return (
    <Button variant="accent" size="medium">
      Click Me
    </Button>
  );
}
```

## Design Tokens

The design system uses a hierarchical token structure:

1. **Primitives**: Base values like colors, spacing, typography
2. **Themes**: Light and dark theme variations
3. **Brands**: Brand-specific overrides (Ledger Live, Enterprise, Websites)
4. **Breakpoints**: Responsive breakpoint definitions
5. **Icons**: Icon size definitions

### Using Design Tokens

#### With Tailwind Classes

```jsx
<div className="bg-background text-base p-16 rounded-lg">
  <h2 className="heading-3 text-accent mb-8">Hello World</h2>
  <p className="body-1">This is using design tokens via Tailwind classes</p>
</div>
```

#### With CSS Variables

```css
.my-component {
  background-color: var(--color-background-base);
  color: var(--color-text-base);
  padding: var(--spacing-16);
}
```

## Components

The design system provides a set of components for both React and React Native applications. Each component is:

- **Accessible**: Built with accessibility in mind
- **Customizable**: Supports variants and props for customization
- **Documented**: Includes Storybook documentation and examples
- **Tested**: Includes interaction tests

### Available Components

- **Button**: Multi-variant button component
- **Icon**: SVG icon component
- More components will be added in future releases

## Theming

The design system supports multiple themes and brands:

- **Light and Dark modes**: All components support both light and dark themes
- **Brand variations**: Support for different brand styles (Ledger Live, Enterprise, Websites)

## Development

### Running the Libraries

```bash
# Start React components in Storybook
npx nx run @ldls/ui-react:serve:storybook

# Build React components
npx nx run @ldls/ui-react:build

# Build React Native components
npx nx run @ldls/ui-rnative:build

# Build shared core library
npx nx run @ldls/ui-core:build
```

### Writing Component Documentation

Components are documented using Storybook stories. Create a `.stories.tsx` file next to your component:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  title: 'Components/YourComponent',
  tags: ['autodocs'], // Enables automatic documentation
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

// Basic usage example
export const Primary: Story = {
  args: {
    // Component props
  },
};
```

### Writing Interaction Tests

Add interaction tests in your stories using the `play` function:

```typescript
export const WithInteraction: Story = {
  args: {
    // Component props
  },
  play: async ({ canvasElement, step }) => {
    // Test steps are automatically documented
    await step('Click the button', async () => {
      const button = canvasElement.querySelector('button');
      button?.click();
    });
  },
};
```

## Contributing

For teams interested in contributing to the design system during the alpha phase:

1. Report any issues or bugs you encounter
2. Provide feedback on component APIs and usability
3. Suggest new components or features that would be valuable

## Alpha Release Information

The LDLS Design System is currently in alpha, with the following limitations:

- **React Support Only**: The alpha version is only available for React applications. React Native support will be added in future releases.
- **Limited Component Set**: The initial release includes a small set of core components. More will be added in future releases.
- **API Changes**: Component APIs may change between alpha and stable releases based on feedback.
- **Documentation**: Documentation is still being developed and will be expanded in future releases.

### Installation for Alpha Testers

The design system packages are published to the public npm registry. To install the alpha version:

```bash
npm install @ldls/ui-react@alpha @ldls/design-core@alpha
```

### Feedback

We welcome feedback from alpha testers! Please share your experiences, suggestions, and any issues you encounter to help us improve the design system.
