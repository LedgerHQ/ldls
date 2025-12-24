# @ledgerhq/lumen-ui-rnative

## 📦 Installation

```bash
npm install @ledgerhq/lumen-ui-rnative @ledgerhq/lumen-design-core

# Install peer dependencies
npm install react-native-svg
```

→ [View @ledgerhq/lumen-ui-rnative on npm](https://www.npmjs.com/package/@ledgerhq/lumen-ui-rnative?activeTab=readme)  
→ [View @ledgerhq/lumen-design-core on npm](https://www.npmjs.com/package/@ledgerhq/lumen-design-core?activeTab=readme)

## ⚡ Setup

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
- [🏠 Main Repository](https://github.com/LedgerHQ/lumen)
