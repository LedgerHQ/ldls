import { cn } from '@ledgerhq/lumen-utils-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Link } from '../Link/Link';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import {
  Subheader,
  SubheaderRow,
  SubheaderTitle,
  SubheaderCount,
  SubheaderInfo,
  SubheaderShowMore,
  SubheaderDescription,
  SubheaderAction,
} from './Subheader';

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('w-400 bg-canvas p-8 text-base', className)} {...props} />
);

const meta: Meta<typeof Subheader> = {
  component: Subheader,
  title: 'Communication/Subheader',
  subcomponents: {
    SubheaderRow,
    SubheaderTitle,
    SubheaderDescription,
    SubheaderCount,
    SubheaderInfo,
    SubheaderShowMore,
    SubheaderAction,
  },
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

export const Complete: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Full Featured Subheader</SubheaderTitle>
          <SubheaderCount value={42} />
          <Tooltip>
            <TooltipTrigger>
              <SubheaderInfo />
            </TooltipTrigger>
            <TooltipContent>This is additional information</TooltipContent>
          </Tooltip>
          <SubheaderAction onClick={() => console.log('Action clicked')}>
            <Link href='https://ledger.com' appearance='accent' size='sm'>
              Action
            </Link>
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
    <SubheaderCount value={42} />
    <Tooltip>
      <TooltipTrigger>
        <SubheaderInfo />
      </TooltipTrigger>
      <TooltipContent>This is additional information</TooltipContent>
    </Tooltip>
    <SubheaderAction onClick={handleAction}>
      <Link href="https://ledger.com" appearance="accent" size="sm">
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

export const Interactive: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderRow onClick={() => console.log('Row clicked')}>
          <SubheaderTitle>Clickable Row</SubheaderTitle>
          <SubheaderCount value={12} />
        </SubheaderRow>
        <SubheaderDescription>
          The entire row is clickable when onClick is provided
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow onClick={handleClick}>
    <SubheaderTitle>Clickable Row</SubheaderTitle>
    <SubheaderCount value={12} />
  </SubheaderRow>
  <SubheaderDescription>
    The entire row is clickable when onClick is provided
  </SubheaderDescription>
</Subheader>
        `,
      },
    },
  },
};

export const WithShowMore: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderRow onClick={() => console.log('Row clicked')}>
          <SubheaderTitle>Accounts</SubheaderTitle>
          <SubheaderCount value={5} />
          <SubheaderShowMore />
        </SubheaderRow>
        <SubheaderDescription>
          The chevron indicates this row leads to more content
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow onClick={handleRowClick}>
    <SubheaderTitle>Accounts</SubheaderTitle>
    <SubheaderCount value={5} />
    <SubheaderShowMore />
  </SubheaderRow>
  <SubheaderDescription>
    The chevron indicates this row leads to more content
  </SubheaderDescription>
</Subheader>
        `,
      },
    },
  },
};
