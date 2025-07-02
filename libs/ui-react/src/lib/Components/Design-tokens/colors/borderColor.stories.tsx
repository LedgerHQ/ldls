import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader, ColorSection } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Colors/Border',
  globals: { backgrounds: { grid: true } },
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.2,
        cellAmount: 5,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Border: Story = {
  name: 'Border',
  render: () => (
    <div className="p-24 transition-colors duration-300">
      <SectionHeader
        title="Border Color Tokens"
        description="Semantic border color tokens for consistent theming across components"
      />
      <ColorSection
        title="Base"
        category="border"
        tokens={[
          { name: 'Base', className: 'bg-base border-base' },
          { name: 'Base Hover', className: 'bg-base border-base-hover' },
          { name: 'Base Pressed', className: 'bg-base border-base-pressed' },
        ]}
      />

      <ColorSection
        title="Muted"
        category="border"
        tokens={[
          { name: 'Muted', className: 'bg-base border-muted' },
          { name: 'Muted Hover', className: 'bg-base border-muted-hover' },
          { name: 'Muted Pressed', className: 'bg-base border-muted-pressed' },
          { name: 'Muted Subtle', className: 'bg-base border-muted-subtle' },
        ]}
      />

      <ColorSection
        title="Alerts"
        category="border"
        tokens={[
          { name: 'Error', className: 'bg-base border-error' },
          { name: 'Warning', className: 'bg-base border-warning' },
          { name: 'Success', className: 'bg-base border-success' },
        ]}
      />

      <ColorSection
        title="Active"
        category="border"
        tokens={[
          { name: 'Focus', className: 'bg-base border-focus' },
          { name: 'Active', className: 'bg-base border-active' },
        ]}
      />

      <ColorSection
        title="Primitives"
        category="border"
        tokens={[
          { name: 'Disabled', className: 'bg-base border-disabled' },
          { name: 'Black', className: 'bg-base border-black' },
          { name: 'White', className: 'bg-base border-white' },
        ]}
      />
    </div>
  ),
};
