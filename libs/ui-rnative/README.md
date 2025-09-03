# @ledgerhq/ldls-ui-rnative

**React Native UI component library for Ledger Design System** - Native mobile components built with NativeWind and design tokens.

## 📦 Installation

```bash
npm install @ledgerhq/ldls-ui-rnative @ledgerhq/ldls-design-core

# Install peer dependencies
npm install react-native-svg nativewind
```

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

## 🎨 Dark Mode Support

Components automatically adapt to system theme:

```tsx
import { useColorScheme } from 'react-native';
import { Button } from '@ledgerhq/ldls-ui-rnative';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <View className={colorScheme === 'dark' ? 'dark' : ''}>
      <Button appearance="accent">Themed Button</Button>
    </View>
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
