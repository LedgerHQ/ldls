import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader, ColorSection } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Colors/Background',
  globals: {
    backgrounds: { value: 'var(--background-canvas-sheet)', grid: false },
  },
};

export default meta;
type Story = StoryObj;

export const Background: Story = {
  name: 'Background',
  render: () => (
    <div className="p-24 transition-colors duration-300">
      <SectionHeader
        title="Background Color Tokens"
        description="Semantic background color tokens for consistent theming across components"
      />

      <ColorSection
        title="Canvas"
        category="background"
        tokens={[
          {
            name: 'Canvas',
            className: 'bg-canvas',
            textClassName: 'text-base',
          },
          {
            name: 'Canvas Sheet',
            className: 'bg-canvas-sheet',
            textClassName: 'text-base',
          },
          {
            name: 'Canvas Overlay',
            className: 'bg-canvas-overlay',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Base"
        category="background"
        tokens={[
          { name: 'Base', className: 'bg-base', textClassName: 'text-base' },
          {
            name: 'Base Hover',
            className: 'bg-base-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Base Pressed',
            className: 'bg-base-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Base Transparent"
        category="background"
        tokens={[
          {
            name: 'Base Transparent',
            className: 'bg-base-transparent',
            textClassName: 'text-base',
          },
          {
            name: 'Base Transparent Hover',
            className: 'bg-base-transparent-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Base Transparent Pressed',
            className: 'bg-base-transparent-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Muted"
        category="background"
        tokens={[
          { name: 'Muted', className: 'bg-muted', textClassName: 'text-base' },
          {
            name: 'Muted Hover',
            className: 'bg-muted-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Pressed',
            className: 'bg-muted-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Muted on Sheet"
        category="background"
        tokens={[
          {
            name: 'Muted On Sheet',
            className: 'bg-muted-on-sheet',
            textClassName: 'text-base',
          },
          {
            name: 'Muted On Sheet Hover',
            className: 'bg-muted-on-sheet-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Muted On Sheet Pressed',
            className: 'bg-muted-on-sheet-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Muted on Muted"
        category="background"
        tokens={[
          {
            name: 'Muted On Muted',
            className: 'bg-muted-on-muted',
            textClassName: 'text-base',
          },
          {
            name: 'Muted On Muted Hover',
            className: 'bg-muted-on-muted-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Muted On Muted Pressed',
            className: 'bg-muted-on-muted-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Muted Transparent"
        category="background"
        tokens={[
          {
            name: 'Muted Transparent',
            className: 'bg-muted-transparent',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Transparent Hover',
            className: 'bg-muted-transparent-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Transparent Pressed',
            className: 'bg-muted-transparent-pressed',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Transparent Disabled',
            className: 'bg-muted-transparent-disabled',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Muted Strong"
        category="background"
        tokens={[
          {
            name: 'Muted Strong',
            className: 'bg-muted-strong',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Strong Hover',
            className: 'bg-muted-strong-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Muted Strong Pressed',
            className: 'bg-muted-strong-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Accent"
        category="background"
        tokens={[
          {
            name: 'Accent',
            className: 'bg-accent',
            textClassName: 'text-base',
          },
          {
            name: 'Accent Hover',
            className: 'bg-accent-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Accent Pressed',
            className: 'bg-accent-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Interactive"
        category="background"
        tokens={[
          {
            name: 'Interactive',
            className: 'bg-interactive',
            textClassName: 'text-base',
          },
          {
            name: 'Interactive Hover',
            className: 'bg-interactive-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Interactive Pressed',
            className: 'bg-interactive-pressed',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Alerts"
        category="background"
        tokens={[
          { name: 'Error', className: 'bg-error', textClassName: 'text-base' },
          {
            name: 'Error Strong',
            className: 'bg-error-strong',
            textClassName: 'text-base',
          },
          {
            name: 'Error Transparent',
            className: 'bg-error-transparent',
            textClassName: 'text-base',
          },
          {
            name: 'Warning',
            className: 'bg-warning',
            textClassName: 'text-base',
          },
          {
            name: 'Warning Strong',
            className: 'bg-warning-strong',
            textClassName: 'text-base',
          },
          {
            name: 'Success',
            className: 'bg-success',
            textClassName: 'text-base',
          },
          {
            name: 'Success Strong',
            className: 'bg-success-strong',
            textClassName: 'text-base',
          },
          {
            name: 'Success Transparent',
            className: 'bg-success-transparent',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Active"
        category="background"
        tokens={[
          {
            name: 'Active',
            className: 'bg-active',
            textClassName: 'text-base',
          },
          {
            name: 'Active Hover',
            className: 'bg-active-hover',
            textClassName: 'text-base',
          },
          {
            name: 'Active Pressed',
            className: 'bg-active-pressed',
            textClassName: 'text-base',
          },
          {
            name: 'Active Subtle',
            className: 'bg-active-subtle',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Primitives"
        category="background"
        tokens={[
          { name: 'White', className: 'bg-white', textClassName: 'text-base' },
          { name: 'Black', className: 'bg-black', textClassName: 'text-base' },
          {
            name: 'Disabled',
            className: 'bg-disabled',
            textClassName: 'text-base',
          },
        ]}
      />
    </div>
  ),
};
