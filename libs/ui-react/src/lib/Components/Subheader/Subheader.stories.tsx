import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Subheader } from './Subheader';
import { Link } from '../Link/Link';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import { Information } from '../../Symbols';
import { cn } from '@ldls/utils-shared';

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-[400px] bg-canvas p-8', className)} {...props} />
);

const InfoTooltip = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Information
        size={12}
        className="shrink-0 text-muted"
        aria-label="More information"
      />
    </TooltipTrigger>
    <TooltipContent>This is additional information</TooltipContent>
  </Tooltip>
);

const ActionLink = () => (
  <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
    Action
  </Link>
);

const meta: Meta<typeof Subheader> = {
  component: Subheader,
  title: 'Communication/Subheader/Overview',
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
    children: {
      control: 'select',
      description: 'Slot components: Subheader.Info and Subheader.Action',
      options: ['None', 'Info', 'Action', 'Info and Action'],
      mapping: {
        None: null,
        Info: (
          <Subheader.Info key="info">
            <InfoTooltip />
          </Subheader.Info>
        ),
        Action: (
          <Subheader.Action key="action">
            <ActionLink />
          </Subheader.Action>
        ),
        'Info and Action': [
          <Subheader.Info key="info">
            <InfoTooltip />
          </Subheader.Info>,
          <Subheader.Action key="action">
            <ActionLink />
          </Subheader.Action>,
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Subheader>;

export const Base: Story = {
  args: {
    title: 'Subheader Title',
    children: 'None',
  },
  render: (args) => {
    const { children, ...restArgs } = args;
    return (
      <Container>
        <Subheader {...restArgs}>
          {children === 'None' ? null : children}
        </Subheader>
      </Container>
    );
  },
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
    children: 'Info',
  },
  render: (args) => {
    const { children, ...restArgs } = args;
    return (
      <Container>
        <Subheader {...restArgs}>
          {children === 'None' ? null : children}
        </Subheader>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Subheader title="Subheader with Tooltip">
  <Subheader.Info>
    <Tooltip>
      <TooltipTrigger asChild>
        <Information
          size={12}
          className="shrink-0 text-muted"
          aria-label="More information"
        />
      </TooltipTrigger>
      <TooltipContent>This is additional information</TooltipContent>
    </Tooltip>
  </Subheader.Info>
</Subheader>
        `,
      },
    },
  },
};

export const WithAction: Story = {
  args: {
    title: 'Subheader with Action',
    children: 'Action',
  },
  render: (args) => {
    const { children, ...restArgs } = args;
    return (
      <Container>
        <Subheader {...restArgs}>
          {children === 'None' ? null : children}
        </Subheader>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Subheader title="Subheader with Action">
  <Subheader.Action>
    <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
      Action
    </Link>
  </Subheader.Action>
</Subheader>
        `,
      },
    },
  },
};

export const WithFullFeatures: Story = {
  args: {
    title: 'Full Featured Subheader',
    children: 'Info and Action',
  },
  render: (args) => {
    const { children, ...restArgs } = args;
    return (
      <Container>
        <Subheader {...restArgs}>
          {children === 'None' ? null : children}
        </Subheader>
      </Container>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Subheader title="Full Featured Subheader">
  <Subheader.Info>
    <Tooltip>
      <TooltipTrigger asChild>
        <Information
          size={12}
          className="shrink-0 text-muted"
          aria-label="More information"
        />
      </TooltipTrigger>
      <TooltipContent>This is additional information</TooltipContent>
    </Tooltip>
  </Subheader.Info>
  <Subheader.Action>
    <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
      Action
    </Link>
  </Subheader.Action>
</Subheader>
        `,
      },
    },
  },
};

export const ContentVariations: Story = {
  render: () => (
    <Container className="flex flex-col gap-16">
      <Subheader title="Title Only" />
      <Subheader title="With Tooltip">
        <Subheader.Info>
          <InfoTooltip />
        </Subheader.Info>
      </Subheader>
      <Subheader title="With Action">
        <Subheader.Action>
          <ActionLink />
        </Subheader.Action>
      </Subheader>
      <Subheader title="With Tooltip and Action">
        <Subheader.Info>
          <InfoTooltip />
        </Subheader.Info>
        <Subheader.Action>
          <ActionLink />
        </Subheader.Action>
      </Subheader>
    </Container>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Container className="grid grid-cols-1 gap-16">
      <div className="text-muted body-4-semi-bold">Container: 400px wide</div>
      <Subheader title="Title with Tooltip">
        <Subheader.Info>
          <InfoTooltip />
        </Subheader.Info>
        <Subheader.Action>
          <ActionLink />
        </Subheader.Action>
      </Subheader>
      <Subheader title="Long Title That Should Truncate When Container Is Narrow">
        <Subheader.Info>
          <InfoTooltip />
        </Subheader.Info>
        <Subheader.Action>
          <ActionLink />
        </Subheader.Action>
      </Subheader>
    </Container>
  ),
};
