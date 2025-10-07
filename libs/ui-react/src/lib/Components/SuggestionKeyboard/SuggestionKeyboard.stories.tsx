import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SuggestionKeyboard,
  SuggestionKeyboardItem,
} from './SuggestionKeyboard';
import { cn } from '@ledgerhq/ldls-utils-shared';

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-[400px] bg-canvas', className)} {...props} />
);

const meta: Meta<typeof SuggestionKeyboard> = {
  component: SuggestionKeyboard,
  title: 'Action/SuggestionKeyboard',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'SuggestionKeyboardItem components as children',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuggestionKeyboard>;

export const Base: Story = {
  render: (args) => (
    <Container>
      <SuggestionKeyboard {...args}>
        <SuggestionKeyboardItem>25%</SuggestionKeyboardItem>
        <SuggestionKeyboardItem>50%</SuggestionKeyboardItem>
        <SuggestionKeyboardItem>75%</SuggestionKeyboardItem>
        <SuggestionKeyboardItem>Max</SuggestionKeyboardItem>
      </SuggestionKeyboard>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SuggestionKeyboard>
  <SuggestionKeyboardItem>25%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>50%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>75%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>Max</SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const WithDisabledSuggestions: Story = {
  render: (args) => (
    <Container>
      <SuggestionKeyboard {...args}>
        <SuggestionKeyboardItem>50$</SuggestionKeyboardItem>
        <SuggestionKeyboardItem>100$</SuggestionKeyboardItem>
        <SuggestionKeyboardItem disabled>250$</SuggestionKeyboardItem>
        <SuggestionKeyboardItem disabled>500$</SuggestionKeyboardItem>
      </SuggestionKeyboard>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SuggestionKeyboard>
  <SuggestionKeyboardItem>50$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>100$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem disabled>250$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem disabled>500$</SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const ContentShowcase: Story = {
  render: () => (
    <div className='flex flex-col gap-24 p-16'>
      <div>
        <h3 className='mb-8'>2 Suggestions Layout</h3>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </div>

      <div>
        <h3 className='mb-8'>3 Suggestions Layout</h3>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </div>

      <div>
        <h3 className='mb-8'>4 Suggestions Layout</h3>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem>25%</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>50%</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>75%</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>Max</SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Showcase different numbers of SuggestionKeyboardItem children

// 2 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
</SuggestionKeyboard>

// 3 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
</SuggestionKeyboard>

// 4 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem>25%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>50%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>75%</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>Max</SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const LayoutShowcase: Story = {
  render: () => (
    <div className='flex flex-col gap-24 p-16'>
      <div>
        <h3 className='mb-8'>Space Between (default)</h3>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </div>

      <div>
        <h3 className='mb-8'>Centered</h3>
        <Container>
          <SuggestionKeyboard className='justify-center gap-24'>
            <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
            <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Showcase different layouts of the SuggestionKeyboard

// Space Between (default)
<SuggestionKeyboard>
  <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
</SuggestionKeyboard>

// Centered
<SuggestionKeyboard className="justify-center gap-24">
  <SuggestionKeyboardItem>250$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>500$</SuggestionKeyboardItem>
  <SuggestionKeyboardItem>1000$</SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};
