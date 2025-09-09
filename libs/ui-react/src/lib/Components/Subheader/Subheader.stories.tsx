import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Subheader } from './Subheader';
import { Link } from '../Link/Link';
import { cn } from '@ldls/utils-shared';

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-[400px] bg-canvas p-8', className)} {...props} />
);

const meta: Meta<typeof Subheader> = {
  component: Subheader,
  title: 'Misc/Subheader/Overview',
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
    title: {
      control: 'text',
      description: 'The title of the subheader',
    },
    infoTooltip: {
      control: 'text',
      description: 'Content for the info tooltip',
    },
    action: {
      control: 'select',
      description: 'Optional action component to display',
      options: ['AccentLink', 'UnderlinedLink', 'None'],
      mapping: {
        None: undefined,
        AccentLink: (
          <Link
            href="https://ledger.com"
            appearance="accent"
            size="sm"
            isExternal
          >
            Action
          </Link>
        ),
        UnderlinedLink: (
          <Link
            href="https://ledger.com"
            appearance="underlined"
            size="sm"
            isExternal
          >
            Action
          </Link>
        ),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Subheader>;

export const Base: Story = {
  args: {
    title: 'Subheader Title',
  },
  render: (args) => (
    <Container>
      <Subheader {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader title="Subheader Title" />
        `,
      },
    },
  },
};

export const WithInfoTooltip: Story = {
  args: {
    title: 'Subheader with Tooltip',
    infoTooltip: 'This is additional information',
  },
  render: (args) => (
    <Container>
      <Subheader {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader 
  title="Subheader with Tooltip" 
  infoTooltip="This is additional information" 
/>
        `,
      },
    },
  },
};

export const WithAction: Story = {
  args: {
    title: 'Subheader with Action',
    action: (
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    ),
  },
  render: (args) => (
    <Container>
      <Subheader {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader 
  title="Subheader with Action" 
  action={<Link href="https://ledger.com" appearance="accent" size="sm" isExternal>Action</Link>} 
/>
        `,
      },
    },
  },
};

export const WithFullFeatures: Story = {
  args: {
    title: 'Full Featured Subheader',
    infoTooltip: 'Tooltip information',
    action: (
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    ),
  },
  render: (args) => (
    <Container>
      <Subheader {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader 
  title="Full Featured Subheader" 
  infoTooltip="Tooltip information"
  action={<Link href="https://ledger.com" appearance="accent" size="sm" isExternal>Action</Link>} 
/>
        `,
      },
    },
  },
};

export const ContentVariations: Story = {
  render: () => (
    <Container className="flex flex-col gap-16">
      <Subheader title="Title Only" />
      <Subheader title="With Tooltip" infoTooltip="Additional info" />
      <Subheader
        title="With Action"
        action={
          <Link
            href="https://ledger.com"
            appearance="accent"
            size="sm"
            isExternal
          >
            Action
          </Link>
        }
      />
      <Subheader
        title="With Tooltip and Action"
        infoTooltip="Additional info"
        action={
          <Link
            href="https://ledger.com"
            appearance="accent"
            size="sm"
            isExternal
          >
            Action
          </Link>
        }
      />
    </Container>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Container className="grid grid-cols-1 gap-16">
      <div className="text-muted body-4-semi-bold">Container: 400px wide</div>
      <Subheader
        title="Title with Tooltip"
        infoTooltip="Info"
        action={
          <Link
            href="https://ledger.com"
            appearance="accent"
            size="sm"
            isExternal
          >
            Action
          </Link>
        }
      />
      <Subheader
        title="Long Title That Should Truncate When Container Is Narrow"
        infoTooltip="This tooltip should appear on hover"
        action={
          <Link
            href="https://ledger.com"
            appearance="accent"
            size="sm"
            isExternal
          >
            Long Action Text
          </Link>
        }
      />
    </Container>
  ),
};
