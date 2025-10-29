import { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Communication/Spinner',
  component: Spinner,
  parameters: {
    actions: { disable: true },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [12, 16, 20, 24, 40, 48, 56],
    },
    appearance: {
      control: 'select',
      options: ['base', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {
    appearance: 'base',
    size: 40,
  },
  render: ({ size, appearance }) => (
    <div className='flex items-center justify-center'>
      <Spinner size={size} appearance={appearance} />
    </div>
  ),
};

export const AppearanceShowcase: Story = {
  args: {
    size: 40,
  },
  argTypes: {
    appearance: {
      control: false,
    },
  },
  render: ({ size }) => (
    <div className='flex items-center justify-center gap-32'>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={size} appearance='base' />
        <span className='text-muted body-4'>Base</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={size} appearance='accent' />
        <span className='text-muted body-4'>Accent</span>
      </div>
    </div>
  ),
};

export const SizeShowcase: Story = {
  args: {
    appearance: 'base',
  },
  argTypes: {
    size: {
      control: false,
    },
  },
  render: ({ appearance }) => (
    <div className='flex items-center justify-center gap-32'>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={12} appearance={appearance} />
        <span className='text-muted body-4'>12</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={16} appearance={appearance} />
        <span className='text-muted body-4'>16</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={20} appearance={appearance} />
        <span className='text-muted body-4'>20</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={24} appearance={appearance} />
        <span className='text-muted body-4'>24</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={40} appearance={appearance} />
        <span className='text-muted body-4'>40</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={48} appearance={appearance} />
        <span className='text-muted body-4'>48</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={56} appearance={appearance} />
        <span className='text-muted body-4'>56</span>
      </div>
    </div>
  ),
};
