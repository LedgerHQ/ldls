# @ledgerhq/ldls-ui-rnative

**React Native UI component library for Ledger Design System** - Native mobile components built with NativeWind and design tokens.

## 📦 Installation

```bash
npm install @ledgerhq/ldls-ui-rnative @ledgerhq/ldls-design-core

# Install peer dependencies
npm install react-native-svg nativewind
```

→ [View @ledgerhq/ldls-ui-rnative on npm](https://www.npmjs.com/package/@ledgerhq/ldls-ui-rnative?activeTab=readme)  
→ [View @ledgerhq/ldls-design-core on npm](https://www.npmjs.com/package/@ledgerhq/ldls-design-core?activeTab=readme)

## ⚡ Setup

### 1. Configure NativeWind

Install and configure NativeWind in your React Native project:

```bash
npm install nativewind
npm install --dev tailwindcss
```

Create `tailwind.config.js`:

```typescript
import type { Config } from 'tailwindcss';
import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';

const config = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@ledgerhq/ldls-ui-rnative/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [ledgerLivePreset],
} satisfies Config;

export default config;
```

_Using [@ledgerhq/ldls-design-core](https://www.npmjs.com/package/@ledgerhq/ldls-design-core?activeTab=readme) preset_

### 2. Start Using Components

```tsx
import { Button } from '@ledgerhq/ldls-ui-rnative';
import { ArrowRight } from '@ledgerhq/ldls-ui-rnative/symbols';

export default function App() {
  return (
    <Button appearance="accent" icon={ArrowRight}>
      Get Started
    </Button>
  );
}
```
---

## 🔧 Icon Usage

```tsx
import { Settings, ArrowRight, CheckCircle } from '@ledgerhq/ldls-ui-rnative/symbols';

// Use icons directly as components with size prop
<Settings size={24} />
<ArrowRight size={20} className="text-accent" />
<CheckCircle size={16} />

// Available sizes: 16, 20, 24, 40, 48, 56
```

---

## 📚 Documentation

- [📱 React Native Setup Guide](https://nativewind.dev/getting-started/react-native)
- [🏠 Main Repository](https://github.com/LedgerHQ/ldls)
