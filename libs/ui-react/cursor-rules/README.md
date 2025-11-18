# LDLS Cursor Rules

These are Cursor AI rules to help AI assistants suggest correct LDLS usage patterns.

## Installation

Copy these rules to your project's `.cursor/rules/` directory:

```bash
# Copy all rules
cp -r node_modules/@ledgerhq/ldls-ui-react/cursor-rules/* .cursor/rules/

# Or copy individually
cp node_modules/@ledgerhq/ldls-ui-react/cursor-rules/ldls-*.mdc .cursor/rules/
```

## Files

### Always Applied Rules

These rules are automatically applied in all files:

- **ldls-setup.mdc** - Package installation and Tailwind configuration requirements
- **ldls-design-tokens.mdc** - Design token usage and Tailwind utilities (typography, colors, spacing, etc.)
- **ldls-components.mdc** - Component import patterns and usage

### Conditional Rules

Apply these when needed:

- **ldls-figma.mdc** - Figma MCP integration for extracting components from Figma designs

## What These Rules Do

The cursor rules help AI assistants:

✅ **Correct imports** - Suggest proper import paths (e.g., `/symbols` for icons)  
✅ **Design tokens** - Use LDLS tokens instead of Tailwind defaults  
✅ **Configuration** - Set up Tailwind with required LDLS content paths  
✅ **Figma extraction** - Map Figma variables to Tailwind classes correctly  
✅ **Dependencies** - Recommend required Radix UI peer dependencies

## Example

With these rules, AI assistants will correct:

```tsx
// ❌ Without rules
import { ArrowRight } from '@ledgerhq/ldls-ui-react';
<div className='text-gray-500 font-bold'>Text</div>;

// ✅ With rules
import { ArrowRight } from '@ledgerhq/ldls-ui-react/symbols';
<div className='text-muted heading-2'>Text</div>;
```

## Learn More

- [LDLS Documentation](https://ldls.vercel.app)
- [Package README](../README.md)
- [Main Repository](https://github.com/LedgerHQ/ldls)
