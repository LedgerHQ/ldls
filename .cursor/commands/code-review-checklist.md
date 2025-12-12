# Code Review Checklist

Checklist for code reviews in the LDLS monorepo (`ui-react` and `ui-rnative`).
Check the code diff from main

---

Output summary in a table that's easy to understand and read.
Show details of the errors if there are only fews, otherwise show the number of errors by category

## General

- [ ] Code works correctly and handles edge cases
- [ ] No obvious bugs, security issues, or hardcoded secrets
- [ ] Code is readable with descriptive names
- [ ] No code duplication

## TypeScript

- [ ] Top-level functions are typesafe (except JSX components)
- [ ] No `any` types
- [ ] Typecheck for affected nx libs/apps passes

## Lint

- [ ] Lint for affected nx libs/apps passes

## Components

- [ ] Components use **PascalCase** folders (`Button/`)
- [ ] Other files use **dash-case** (`use-controllable-state.ts`)
- [ ] Files organized: `Component.tsx`, `Component.test.tsx`, `Component.stories.tsx`, `Component.mdx`, `index.ts`
- [ ] Types are defined in a separate file `types.ts` of the component, with clear, consistent description and default if component props has a default
- [ ] `index.ts` expose the component, compound components and types
- [ ] Namings are explicit, makes sense and follow standards

## Design System React

- [ ] Uses design tokens from design-core tailwind preset for web
  - Typography: `body-1`, `heading-2` (not `font-bold`, `text-sm`)
  - Colors: `text-base`, `bg-accent` (not `text-gray-500`)
  - Sizes: token values only (no `w-[108px]`)
- [ ] Uses `cn()` for conditional classes
- [ ] Uses `cva` for variant composition

## Design System React-Native

- [ ] Uses design tokens from design-core theme js object preset for react-native
  - theme.colors.bg.accent
  - theme.spacings.s20
  - ...
- [ ] Uses `cn()` for conditional classes
- [ ] Uses `sva` for variant composition

## Storybook

- [ ] Default story named `Base` (not `Default` or `Primary`)
- [ ] Showcase stories use `{Property}Showcase` pattern if necessary 
- [ ] Stories have `layout: 'centered'` and `backgrounds: { default: 'light' }`

---

## Platform-Specific

| Check | React (`ui-react`) | React Native (`ui-rnative`) |
|-------|-------------------|----------------------------|
| Test ID | `data-testid` | `testID` |
| Test framework | Vitest | Jest |
| Test imports | `import { vi } from 'vitest'` | `import { jest } from '@jest/globals'` |
| Click handler | `onClick` | `onPress` |
| Mock function | `vi.fn()` | `jest.fn()` |

---

