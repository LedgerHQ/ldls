# @ledgerhq/lumen-ui-rnative

**React Native UI component library for Ledger Design System** - Native mobile components built with NativeWind and design tokens.

## 📦 Installation

```bash
npm install @ledgerhq/lumen-ui-rnative @ledgerhq/lumen-design-core

# Install peer dependencies
npm install react-native-svg nativewind
```

→ [View @ledgerhq/lumen-ui-rnative on npm](https://www.npmjs.com/package/@ledgerhq/lumen-ui-rnative?activeTab=readme)  
→ [View @ledgerhq/lumen-design-core on npm](https://www.npmjs.com/package/@ledgerhq/lumen-design-core?activeTab=readme)

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
import { ledgerLivePreset } from '@ledgerhq/lumen-design-core';

const config = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@ledgerhq/lumen-ui-rnative/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [ledgerLivePreset],
} satisfies Config;

export default config;
```

_Using [@ledgerhq/lumen-design-core](https://www.npmjs.com/package/@ledgerhq/lumen-design-core?activeTab=readme) preset_

### 2. Start Using Components

```tsx
import { Button } from '@ledgerhq/lumen-ui-rnative';
import { ArrowRight } from '@ledgerhq/lumen-ui-rnative/symbols';

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
import { Settings, ArrowRight, CheckCircle } from '@ledgerhq/lumen-ui-rnative/symbols';

// Use icons directly as components with size prop
<Settings size={24} />
<ArrowRight size={20} color="accent" />
<CheckCircle size={16} />

// Available sizes: 16, 20, 24, 40, 48, 56
```

---

## 📚 Documentation

- [📱 React Native Setup Guide](https://nativewind.dev/getting-started/react-native)
- [🏠 Main Repository](https://github.com/LedgerHQ/lumen)
