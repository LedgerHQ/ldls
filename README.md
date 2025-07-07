# LDLS Design System

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A cross-platform design system built with Nx, supporting both React and React Native applications.

## Library Structure

- `ui-core`: Shared utilities and types used across platforms.
- `ui-react`: React-specific components and patterns.
- `ui-rnative`: React Native-specific components and patterns.

## Installing Dependencies

```bash
npm install
```

## Development

### Running the Libraries

```bash
# Start React components in Storybook
npx nx run @ldls/ui-react:serve:storybook

# Build React components
npx nx run @ldls/ui-react:build

# Build React Native components
npx nx run @ldls/ui-rnative:build

# Build shared core library
npx nx run @ldls/ui-core:build
```

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
export const Primary: Story = {
  args: {
    // Component props
  },
};
```

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

### Running Tests

First, a storybook instance must be running:

```sh
npx nx storybook ui-react
```

Then, run the tests:

```sh
# Tests for the ui-react library
npx nx run @ldls/ui-react:test-storybook
```

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/Jmd5yDAnlu)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve ldls
```

To create a production bundle:

```sh
npx nx build ldls
```

To see all available targets to run for a project, run:

```sh
npx nx show project ldls
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.
