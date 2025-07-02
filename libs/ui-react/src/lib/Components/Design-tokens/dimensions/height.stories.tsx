import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Dimensions/Height',
};

export default meta;
type Story = StoryObj;

const HeightShowcase = () => (
  <div className="mb-32">
    <div className="flex flex-row gap-16">
      {[
        { name: '144px', class: 'h-144', token: 'h-144' },
        { name: '128px', class: 'h-128', token: 'h-128' },
        { name: '112px', class: 'h-112', token: 'h-112' },
        { name: '96px', class: 'h-96', token: 'h-96' },
        { name: '80px', class: 'h-80', token: 'h-80' },
        { name: '64px', class: 'h-64', token: 'h-64' },
        { name: '48px', class: 'h-48', token: 'h-48' },
        { name: '40px', class: 'h-40', token: 'h-40' },
        { name: '32px', class: 'h-32', token: 'h-32' },
        { name: '24px', class: 'h-24', token: 'h-24' },
        { name: '20px', class: 'h-20', token: 'h-20' },
        { name: '16px', class: 'h-16', token: 'h-16' },
        { name: '12px', class: 'h-12', token: 'h-12' },
        { name: '8px', class: 'h-8', token: 'h-8' },
        { name: '6px', class: 'h-6', token: 'h-6' },
        { name: '4px', class: 'h-4', token: 'h-4' },
        { name: '2px', class: 'h-2', token: 'h-2' },
        { name: '1px', class: 'h-1', token: 'h-1' },
      ].map(({ name, class: heightClass, token }) => (
        <div key={name}>
          <div
            className={`${heightClass} mb-12 w-24 rounded-xs bg-accent`}
          ></div>
          <div className="w-48 text-base body-2">{name}</div>
          <div className="text-muted body-4">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Height: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Height Tokens"
        description="Height values for consistent height"
      />
      <HeightShowcase />
    </div>
  ),
};
