import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Border/Radius',
};

export default meta;
type Story = StoryObj;

const BorderRadiusShowcase = () => (
  <div className="mb-32">
    <div className="grid grid-cols-2 gap-16 sm:grid-cols-4 lg:grid-cols-8">
      {[
        { name: 'none', class: 'rounded-none' },
        { name: 'xs', class: 'rounded-xs' },
        { name: 'sm', class: 'rounded-sm' },
        // { name: 'base', class: 'rounded' }, //to be added ?
        //  rounded default ?
        { name: 'md', class: 'rounded-md' },
        { name: 'lg', class: 'rounded-lg' },
        { name: 'xl', class: 'rounded-xl' },
        { name: '2xl', class: 'rounded-2xl' },
        { name: 'full', class: 'rounded-full' },
      ].map(({ name, class: className }) => (
        <div key={name} className="">
          <div className={`mb-8 h-80 w-80 bg-accent ${className}`}></div>
          <div></div>
          <div className="text-base body-2">{name}</div>
          <div className="text-muted body-4">{className}</div>
        </div>
      ))}
    </div>
  </div>
);

export const BorderRadius: Story = {
  name: 'Radius',
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Border Radius Tokens"
        description="Border radius values for consistent rounded corners"
      />
      <BorderRadiusShowcase />
    </div>
  ),
};
