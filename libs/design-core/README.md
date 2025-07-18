# @ldls/design-core

Design tokens and symbols for the Ledger Design System.

## Installation

```bash
npm install @ldls/design-core
# or
yarn add @ldls/design-core
```

## Usage

This library provides design tokens in both JavaScript and CSS formats, generated from a centralized token system using Style Dictionary.

### Tailwind Preset

```js
// Import tailwind preset - works in both React and React Native
import { ledgerLivePreset } from '@ldls/design-core';

/* Example */

const config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}", // App's own content (e.g., Ledger Live's specific screens/components)
  "./node_modules/@ldls/ui-react/dist/lib/**/*.{js,ts,jsx,tsx}" // Path to the installed Ledger UI Kit components
  ],
  presets: [ledgerLivePreset], // the installed tailwind preset
} satisfies Config;

export default config;


```

### CSS Variables

CSS variables are useful for projects that do not use tailwind as a styling approach:

```css
/* CSS variables are available as custom properties */
.my-component {
  background-color: var(--color-background-base);
  color: var(--color-text-base);
  padding: var(--spacing-16);
}
```

### Available Themes

The library provides a preset for each brand with both light and dark themes:

- **Enterprise**: `enterprisePreset`
- **Ledger Live**: `ledgerLivePreset`
- **Websites**: `websitesPreset`

Each preset includes the complete set of design tokens optimized for the specific brand and use case.

## Token Categories

Design tokens are organized into the following categories:

### Colors

- **Background**: Base backgrounds, accent, muted
- **Text**: base, accent, muted text colors
- **Border**: Border colors for components
- **Status**: Success, warning, error, info colors

### Spacing

- Consistent spacing scale from 1px to 128px
- Named spacing tokens (e.g., `spacing-1`, `spacing-2`, `spacing-3`)

### Typography

- **Font Sizes**: Responsive typography scale
- **Font Weights**: Regular, medium, semibold, bold
- **Line Heights**: Optimized for readability
- **Letter Spacing**: Fine-tuned character spacing

### Elevation & Effects

- **Border Radius**: Corner radius values
- **Shadows**: Drop shadows and elevation
- **Opacity**: Transparency values

## Development

This library uses [Style Dictionary](https://amzn.github.io/style-dictionary/) to transform design tokens from JSON source files into multiple output formats.

### Source Files

Design Tokens are defined in hierarchical JSON files:

- `1.primitives.value.json`: Base primitive values
- `2.theme.light.json` / `2.theme.dark.json`: Light and dark theme variations
- `3.brand.*.json`: Brand-specific token overrides
- `4.breakpoint.*.json`: Responsive breakpoint definitions

### Building Tokens

The build process transforms these source tokens into consumable JavaScript and CSS formats for each theme and breakpoint combination.

Using the JavaScript format we also generate a preset per brand.

## Contributing

When a new version of design tokens and/or symbols is published in figma:

1. Update the appropriate JSON source files automatically via the [Github Actions](https://github.com/LedgerHQ/ldls/actions/workflows/sync-figma.yml)
2. Run the build process to generate new output files `npx nx run @ldls/design-core:build`
3. Test the changes across different themes and platforms
4. Update documentation as needed

## Version

Current version: **0.0.1** (Development)
