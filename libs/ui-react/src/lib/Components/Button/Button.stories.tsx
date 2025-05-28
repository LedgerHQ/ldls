import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import {
  Title,
  Subtitle,
  Primary as PrimaryDocBlock,
  Controls,
  Stories,
} from '@storybook/blocks';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            The main button component for user interactions.
          </Subtitle>
          <div>
            <p>This is the <strong>custom description</strong> of the button, written directly in <code>Button.stories.tsx</code>.</p>
            <p>It supports <em>Markdown simulated here via HTML</em> for formatting, like <a href="https://storybook.js.org">links</a> or lists:</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
          <PrimaryDocBlock />
          <Controls />
          <Stories title='Autres Exemples' />
        </>
      ),
    },
  },
};

// Story Definition
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

// Interaction Testing
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    onClick: () => alert('Button clicked'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
 
    await step('Click on Btton', async () => {
      await userEvent.click(button);
    });
  },
};
