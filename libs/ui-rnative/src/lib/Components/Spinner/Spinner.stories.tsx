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
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {
    size: 40,
  },
  render: ({ size }) => (
    <div className='flex items-center justify-center'>
      <Spinner size={size} />
    </div>
  ),
};

export const SizeShowcase: Story = {
  argTypes: {
    size: {
      control: false,
    },
  },
  render: () => (
    <div className='flex items-center justify-center gap-32'>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={12} />
        <span className='text-muted body-4'>12</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={16} />
        <span className='text-muted body-4'>16</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={20} />
        <span className='text-muted body-4'>20</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={24} />
        <span className='text-muted body-4'>24</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={40} />
        <span className='text-muted body-4'>40</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={48} />
        <span className='text-muted body-4'>48</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Spinner size={56} />
        <span className='text-muted body-4'>56</span>
      </div>
    </div>
  ),
};
