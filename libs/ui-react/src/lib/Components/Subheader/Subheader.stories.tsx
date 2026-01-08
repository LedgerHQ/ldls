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

const InfoTooltip = (
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

export const WithoutRow: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderTitle>Simple Title</SubheaderTitle>
        <SubheaderDescription>
          You can use Subheader without Row for simpler layouts
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderTitle>Simple Title</SubheaderTitle>
  <SubheaderDescription>
    You can use Subheader without Row for simpler layouts
  </SubheaderDescription>
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
          <SubheaderCount value={30} />
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
    <SubheaderCount value={30} />
  </SubheaderRow>
</Subheader>
        `,
      },
    },
  },
};

export const WithCustomCountFormat: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Notifications</SubheaderTitle>
          <SubheaderCount
            value={150}
            format={(n) => (n > 99 ? '(99+)' : `(${n})`)}
          />
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
    <SubheaderTitle>Notifications</SubheaderTitle>
    <SubheaderCount 
      value={150} 
      format={(n) => n > 99 ? '(99+)' : \`(\${n})\`} 
    />
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
          <SubheaderHint content={InfoTooltip} />
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
    <SubheaderHint content={
      <Tooltip>
        <TooltipTrigger asChild>
          <Information
            size={16}
            className="text-muted shrink-0"
            aria-label="More information"
          />
        </TooltipTrigger>
        <TooltipContent>This is additional information</TooltipContent>
      </Tooltip>
    } />
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
          <SubheaderAction onPress={() => console.log('Action clicked')}>
            <Link
              href='https://ledger.com'
              appearance='accent'
              size='sm'
              isExternal
            >
              Manage
            </Link>
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
    <SubheaderAction onPress={handleManage}>
      <Link href="https://ledger.com" appearance="accent" size="sm" isExternal>
        Manage
      </Link>
    </SubheaderAction>
  </SubheaderRow>
</Subheader>
        `,
      },
    },
  },
};

export const WithInteractiveRow: Story = {
  render: () => (
    <Container>
      <Subheader>
        <SubheaderRow onPress={() => console.log('Row clicked')}>
          <SubheaderTitle>Clickable Row</SubheaderTitle>
          <SubheaderCount value={12} />
        </SubheaderRow>
        <SubheaderDescription>
          The entire row is clickable when onPress is provided
        </SubheaderDescription>
      </Subheader>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Subheader>
  <SubheaderRow onPress={handleClick}>
    <SubheaderTitle>Clickable Row</SubheaderTitle>
    <SubheaderCount value={12} />
  </SubheaderRow>
  <SubheaderDescription>
    The entire row is clickable when onPress is provided
  </SubheaderDescription>
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
          <SubheaderCount value={42} />
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => console.log('Action')}>
            <Link
              href='https://ledger.com'
              appearance='accent'
              size='sm'
              isExternal
            >
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
    <SubheaderHint content={
      <Tooltip>
        <TooltipTrigger asChild>
          <Information
            size={16}
            className="text-muted shrink-0"
            aria-label="More information"
          />
        </TooltipTrigger>
        <TooltipContent>This is additional information</TooltipContent>
      </Tooltip>
    } />
    <SubheaderAction onPress={handleAction}>
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
          <SubheaderCount value={15} />
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Hint</SubheaderTitle>
          <SubheaderHint content={InfoTooltip} />
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Action</SubheaderTitle>
          <SubheaderAction onPress={() => {}}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Complete</SubheaderTitle>
          <SubheaderCount value={99} />
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => {}}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
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
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => {}}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>
            Long Title That Should Truncate When Container Is Narrow
          </SubheaderTitle>
          <SubheaderCount value={123} />
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => {}}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
    </Container>
  ),
};
