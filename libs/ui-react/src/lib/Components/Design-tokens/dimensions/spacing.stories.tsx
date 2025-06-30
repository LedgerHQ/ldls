import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Dimensions/Spacing',
  globals: {
    backgrounds: { value: 'var(--background-canvas-sheet)', grid: false },
  },
};

export default meta;
type Story = StoryObj;

const SpacingShowcase = () => (
  <div className="mb-32">
    <div className="grid grid-cols-1 items-start justify-items-start gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
      {[
        { name: '2px', class: 'p-2', token: 'p-2' },
        { name: '4px', class: 'p-4', token: 'p-4' },
        { name: '8px', class: 'p-8', token: 'p-8' },
        { name: '12px', class: 'p-12', token: 'p-12' },
        { name: '16px', class: 'p-16', token: 'p-16' },
        { name: '24px', class: 'p-24', token: 'p-24' },
        { name: '32px', class: 'p-32', token: 'p-32' },
        { name: '40px', class: 'p-40', token: 'p-40' },
        { name: '48px', class: 'p-48', token: 'p-48' },
        { name: '56px', class: 'p-56', token: 'p-56' },
        { name: '64px', class: 'p-64', token: 'p-64' },
        { name: '80px', class: 'p-80', token: 'p-80' },
        { name: '96px', class: 'p-96', token: 'p-96' },
        { name: '112px', class: 'p-112', token: 'p-112' },
        { name: '128px', class: 'p-128', token: 'p-128' },
        { name: '144px', class: 'p-144', token: 'p-144' },
        { name: '160px', class: 'p-160', token: 'p-160' },
        { name: '256px', class: 'p-256', token: 'p-256' },
      ].map(({ name, class: widthClass, token }) => (
        <div key={name} className="flex items-center gap-8">
          <div>
            <div className="w-48 text-base body-2">{name}</div>
            <div className="text-muted body-4">{token}</div>
          </div>
          <div
            className={`${widthClass} border rounded-md border-1 border-muted-subtle bg-[repeating-linear-gradient(45deg,var(--border-muted-subtle)_2px,var(--border-muted-subtle)_4px,transparent_4px,transparent_12px)]`}
          >
            <div className="h-56 w-56 rounded-sm bg-accent text-muted body-2"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Spacing: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Spacing Tokens"
        description="Consistent spacing scale for padding, margin, and layout"
      />
      <SpacingShowcase />
    </div>
  ),
};
