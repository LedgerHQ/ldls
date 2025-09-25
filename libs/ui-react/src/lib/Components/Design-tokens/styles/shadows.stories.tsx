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
          <div className='flex h-192 w-192 items-center justify-center rounded-lg border border-muted-subtle text-center dark:bg-muted-strong'>
            <div className={`h-80 w-80 rounded-lg ${shadowClass}`}></div>
          </div>
          <div className='mt-8 text-base body-2'>{name}</div>
          <div className='mt-8 text-muted body-4'>{shadowClass}</div>
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
