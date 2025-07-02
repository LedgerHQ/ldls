import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Border/Width',
};

export default meta;
type Story = StoryObj;

const BorderWidthShowcase = () => (
  <div className="mb-32">
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[
        { name: '1px', class: 'border-1', token: 'border-1' },
        { name: '2px', class: 'border-2', token: 'border-2' },
      ].map(({ name, class: borderWidthClass, token }) => (
        <div key={name} className="flex items-center gap-16">
          <div>
            <div className="w-48 text-base body-2">{name}</div>
            <div className="text-muted body-4">{token}</div>
          </div>
          <div
            className={`${borderWidthClass} border h-80 w-80 rounded-sm border-active`}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

export const BorderWidth: Story = {
  name: 'Width',
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Border Width Tokens"
        description="Border width values for consistent border widths"
      />
      <BorderWidthShowcase />
    </div>
  ),
};
