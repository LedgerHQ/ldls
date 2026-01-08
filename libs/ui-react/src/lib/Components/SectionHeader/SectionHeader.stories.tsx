import type { Meta, StoryObj } from '@storybook/react-vite';
import { Information } from '../../Symbols';
import { Button } from '../Button';
import { Link } from '../Link';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';
import {
  SectionHeader,
  SectionHeaderAction,
  SectionHeaderCount,
  SectionHeaderDescription,
  SectionHeaderHint,
  SectionHeaderRow,
  SectionHeaderTitle,
} from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
  title: 'Communication/SectionHeader',
  subcomponents: {
    SectionHeaderRow,
    SectionHeaderTitle,
    SectionHeaderCount,
    SectionHeaderHint,
    SectionHeaderDescription,
    SectionHeaderAction,
  } as Record<string, React.ComponentType<unknown>>,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
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
type Story = StoryObj<typeof SectionHeader>;

export const Base: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Section Title</SectionHeaderTitle>
        </SectionHeaderRow>
      </SectionHeader>
    </div>
  ),
};

export const WithCount: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Recent Transactions</SectionHeaderTitle>
          <SectionHeaderCount>(30)</SectionHeaderCount>
        </SectionHeaderRow>
      </SectionHeader>
    </div>
  ),
};

export const WithHint: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Section Title</SectionHeaderTitle>
          <SectionHeaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type='button'
                  className='text-muted flex items-center'
                  aria-label='More information'
                >
                  <Information size={12} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                This is additional information about the section
              </TooltipContent>
            </Tooltip>
          </SectionHeaderHint>
        </SectionHeaderRow>
      </SectionHeader>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Recent Transactions</SectionHeaderTitle>
          <SectionHeaderAction>
            <Link href='#' appearance='accent' size='sm'>
              View All
            </Link>
          </SectionHeaderAction>
        </SectionHeaderRow>
      </SectionHeader>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Section Title</SectionHeaderTitle>
        </SectionHeaderRow>
        <SectionHeaderDescription>
          This is a description that provides more context about the section.
        </SectionHeaderDescription>
      </SectionHeader>
    </div>
  ),
};

export const WithAllFeatures: Story = {
  render: () => (
    <div className='w-400'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Recent Transactions</SectionHeaderTitle>
          <SectionHeaderCount>(30)</SectionHeaderCount>
          <SectionHeaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type='button'
                  className='text-muted flex items-center'
                  aria-label='More information'
                >
                  <Information size={12} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                This shows all your recent transactions from the last 30 days
              </TooltipContent>
            </Tooltip>
          </SectionHeaderHint>
          <SectionHeaderAction>
            <Link href='#' appearance='accent' size='sm'>
              View All
            </Link>
          </SectionHeaderAction>
        </SectionHeaderRow>
        <SectionHeaderDescription>
          Your most recent activity and transaction history.
        </SectionHeaderDescription>
      </SectionHeader>
    </div>
  ),
};

export const VariantsShowcase: Story = {
  render: () => (
    <div className='w-400 flex flex-col gap-24'>
      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Title Only</SectionHeaderTitle>
        </SectionHeaderRow>
      </SectionHeader>

      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>With Count</SectionHeaderTitle>
          <SectionHeaderCount>(15)</SectionHeaderCount>
        </SectionHeaderRow>
      </SectionHeader>

      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>With Hint</SectionHeaderTitle>
          <SectionHeaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type='button'
                  className='text-muted flex items-center'
                  aria-label='More information'
                >
                  <Information size={12} />
                </button>
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          </SectionHeaderHint>
        </SectionHeaderRow>
      </SectionHeader>

      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>With Action</SectionHeaderTitle>
          <SectionHeaderAction>
            <Link href='#' appearance='accent' size='sm'>
              View All
            </Link>
          </SectionHeaderAction>
        </SectionHeaderRow>
      </SectionHeader>

      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>With Description</SectionHeaderTitle>
        </SectionHeaderRow>
        <SectionHeaderDescription>
          Additional context about this section.
        </SectionHeaderDescription>
      </SectionHeader>

      <SectionHeader>
        <SectionHeaderRow>
          <SectionHeaderTitle>Complete</SectionHeaderTitle>
          <SectionHeaderCount>(42)</SectionHeaderCount>
          <SectionHeaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type='button'
                  className='text-muted flex items-center'
                  aria-label='More information'
                >
                  <Information size={12} />
                </button>
              </TooltipTrigger>
              <TooltipContent>All features combined</TooltipContent>
            </Tooltip>
          </SectionHeaderHint>
          <SectionHeaderAction>
            <Button appearance='link-accent' size='sm'>
              Action
            </Button>
          </SectionHeaderAction>
        </SectionHeaderRow>
        <SectionHeaderDescription>
          This example shows all possible SectionHeader features.
        </SectionHeaderDescription>
      </SectionHeader>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='flex flex-col gap-24'>
      <div className='border-muted-subtle border p-16'>
        <div className='text-muted body-4-semi-bold mb-12'>
          Container: 300px wide
        </div>
        <div className='w-300'>
          <SectionHeader>
            <SectionHeaderRow>
              <SectionHeaderTitle>
                Very Long Section Title That Will Truncate
              </SectionHeaderTitle>
              <SectionHeaderCount>(999)</SectionHeaderCount>
              <SectionHeaderAction>
                <Link href='#' appearance='accent' size='sm'>
                  View
                </Link>
              </SectionHeaderAction>
            </SectionHeaderRow>
            <SectionHeaderDescription>
              This is a long description that demonstrates how the component
              handles text overflow in constrained layouts.
            </SectionHeaderDescription>
          </SectionHeader>
        </div>
      </div>

      <div className='border-muted-subtle border p-16'>
        <div className='text-muted body-4-semi-bold mb-12'>
          Container: 600px wide
        </div>
        <div className='w-600'>
          <SectionHeader>
            <SectionHeaderRow>
              <SectionHeaderTitle>
                Section Title With More Space
              </SectionHeaderTitle>
              <SectionHeaderCount>(999)</SectionHeaderCount>
              <SectionHeaderHint>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type='button'
                      className='text-muted flex items-center'
                      aria-label='More information'
                    >
                      <Information size={12} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>More information</TooltipContent>
                </Tooltip>
              </SectionHeaderHint>
              <SectionHeaderAction>
                <Link href='#' appearance='accent' size='sm'>
                  View All
                </Link>
              </SectionHeaderAction>
            </SectionHeaderRow>
            <SectionHeaderDescription>
              With more horizontal space, the title can expand and all elements
              remain visible.
            </SectionHeaderDescription>
          </SectionHeader>
        </div>
      </div>
    </div>
  ),
};
