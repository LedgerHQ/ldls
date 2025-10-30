import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../../shared';

const meta: Meta = {
  title: 'Foundations/Size',
};

export default meta;
type Story = StoryObj;

const SizeShowcase = () => (
  <div className='space-y-24'>
    <div className='space-y-16'>
      <div className='bg-muted flex items-end gap-24 rounded-lg p-24'>
        {[
          { value: '16', token: 'size-16' },
          { value: '24', token: 'size-24' },
          { value: '32', token: 'size-32' },
          { value: '40', token: 'size-40' },
          { value: '48', token: 'size-48' },
          { value: '64', token: 'size-64' },
          { value: '96', token: 'size-96' },
          { value: '128', token: 'size-128' },
          { value: '160', token: 'size-160' },
        ].map(({ value, token }) => (
          <div
            key={value}
            className='flex flex-col items-center gap-8 whitespace-nowrap'
          >
            <div
              className={`${token} rounded-xs bg-accent flex items-center justify-center text-white`}
            ></div>
            <div className=' space-y-1 text-center'>
              <div className='text-muted body-3 text-left'>{token}</div>
              <div className='text-muted body-4 text-left'>{value}px</div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-muted body-2 mt-32 text-center'>
        The complete scale includes 33 tokens from{' '}
        <code className='text-warning'>size-1</code> to{' '}
        <code className='text-warning'>size-560</code>.
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div className='p-24'>
      <SectionHeader
        title='Size'
        description='Tailwind classes for controlling the size of an element. Includes width and height.'
      />
      <SizeShowcase />
    </div>
  ),
};
