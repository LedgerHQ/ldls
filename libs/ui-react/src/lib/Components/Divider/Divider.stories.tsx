import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Layout/Divider',
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
type Story = StoryObj<typeof Divider>;

export const Base: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className='flex w-full flex-col gap-16'>
      <div className='text-base body-2'>Content above</div>
      <Divider {...args} />
      <div className='text-base body-2'>Content below</div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Divider />
`,
      },
    },
  },
};

export const OrientationShowcase: Story = {
  render: () => (
    <div className='flex flex-col gap-32'>
      <div className='flex flex-col gap-8'>
        <span className='text-muted body-3'>Horizontal (default)</span>
        <div className='flex w-full flex-col gap-16'>
          <div className='text-base body-2'>Content above</div>
          <Divider orientation='horizontal' />
          <div className='text-base body-2'>Content below</div>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <span className='text-muted body-3'>Vertical</span>
        <div className='flex items-center gap-16'>
          <div className='text-base body-2'>Left content</div>
          <Divider orientation='vertical' className='h-48' />
          <div className='text-base body-2'>Right content</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Horizontal divider
<Divider orientation="horizontal" />

// Vertical divider
<Divider orientation="vertical" className="h-48" />
`,
      },
    },
  },
};

export const InList: Story = {
  render: () => (
    <div className='flex w-full max-w-400 flex-col rounded-lg border border-muted bg-canvas'>
      <div className='flex items-center justify-between p-16'>
        <span className='text-base body-2'>Item 1</span>
        <span className='text-muted body-3'>$100</span>
      </div>
      <Divider />
      <div className='flex items-center justify-between p-16'>
        <span className='text-base body-2'>Item 2</span>
        <span className='text-muted body-3'>$200</span>
      </div>
      <Divider />
      <div className='flex items-center justify-between p-16'>
        <span className='text-base body-2'>Item 3</span>
        <span className='text-muted body-3'>$300</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div className="flex flex-col rounded-lg border border-muted">
  <div className="p-16">Item 1</div>
  <Divider />
  <div className="p-16">Item 2</div>
  <Divider />
  <div className="p-16">Item 3</div>
</div>
`,
      },
    },
  },
};
