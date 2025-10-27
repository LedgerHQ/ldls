import { Meta } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Symbols/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: [16, 20, 24],
    },
  },
};

export default meta;

export const Basic = () => (
  <div className='flex items-center justify-center'>
    <Spinner size={16} />
  </div>
);
