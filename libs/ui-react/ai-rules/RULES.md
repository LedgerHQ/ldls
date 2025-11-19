# LDLS UI React - AI Assistant Rules

## Setup Requirements

### Package Installation

- Import components from `@ledgerhq/ldls-ui-react`
- Import icons from `@ledgerhq/ldls-ui-react/symbols` (not from main package)
- Import design tokens/presets from `@ledgerhq/ldls-design-core`

### Tailwind Configuration (REQUIRED)

- Tailwind config MUST include LDLS in content array: `'./node_modules/@ledgerhq/ldls-ui-react/dist/lib/**/*.{js,ts,jsx,tsx}'`
- Always use a preset from `@ledgerhq/ldls-design-core`: ledgerLivePreset, enterprisePreset, websitesPreset, or allBrandsPreset
- Import presets: `import { ledgerLivePreset } from '@ledgerhq/ldls-design-core'`

### Peer Dependencies

- Button requires `@radix-ui/react-slot`
- Checkbox requires `@radix-ui/react-checkbox`
- Switch requires `@radix-ui/react-switch`
- Dialog requires `@radix-ui/react-dialog`
- Tooltip requires `@radix-ui/react-tooltip`
- Select requires `@radix-ui/react-select`

---

## Design Tokens

### Typography Utilities

- Do not use Tailwind Typography utilities (e.g., `font-bold`, `text-sm`, etc.)
- Use LDLS custom typography utilities:
  - `.responsive-display-1` to `.responsive-display-4`
  - `.heading-0`, `.heading-0-semi-bold` through `.heading-4`, `.heading-4-semi-bold`
  - `.body-1`, `.body-1-semi-bold` through `.body-4`, `.body-4-semi-bold`

### Colors and Background

- Do not use Tailwind default color palette (e.g., `text-gray-500`, `bg-blue-600`)
- Use LDLS design tokens:
  - Text colors: `text-base`, `text-on-accent`, `text-muted`, `text-disabled`
  - Background colors: `bg-base`, `bg-muted`, `bg-accent`, `bg-canvas`
  - Interactive states: `bg-base-hover`, `bg-base-pressed`, `bg-accent-hover`, `bg-accent-pressed`
  - Border colors: `border-base`, `border-muted`, `border-accent`
  - Status colors: `text-success`, `text-error`, `text-warning`, `text-info`
  - Crypto colors: `crypto-btc`, `crypto-eth`, etc. (and variants like `crypto-btc-0`)
  - Discovery colors: `discover-base`, `discover-muted`, etc.

### Spacing and Layout

- Use pixel values for spacing: `p-{size}`, `px-{size}`, `py-{size}`, `pt-{size}`, etc.
- Use pixel values for margins: `m-{size}`, `mx-{size}`, `my-{size}`, `mt-{size}`, etc.
- Common spacing values: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64

### Borders and Shadows

- Border radius: `rounded-sm`, `rounded-md`, `rounded-lg`, etc.
- Border width: `border` for default, `border-2` for active/emphasized states
- Drop shadows: `drop-shadow-sm`, `drop-shadow-md`, `drop-shadow-lg`, `drop-shadow-xl`, `drop-shadow-2xl`

### Gradients

- Background gradients: `bg-gradient-top`, `bg-gradient-bottom`, `bg-gradient-{crypto}`

### Tailwind Classnames Rules

- Tailwind utilities should never be concatenated
- Always use complete class names as strings
- Use conditional logic for dynamic class names
- Example: `className="text-base bg-muted"` ✅
- Example: `className={text-${color}}` ❌
- Example: `className={cn("text-base", color && "bg-muted")}` ✅

---

## Component Usage

### Component Imports

- Import components from `@ledgerhq/ldls-ui-react`
- Import compound components together: `Select, SelectTrigger, SelectContent, SelectItem, SelectItemText`
- Example: `import { Button, Banner, Tag } from '@ledgerhq/ldls-ui-react'`

### Icons

- Always import icons from `/symbols` entry point
- Import: `import { ArrowRight, CheckCircle } from '@ledgerhq/ldls-ui-react/symbols'`
- Use as components: `<ArrowRight size={20} />`
- Pass as props: `<Button icon={ArrowRight}>Label</Button>`
- Available sizes: 12, 16, 20, 24, 32, 40, 48, 56

### Compound Components

Import all parts together:

```tsx
// Select
import { Select, SelectTrigger, SelectContent, SelectItem, SelectItemText } from '@ledgerhq/ldls-ui-react';

// Dialog
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from '@ledgerhq/ldls-ui-react';

// Tooltip
import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/ldls-ui-react';
```

### Dark Mode

- LDLS components support dark mode automatically via CSS custom properties
- Enable by adding `dark` class to root element: `<html className="dark">`
- No component-level changes needed

---

## Figma Integration

Use these rules when extracting components from Figma designs.

### Token to Tailwind Mapping

Combine the Tailwind prefix for the CSS property with the unique part of the token name.
Use ONLY the unique part after the last hyphen of the CSS variable name.

#### Background Colors

- Figma shows: `background-color: var(--background-base);`
- Result: `bg-base` (NOT `bg-background-base`)

#### Text Colors

- Figma shows: `color: var(--text-on-accent);`
- Result: `text-on-accent` (NOT `text-text-on-accent`)

#### Border Colors

- Figma shows: `border-color: var(--border-muted);`
- Result: `border-muted` (NOT `border-border-muted`)

#### Spacing

- Figma shows: `padding: var(--spacing-16);`
- Result: `p-16` (NOT `p-spacing-16`)

- Figma shows: `margin: var(--spacing-8);`
- Result: `m-8` (NOT `m-spacing-8`)

#### Border Radius

- Figma shows: `border-radius: var(--radius-lg);`
- Result: `rounded-lg` (NOT `rounded-radius-lg`)

#### Border Width

- Figma shows: `border-width: var(--border-width);`
- Result: `border` (NOT `border-width`)

- Figma shows: `border-width: var(--border-width-active);`
- Result: `border-2` (NOT `border-width-active`)

#### Typography Styles

- Figma shows: a comment with the style name, like `/* body/3 */`
- Transform: replace `/` with `-`
- Result: `body-3` (transform `body/3` → `body-3`)
- Example: `/* heading/2-semi-bold */` → `heading-2-semi-bold`
