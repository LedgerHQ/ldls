import { cn } from '@ledgerhq/lumen-utils-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Information } from '../../Symbols';
import { Link } from '../Link/Link';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import {
  Subheader,
  SubheaderRow,
  SubheaderTitle,
  SubheaderCount,
  SubheaderHint,
  SubheaderDescription,
  SubheaderAction,
} from './Subheader';

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
        <SubheaderRow>
          <SubheaderTitle>Subheader Title</SubheaderTitle>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Subheader Title</SubheaderTitle>
  </SubheaderRow>
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
        <SubheaderRow>
          <SubheaderTitle>Accounts</SubheaderTitle>
          <SubheaderCount>30</SubheaderCount>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Accounts</SubheaderTitle>
    <SubheaderCount>30</SubheaderCount>
  </SubheaderRow>
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
        <SubheaderRow>
          <SubheaderTitle>Subheader with Hint</SubheaderTitle>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Subheader with Hint</SubheaderTitle>
    <SubheaderHint>
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
    </SubheaderHint>
  </SubheaderRow>
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
        <SubheaderRow>
          <SubheaderTitle>Section Title</SubheaderTitle>
        </SubheaderRow>
        <SubheaderDescription>
          This is a detailed description that provides additional context about
          this section.
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Section Title</SubheaderTitle>
  </SubheaderRow>
  <SubheaderDescription>
    This is a detailed description that provides additional context about this section.
  </SubheaderDescription>
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
        <SubheaderRow>
          <SubheaderTitle>Subheader with Action</SubheaderTitle>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Subheader with Action</SubheaderTitle>
    <SubheaderAction>
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    </SubheaderAction>
  </SubheaderRow>
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
        <SubheaderRow>
          <SubheaderTitle>Section Title</SubheaderTitle>
        </SubheaderRow>
        <SubheaderDescription>
          Description text that explains the section.
        </SubheaderDescription>
        <SubheaderAction>
          <ActionLink />
        </SubheaderAction>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Section Title</SubheaderTitle>
  </SubheaderRow>
  <SubheaderDescription>
    Description text that explains the section.
  </SubheaderDescription>
  <SubheaderAction>
    <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
      Action
    </Link>
  </SubheaderAction>
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
        <SubheaderRow>
          <SubheaderTitle>Full Featured Subheader</SubheaderTitle>
          <SubheaderCount>42</SubheaderCount>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
        <SubheaderDescription>
          This subheader demonstrates all available features including title,
          count, hint, description, and action.
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow>
    <SubheaderTitle>Full Featured Subheader</SubheaderTitle>
    <SubheaderCount>42</SubheaderCount>
    <SubheaderHint>
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
    </SubheaderHint>
    <SubheaderAction>
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Action
      </Link>
    </SubheaderAction>
  </SubheaderRow>
  <SubheaderDescription>
    This subheader demonstrates all available features including title, count, hint, description, and action.
  </SubheaderDescription>
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
        <SubheaderRow>
          <SubheaderTitle>Title Only</SubheaderTitle>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Count</SubheaderTitle>
          <SubheaderCount>15</SubheaderCount>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Hint</SubheaderTitle>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Action</SubheaderTitle>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Complete</SubheaderTitle>
          <SubheaderCount>99</SubheaderCount>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
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
        <SubheaderRow>
          <SubheaderTitle>Title with Hint</SubheaderTitle>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>
            Long Title That Should Truncate When Container Is Narrow
          </SubheaderTitle>
          <SubheaderCount>123</SubheaderCount>
          <SubheaderHint>
            <InfoTooltip />
          </SubheaderHint>
          <SubheaderAction>
            <ActionLink />
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
};
