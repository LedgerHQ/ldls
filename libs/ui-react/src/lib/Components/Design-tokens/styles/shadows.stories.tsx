import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Styles/Shadows',
};

export default meta;
type Story = StoryObj;

const DropShadowShowcase = () => (
  <div className='mb-32'>
    <div className='grid grid-cols-1 gap-16 gap-y-40 sm:grid-cols-2 lg:grid-cols-3'>
      {[
        { name: '4px', class: 'drop-shadow-sm' },
        { name: '8px', class: 'drop-shadow-md' },
        { name: '16px', class: 'drop-shadow-lg' },
        { name: '24px', class: 'drop-shadow-xl' },
        { name: '32px', class: 'drop-shadow-2xl' },
      ].map(({ name, class: shadowClass }) => (
        <div key={name}>
          <div className='size-192 border-muted-subtle dark:bg-muted-strong flex items-center justify-center rounded-lg border text-center'>
            <div className={`size-80 rounded-lg ${shadowClass}`}></div>
          </div>
          <div className='body-2 mt-8 text-base'>{name}</div>
          <div className='text-muted body-4 mt-8'>{shadowClass}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Shadows: Story = {
  render: () => (
    <div className='p-24'>
      <SectionHeader
        title='Drop Shadow'
        description='Tailwind classes for controlling the drop shadow of an element.'
      />
      <DropShadowShowcase />
    </div>
  ),
};
