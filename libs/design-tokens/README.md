# @ldls/design-tokens

Design tokens for the Ledger Design System.

## Installation

```bash
npm install @ldls/design-tokens
# or
yarn add @ldls/design-tokens
```

## Usage

This library provides design tokens in both JavaScript and CSS formats.

### JavaScript Tokens

JavaScript tokens are useful for React Native and programmatic usage:

```js
// Import JavaScript tokens - works in both React and React Native
import { enterpriseDark, enterpriseLight } from '@ldls/design-tokens';
import { ledgerLiveDark, ledgerLiveLight } from '@ldls/design-tokens';
import { websitesDark, websitesLight } from '@ldls/design-tokens';

// Example accessing tokens
const backgroundColor = enterpriseDark.ColorBackgroundBaseDefault;
const spacing = enterpriseDark.Spacing16;
```

### CSS Variables

CSS variables are ideal for web projects and styling:

#### Method 1: Import all CSS variables

```js
// This imports all themes (not recommended for production)
import '@ldls/design-tokens/css';
```

#### Method 2: Import a specific theme

```js
// Import just one theme
import { enterpriseDark } from '@ldls/design-tokens/css';
```

#### Method 3: Import CSS files directly

```js
// Direct import of a specific CSS file
import '@ldls/design-tokens/lib/enterprise/variables.dark.css';
```

### Available Themes

Both JavaScript and CSS tokens are available for these themes:

- **Enterprise**: `enterpriseDark`, `enterpriseLight`
- **LedgerLive**: `ledgerLiveDark`, `ledgerLiveLight`
- **Websites**: `websitesDark`, `websitesLight`

## Token Categories

Design tokens include:

- Colors (backgrounds, text, borders)
- Spacing
- Typography (font sizes, weights, line heights)
- Border radiuses
- Shadows
- And more...
