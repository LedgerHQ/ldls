import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader, ColorSection } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Colors/Text',
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

export const Text: Story = {
  name: 'Text',
  render: () => (
    <div className="p-24 transition-colors duration-300">
      <SectionHeader
        title="Text Color Tokens"
        description="Semantic text color tokens for consistent theming across components"
      />
      <ColorSection
        title="Base"
        category="text"
        tokens={[
          { name: 'Base', className: '', textClassName: 'text-base' },
          {
            name: 'Base Hover',
            className: '',
            textClassName: 'text-base-hover',
          },
          {
            name: 'Base Pressed',
            className: '',
            textClassName: 'text-base-pressed',
          },
        ]}
      />

      <ColorSection
        title="Muted"
        category="text"
        tokens={[
          { name: 'Muted', className: '', textClassName: 'text-muted' },
          {
            name: 'Muted Hover',
            className: '',
            textClassName: 'text-muted-hover',
          },
          {
            name: 'Muted Pressed',
            className: '',
            textClassName: 'text-muted-pressed',
          },
          {
            name: 'Muted Subtle',
            className: '',
            textClassName: 'text-muted-subtle',
          },
        ]}
      />

      <ColorSection
        title="Alerts"
        category="text"
        tokens={[
          { name: 'Error', className: '', textClassName: 'text-error' },
          { name: 'Warning', className: '', textClassName: 'text-warning' },
          { name: 'Success', className: '', textClassName: 'text-success' },
        ]}
      />

      <ColorSection
        title="On solid backgrounds"
        category="text"
        tokens={[
          {
            name: 'On Accent',
            className: 'bg-accent',
            textClassName: 'text-on-accent',
          },
          {
            name: 'On Interactive',
            className: 'bg-interactive',
            textClassName: 'text-on-interactive',
          },
          {
            name: 'On Error Strong',
            className: 'bg-error-strong',
            textClassName: 'text-on-error-strong',
          },
          {
            name: 'On Warning Strong',
            className: 'bg-warning-strong',
            textClassName: 'text-on-warning',
          },
          {
            name: 'On success strong',
            className: 'bg-success-strong',
            textClassName: 'text-on-success-strong',
          },
        ]}
      />

      <ColorSection
        title="Primitives"
        category="text"
        tokens={[
          { name: 'Disabled', className: '', textClassName: 'text-disabled' },
          {
            name: 'White',
            className: 'bg-black',
            textClassName: 'text-white',
          },
          {
            name: 'Black',
            className: 'bg-white',
            textClassName: 'text-black',
          },
          {
            name: 'Grey',
            className: 'bg-grey',
            textClassName: 'text-grey',
          },
        ]}
      />
    </div>
  ),
};
