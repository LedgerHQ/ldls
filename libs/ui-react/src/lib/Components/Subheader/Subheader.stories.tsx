import { cn } from '@ledgerhq/lumen-utils-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Information } from '../../Symbols';
import { Link } from '../Link/Link';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import { Subheader } from './Subheader';

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-400 bg-canvas p-8 text-base', className)} {...props} />
);

const InfoTooltip = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Information
        size={16}
        className='text-muted shrink-0'
        aria-label='More information'
      />
    </TooltipTrigger>
    <TooltipContent>This is additional information</TooltipContent>
  </Tooltip>
);

const ActionLink = () => (
  <Link href='https://ledger.com' appearance='accent' size='sm' isExternal>
    Action
  </Link>
);

const meta: Meta<typeof Subheader> = {
  component: Subheader,
  title: 'Communication/Subheader',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Subheader>;

export const Base: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Subheader Title</Subheader.Title>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Subheader Title</Subheader.Title>
  </Subheader.Row>
</Subheader>
        `,
      },
    },
  },
};

export const WithCount: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Accounts</Subheader.Title>
          <Subheader.Count>30</Subheader.Count>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Accounts</Subheader.Title>
    <Subheader.Count>30</Subheader.Count>
  </Subheader.Row>
</Subheader>
        `,
      },
    },
  },
};

export const WithHint: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Subheader with Hint</Subheader.Title>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Subheader with Hint</Subheader.Title>
    <Subheader.Hint>
      <Tooltip>
        <TooltipTrigger asChild>
          <Information
            size={16}
            className="shrink-0 text-muted"
            aria-label="More information"
          />
        </TooltipTrigger>
        <TooltipContent>This is additional information</TooltipContent>
      </Tooltip>
    </Subheader.Hint>
  </Subheader.Row>
</Subheader>
        `,
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Section Title</Subheader.Title>
        </Subheader.Row>
        <Subheader.Description>
          This is a detailed description that provides additional context about
          this section.
        </Subheader.Description>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Section Title</Subheader.Title>
  </Subheader.Row>
  <Subheader.Description>
    This is a detailed description that provides additional context about this section.
  </Subheader.Description>
</Subheader>
        `,
      },
    },
  },
};

export const WithActionInRow: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Subheader with Action</Subheader.Title>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Subheader with Action</Subheader.Title>
    <Subheader.Action>
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    </Subheader.Action>
  </Subheader.Row>
</Subheader>
        `,
      },
    },
  },
};

export const WithActionOutsideRow: Story = {
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Section Title</Subheader.Title>
        </Subheader.Row>
        <Subheader.Description>
          Description text that explains the section.
        </Subheader.Description>
        <Subheader.Action>
          <ActionLink />
        </Subheader.Action>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Section Title</Subheader.Title>
  </Subheader.Row>
  <Subheader.Description>
    Description text that explains the section.
  </Subheader.Description>
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
  render: () => (
    <Container>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Full Featured Subheader</Subheader.Title>
          <Subheader.Count>42</Subheader.Count>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
        <Subheader.Description>
          This subheader demonstrates all available features including title,
          count, hint, description, and action.
        </Subheader.Description>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <Subheader.Row>
    <Subheader.Title>Full Featured Subheader</Subheader.Title>
    <Subheader.Count>42</Subheader.Count>
    <Subheader.Hint>
      <Tooltip>
        <TooltipTrigger asChild>
          <Information
            size={16}
            className="shrink-0 text-muted"
            aria-label="More information"
          />
        </TooltipTrigger>
        <TooltipContent>This is additional information</TooltipContent>
      </Tooltip>
    </Subheader.Hint>
    <Subheader.Action>
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    </Subheader.Action>
  </Subheader.Row>
  <Subheader.Description>
    This subheader demonstrates all available features including title, count, hint, description, and action.
  </Subheader.Description>
</Subheader>
        `,
      },
    },
  },
};

export const ContentVariations: Story = {
  render: () => (
    <Container className='flex flex-col gap-16'>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title Only</Subheader.Title>
        </Subheader.Row>
      </Subheader>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>With Count</Subheader.Title>
          <Subheader.Count>15</Subheader.Count>
        </Subheader.Row>
      </Subheader>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>With Hint</Subheader.Title>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
        </Subheader.Row>
      </Subheader>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>With Action</Subheader.Title>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Complete</Subheader.Title>
          <Subheader.Count>99</Subheader.Count>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Container className='grid grid-cols-1 gap-16'>
      <div className='text-muted body-4-semi-bold'>
        Container with a fixed width
      </div>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title with Hint</Subheader.Title>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>
            Long Title That Should Truncate When Container Is Narrow
          </Subheader.Title>
          <Subheader.Count>123</Subheader.Count>
          <Subheader.Hint>
            <InfoTooltip />
          </Subheader.Hint>
          <Subheader.Action>
            <ActionLink />
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>
    </Container>
  ),
};
