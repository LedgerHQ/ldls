# LDLS Design System User Guide

<h3 align="center">A cross-platform design system for React and React Native applications</h3>

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Design Tokens](#design-tokens)
- [Components](#components)
- [Theming](#theming)
- [Alpha Release Information](#alpha-release-information)

## Introduction

LDLS is a comprehensive design system built to provide a consistent user experience across both web and mobile platforms. It leverages modern technologies to create a flexible, maintainable, and scalable component library that can be used across different applications.

### Key Features

- **Cross-platform compatibility**: Works seamlessly with both React and React Native
- **Consistent design language**: Shared design tokens and components across platforms
- **Flexible theming**: Support for multiple brands and themes
- **Modern development workflow**: Built with Nx, Storybook, and other modern tools

### Technology Stack

- **UI Development**: [React](https://reactjs.org/) & [React Native](https://reactnative.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [NativeWind](https://nativewind.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Component Variants**: [class-variance-authority](https://cva.style/docs)
- **Utility Libraries**: clsx, tailwind-merge, lodash-es

> Alpha Release Information
> The LDLS Design System is currently in alpha, with the following limitations:
>
> - **React Support Only**: The alpha version is only available for React applications. React Native support will be added in future releases.
> - **Limited Component Set**: The initial release includes a small set of core components. More will be added in future releases.
> - **API Changes**: Component APIs may change between alpha and stable releases based on feedback.
> - **Documentation**: Documentation is still being developed and will be expanded in future releases.
>
> ### Feedback
>
> We welcome feedback from alpha testers! Please share your experiences, suggestions, and any issues you encounter to help us improve the design system.

## Getting Started

### Installation

> **Note**: The alpha version is currently only available for React applications. React Native support will be added in future releases.

Before installing the LDLS Design System, ensure you:

1. Connect to the Ledger's VPN
2. Login to npm

```bash
npm login --registry=https://jfrog.ledgerlabs.net/artifactory/api/npm/ldls-npm-prod-public/
```

3. Create a `.npmrc` file in your project root:

```bash
# .npmrc
@ldls:registry=https://jfrog.ledgerlabs.net/artifactory/api/npm/ldls-npm-prod-public/
```

Then install the packages:

```bash
# Using npm
npm install @ldls/ui-react @ldls/design-core clsx tailwind-merge class-variance-authority

# Using yarn
yarn add @ldls/ui-react @ldls/design-core clsx tailwind-merge class-variance-authority
```

The LDLS Design System requires the following peer dependencies:

- `clsx`: For conditional class name composition
- `tailwind-merge`: For merging Tailwind CSS classes without conflicts
- `class-variance-authority`: For type-safe component variants

### Configuration

#### Tailwind Configuration

Add the LDLS Design System preset to your Tailwind configuration:

```js
// tailwind.config.js or tailwind.config.ts
import { ledgerLivePreset } from '@ldls/design-core';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@ldls/ui-react/dist/**/*.{js,ts,jsx,tsx}'],
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

```bash
# Install peer dependency related to the button component
npm install @radix-ui/react-slot
```

`@radix-ui/react-slot`: This dependency is used internally by the Button component to enable flexible composition patterns. It allows the Button to merge its props with child elements when needed.

Import and use components in your React application:

```jsx
import { Button } from '@ldls/ui-react';

function MyComponent() {
  return (
    <Button appearance="accent" size="md">
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
<div className="rounded-lg bg-base p-16 text-base">
  <h2 className="text-accent mb-8 heading-3">Hello World</h2>
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
