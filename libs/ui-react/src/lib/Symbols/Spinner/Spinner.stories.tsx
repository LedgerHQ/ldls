import { Meta } from '@storybook/react-vite';
import { Spinner, SpinnerProps } from './Spinner';

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
    <Spinner size={40} />
  </div>
);

export const Appearances = () => {
  const appearances: SpinnerProps['appearance'][] = ['base', 'accent'];
  return (
    <div className='flex items-center justify-center gap-32'>
      {appearances.map((appearance) => (
        <div className='flex flex-col items-center gap-4' key={appearance}>
          <Spinner size={40} appearance={appearance} />
          <span className='text-muted body-4'>{appearance}</span>
        </div>
      ))}
    </div>
  );
};

export const Sizes = () => {
  const sizes: SpinnerProps['size'][] = [12, 16, 20, 24, 40, 48, 56];
  return (
    <div className='flex items-center justify-center gap-32'>
      {sizes.map((size) => (
        <div className='flex flex-col items-center gap-4'>
          <Spinner size={size} />
          <span className='text-muted body-4'>{size}</span>
        </div>
      ))}
    </div>
  );
};
