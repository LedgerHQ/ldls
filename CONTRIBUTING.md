# Contributing to LDLS Design System

<h3 align="center">Development and Contribution Guidelines</h3>

## Table of Contents

- [Architecture](#architecture)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Documentation Guidelines](#documentation-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Contribution Process](#contribution-process)

## Architecture

The LDLS Design System is structured as a monorepo using Nx, with the following key libraries:

```sh
ldls
  ├──libs/
  │    ├── ui-core/        # Shared utilities and types
  │    │                   # name: @ledgerhq/ldls-ui-core
  │    │
  │    ├── ui-react/       # React components
  │    │                   # name: @ledgerhq/ldls-ui-react
  │    │
  │    ├── ui-rnative/     # React Native components
  │    │                   # name: @ledgerhq/ldls-ui-rnative
  │    │
  │    ├── design-core/    # Design tokens and themes
  │    │                   # name: @ledgerhq/ldls-design-core
  │    │
  │    └── utils-shared/   # Shared utilities
  │                        # name: @ledgerhq/ldls-utils-shared
  │
  └──apps/
       ├── app-sandbox-rnative   # Demo React-Native application
       └── app-sandbox-react     # Demo React application
```

- NXJS libraries are prefixed by `@ledgerhq/ldls-*` - defined in the project.json
- NPM package will match the name of the NXJS library, to make a library publishable a private:false needs to be set

### Technology Stack

- **Monorepo Management**: [Nx](https://nx.dev/)
- **Documentation & Testing**: [Storybook](https://storybook.js.org/) & [Chromatic](https://www.chromatic.com/)
- **Building & Bundling**: [Rollup](https://rollupjs.org/) & [Vite](https://vitejs.dev/)

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/your-org/ldls.git
cd ldls
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Start development environment:

```bash
# Start React Storybook
npx nx run @ledgerhq/ldls-ui-react:serve:storybook

# Build all libraries
npx nx run-many --target=build --all
```

## Development Workflow

### Running the Libraries

```bash
# Start React components in Storybook
npx nx run @ledgerhq/ldls-ui-react:serve:storybook

# Build React components
npx nx run @ledgerhq/ldls-ui-react:build

# Build React Native components
npx nx run @ledgerhq/ldls-ui-rnative:build

# Build shared core library
npx nx run @ledgerhq/ldls-ui-core:build
```

### Branch Strategy

1. Create a new branch from main
2. Make your changes
3. Add tests and stories
4. Submit a pull request

## Documentation Guidelines

### Writing Component Documentation

Components are documented using Storybook stories. Create a `.stories.tsx` file next to your component:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  title: 'Components/YourComponent',
  tags: ['autodocs'], // Enables automatic documentation
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

// Basic usage example
export const Base: Story = {
  args: {
    // Component props
  },
};
```

### Story Naming Conventions

To maintain consistency across our Storybook documentation, follow these naming rules:

#### 1. Base Story

- **Name**: `Base`
- **Purpose**: The default, most basic usage of the component
- **Example**: `export const Base: Story = { ... }`

#### 2. Showcase Stories

Showcase stories demonstrate variations of a single property. Use the pattern: `{Property}Showcase`

- **Appearance variations**: `AppearanceShowcase`
- **Size variations**: `SizeShowcase` (singular, not "Sizes")
- **State variations**: `StateShowcase` (singular, not "States" or "AllStates")
- **Content type variations**: `ContentTypeShowcase`

**Examples**:

```typescript
export const AppearanceShowcase: Story = { ... }
export const SizeShowcase: Story = { ... }
export const StateShowcase: Story = { ... }
```

#### 3. Feature-Specific Stories

Stories highlighting specific features should use the pattern: `With{Feature}`

- `WithIcon`
- `WithDescription`
- `WithActions`
- `WithTooltip`

**Example**:

```typescript
export const WithDescription: Story = {
  args: {
    title: 'Title',
    description: 'Description text',
  },
};
```

#### 4. Interactive Examples

Stories with user interaction should start with `Interactive`:

- `InteractiveStates`
- `InteractiveActions`
- `InteractiveDismiss`

**Example**:

```typescript
export const InteractiveStates: Story = {
  render: () => {
    const [state, setState] = useState(false);
    // ... interactive logic
  },
};
```

#### 5. Layout Examples

Stories demonstrating responsive behavior or layout should start with `Responsive`:

- `ResponsiveLayout`
- `ResponsiveWidth`

**Example**:

```typescript
export const ResponsiveLayout: Story = {
  render: () => (
    <div className='w-320'>
      {/* Component in constrained container */}
    </div>
  ),
};
```

#### 6. Special Cases

- **Galleries/Catalogs**: Use `Gallery` (e.g., icon galleries)
- **Loading states**: Use `Loading` or `LoadingState`
- **Polymorphic components**: Use `AsChild` for `asChild` prop examples

#### 7. Avoid These Patterns

- ❌ `Default` (use `Base` instead)
- ❌ `Primary` (use `Base` instead)
- ❌ `Basic` (use `Base` instead)
- ❌ `Sizes` without "Showcase" suffix (use `SizeShowcase`)
- ❌ `States` (use `StateShowcase`)
- ❌ `AllStates` (use `StateShowcase`)
- ❌ Inconsistent pluralization (always singular: `SizeShowcase`, not `SizesShowcase`)

### Documentation Best Practices

1. Include a clear component description
2. Document all props and their types
3. Provide usage examples
4. Include accessibility considerations
5. Document any known limitations or edge cases
6. Follow the story naming conventions above for consistency

## Testing Guidelines

### Writing Interaction Tests

Add interaction tests in your stories using the `play` function:

```typescript
export const WithInteraction: Story = {
  args: {
    // Component props
  },
  play: async ({ canvasElement, step }) => {
    // Test steps are automatically documented
    await step('Click the button', async () => {
      const button = canvasElement.querySelector('button');
      button?.click();
    });
  },
};
```

### Testing Requirements

1. Unit tests for all components
2. Interaction tests for complex components
3. Visual regression tests via **Chromatic**
4. Accessibility tests
5. Cross-browser testing

## Contribution Process

### Before Contributing

1. Check existing issues and pull requests
2. Discuss major changes in an issue first
3. Review our coding standards
4. Set up your development environment

### Making Changes

1. Write clean, maintainable code
2. Follow the existing code style
3. Add or update tests as needed
4. Update documentation
5. Test your changes thoroughly

### Submitting Changes

1. Create a pull request
2. Fill out the pull request template
3. Reference any related issues
4. Wait for code review
5. Address feedback

### Code Review Process

1. All changes must be reviewed
2. Changes must pass automated tests
3. Documentation must be updated
4. Breaking changes must be clearly marked

## Getting Help

- Join our Discord community
- Check the FAQ in the wiki
- Open an issue for bugs
- Discuss features in discussions

---

Thank you for contributing to LDLS! 🎉
