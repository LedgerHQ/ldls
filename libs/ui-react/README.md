# @ledgerhq/ldls-ui-react

**React UI component library for Ledger Design System (LDLS)** - A comprehensive collection of accessible, customizable React components built with Tailwind CSS and Radix UI primitives.

## 🎨 [View Components in Storybook →](https://ldls.vercel.app)

---

## 📦 Installation

Install the package and its required peer dependencies:

```bash
npm install @ledgerhq/ldls-ui-react @ledgerhq/ldls-design-core

# Install peer dependencies
npm install @radix-ui/react-checkbox @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge

# React (if not already installed)
npm install react react-dom
```

→ [View @ledgerhq/ldls-design-core on npm](https://www.npmjs.com/package/@ledgerhq/ldls-design-core?activeTab=readme)

## ⚡ Quick Setup

### 1. Configure Tailwind CSS

Create or update your `tailwind.config.js`:

```typescript
import type { Config } from 'tailwindcss';
import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ledgerhq/ldls-ui-react/dist/lib/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [ledgerLivePreset],
} satisfies Config;

export default config;
```

### 2. Start Using Components

```tsx
import { Button } from '@ledgerhq/ldls-ui-react';
import { ArrowRight } from '@ledgerhq/ldls-ui-react/symbols';

function App() {
  return (
    <Button appearance="accent" icon={ArrowRight}>
      Get Started
    </Button>
  );
}
```

---

## 🎨 Theming & Customization

### Using Design Tokens

All components use design tokens from `@ledgerhq/ldls-design-core`:

```tsx
// Components automatically use theme tokens
<Button appearance="accent">Themed Button</Button>

const CustomCard = () => (
  <div className="bg-base hover:bg-base-hover heading-0 p-12">
    Custom themed content
  </div>
);
```

### Dark Mode Support

LDLS components automatically support dark mode through CSS custom properties. The design system includes both light and dark theme tokens.

#### Enable Dark Mode

Add the `dark` class to your root element or use CSS media queries:

```tsx
// Manual dark mode toggle
<html className="dark">
  <body>
    <App />
  </body>
</html>


```

---

## ♿ Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation** - Full keyboard support for all interactive elements
- **Screen Readers** - Proper ARIA labels and descriptions
- **Focus Management** - Visible focus indicators and logical tab order
- **Color Contrast** - WCAG AA compliant color combinations
- **Semantic HTML** - Proper HTML elements and structure

---

## 🎨 Icon System

Import icons directly from the symbols export:

```tsx
import { ArrowRight, CheckCircle, AlertTriangle } from '@ledgerhq/ldls-ui-react/symbols';

// Use icons as components with size prop
<ArrowRight size={24} />
<CheckCircle size={20} className="text-success" />
<AlertTriangle size={16} />

// Available sizes: 16, 20, 24, 40, 48, 56
```

## 🔷 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type {
  ButtonProps,
  BannerProps,
  InputProps
} from '@ledgerhq/ldls-ui-react';

const CustomButton = (props: ButtonProps) => {
  return <Button {...props} className="custom-button" />;
};
```

---

## 📋 API Reference

Each component exports:

- **Component** - The React component
- **Props interface** - TypeScript interface for props
- **Variants** - Available styling variants

For detailed API documentation, visit our [Storybook](https://ldls.vercel.app).

---

## 🤝 Contributing

This package is part of the [Ledger Design System monorepo](https://github.com/LedgerHQ/ldls).

To contribute:

1. Visit the [main repository](https://github.com/LedgerHQ/ldls)
2. Read our [Contributing Guide](https://github.com/LedgerHQ/ldls/blob/main/CONTRIBUTING.md)
3. Check the [Development Setup](https://github.com/LedgerHQ/ldls#setup-development-environment)

---

## 🔗 Links

- [📚 Storybook Documentation](https://ldls.vercel.app)
- [🏠 Main Repository](https://github.com/LedgerHQ/ldls)
- [📦 npm Package](https://www.npmjs.com/package/@ledgerhq/ldls-ui-react)
- [🎨 Design System SetUp Guide](https://ldls.vercel.app/?path=/docs/tailwind-setup-guide--docs)
- [🐛 Report Issues](https://github.com/LedgerHQ/ldls/issues)
