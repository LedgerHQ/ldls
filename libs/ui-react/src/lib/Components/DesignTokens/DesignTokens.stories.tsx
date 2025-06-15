import type { Meta, StoryObj } from '@storybook/react';
import cn from '../../../utils/twMerge';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Enhanced Color Token Swatch Component
const ColorSwatch = ({
  name,
  className,
  textClassName = 'text-base',
  category = 'background',
}: {
  name: string;
  className: string;
  textClassName?: string;
  category?: 'background' | 'text' | 'border';
}) => {
  const getSwatchContent = () => {
    switch (category) {
      case 'text':
        return (
          <div
            className={cn(
              className,
              'p-16 rounded-lg border border-muted-subtle'
            )}
          >
            <div className={cn('text-lg font-medium', textClassName)}>Aa</div>
            <div className={cn('text-xs text-muted mt-4', textClassName)}>
              {name}
            </div>
            <div className={cn('text-xs text-muted font-mono', textClassName)}>
              {textClassName}
            </div>
          </div>
        );
      case 'border':
        return (
          <div
            className={cn(
              'bg- p-16 rounded-lg border-2',
              className.replace('bg-base ', '')
            )}
          >
            <div className="text-xs text-muted">{name}</div>
            <div className="text-xs text-muted font-mono mt-4">
              {className.replace('bg-base ', '')}
            </div>
          </div>
        );
      default:
        return (
          <div
            className={cn(
              'p-16 rounded-lg flex flex-col justify-between border border-1',
              className
            )}
          >
            <div className={cn('text-sm font-medium', textClassName)}>
              {name}
            </div>
            <div className={cn('text-xs font-mono opacity-75', textClassName)}>
              {className}
            </div>
          </div>
        );
    }
  };

  return <div className="group">{getSwatchContent()}</div>;
};

// Section Header Component
const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-24">
    <h2 className="text-xl font-semibold text-base  mb-8">{title}</h2>
    {description && <p className="text-muted text-sm">{description}</p>}
  </div>
);

// Color Section Component
const ColorSection = ({
  title,
  tokens,
  category = 'background',
}: {
  title: string;
  tokens: Array<{ name: string; className: string; textClassName?: string }>;
  category?: 'background' | 'text' | 'border';
}) => (
  <div className="mb-32">
    <h3 className="text-lg font-medium text-base mb-16">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
      {tokens.map(({ name, className, textClassName }) => (
        <ColorSwatch
          key={name}
          name={name}
          className={className}
          textClassName={textClassName}
          category={category}
        />
      ))}
    </div>
  </div>
);

// Spacing Showcase Component
const SpacingShowcase = () => (
  <div className="mb-32">
    <h3 className="text-lg font-medium text-base mb-16">Spacing Scale</h3>
    <div className="space-y-12">
      {[
        { name: '4px', class: 'w-4', token: 'p-4' },
        { name: '8px', class: 'w-8', token: 'p-8' },
        { name: '12px', class: 'w-12', token: 'p-12' },
        { name: '16px', class: 'w-16', token: 'p-16' },
        { name: '20px', class: 'w-20', token: 'p-20' },
        { name: '24px', class: 'w-24', token: 'p-24' },
        { name: '32px', class: 'w-32', token: 'p-32' },
        { name: '40px', class: 'w-40', token: 'p-40' },
        { name: '48px', class: 'w-48', token: 'p-48' },
        { name: '64px', class: 'w-64', token: 'p-64' },
        { name: '80px', class: 'w-80', token: 'p-80' },
        { name: '96px', class: 'w-96', token: 'p-96' },
        { name: '112px', class: 'w-112', token: 'p-112' },
        { name: '128px', class: 'w-128', token: 'p-128' },
        { name: '144px', class: 'w-144', token: 'p-144' },
        { name: '176px', class: 'w-176', token: 'p-176' },
      ].map(({ name, class: widthClass, token }) => (
        <div key={name} className="flex items-center gap-16">
          <div className="w-48 text-sm text-base font-mono">{name}</div>
          <div className={`${widthClass} h-16 bg-accent rounded`}></div>
          <div className="text-xs text-muted font-mono">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

// Border Radius Showcase Component
const BorderRadiusShowcase = () => (
  <div className="mb-32">
    <h3 className="text-lg font-medium text-base mb-16">Border Radius</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-16">
      {[
        { name: 'none', class: 'rounded-none' },
        { name: 'sm', class: 'rounded-sm' },
        { name: 'base', class: 'rounded' },
        { name: 'md', class: 'rounded-md' },
        { name: 'lg', class: 'rounded-lg' },
        { name: 'xl', class: 'rounded-xl' },
        { name: '2xl', class: 'rounded-2xl' },
        { name: 'full', class: 'rounded-full' },
      ].map(({ name, class: className }) => (
        <div key={name} className="text-center">
          <div
            className={`w-48 h-48 bg-accent mx-auto mb-8 ${className}`}
          ></div>
          <div className="text-xs font-mono text-muted">{name}</div>
        </div>
      ))}
    </div>
  </div>
);

// Typography Showcase Component
const TypographyShowcase = () => (
  <div className="mb-32">
    <h3 className="text-lg font-medium text-base mb-16">Typography</h3>
    <div className="space-y-12">
      {/* Headings */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Heading 1 (text-4xl font-bold)
        </div>
        <div className="text-4xl font-bold">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Heading 2 (text-3xl font-semibold)
        </div>
        <div className="text-3xl font-semibold">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Heading 3 (text-2xl font-semibold)
        </div>
        <div className="text-2xl font-semibold">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      {/* Body text */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Body Large (text-lg)
        </div>
        <div className="text-lg">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Body Base (text-base)
        </div>
        <div className="text-base">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Body Small (text-sm)
        </div>
        <div className="text-sm">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      {/* Caption */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Caption (text-xs)
        </div>
        <div className="text-xs">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      {/* Monospace */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Monospace (font-mono)
        </div>
        <div className="font-mono">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      {/* Italic */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">Italic (italic)</div>
        <div className="italic">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
      {/* Bold */}
      <div>
        <div className="text-xs text-muted font-mono mb-4">
          Bold (font-bold)
        </div>
        <div className="font-bold">
          The quick brown fox jumps over the lazy dog
        </div>
      </div>
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div className="p-24 max-w-7xl bg-canvas-sheet transition-colors duration-300">
      <SectionHeader
        title="Color Tokens"
        description="Semantic color tokens for consistent theming across components"
      />

      <ColorSection
        title="Canvas Colors"
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
        title="Base Colors"
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
        title="Muted Colors"
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
          {
            name: 'Muted Strong',
            className: 'bg-muted-strong',
            textClassName: 'text-white',
          },
          {
            name: 'Muted Strong Hover',
            className: 'bg-muted-strong-hover',
            textClassName: 'text-white',
          },
          {
            name: 'Muted Strong Pressed',
            className: 'bg-muted-strong-pressed',
            textClassName: 'text-white',
          },
        ]}
      />

      <ColorSection
        title="Accent Colors"
        category="background"
        tokens={[
          {
            name: 'Accent',
            className: 'bg-accent',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Accent Hover',
            className: 'bg-accent-hover',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Accent Pressed',
            className: 'bg-accent-pressed',
            textClassName: 'text-on-accent',
          },
        ]}
      />

      <ColorSection
        title="Interactive Colors"
        category="background"
        tokens={[
          {
            name: 'Interactive',
            className: 'bg-interactive',
            textClassName: 'text-on-interactive',
          },
          {
            name: 'Interactive Hover',
            className: 'bg-interactive-hover',
            textClassName: 'text-on-interactive',
          },
          {
            name: 'Interactive Pressed',
            className: 'bg-interactive-pressed',
            textClassName: 'text-on-interactive',
          },
        ]}
      />

      <ColorSection
        title="State Colors - Error"
        category="background"
        tokens={[
          { name: 'Error', className: 'bg-error', textClassName: 'text-error' },
          {
            name: 'Error Strong',
            className: 'bg-error-strong',
            textClassName: 'text-on-error-strong',
          },
          {
            name: 'Error Transparent',
            className: 'bg-error-transparent',
            textClassName: 'text-error',
          },
        ]}
      />

      <ColorSection
        title="State Colors - Warning"
        category="background"
        tokens={[
          {
            name: 'Warning',
            className: 'bg-warning',
            textClassName: 'text-warning',
          },
          {
            name: 'Warning Strong',
            className: 'bg-warning-strong',
            textClassName: 'text-white',
          },
        ]}
      />

      <ColorSection
        title="State Colors - Success"
        category="background"
        tokens={[
          {
            name: 'Success',
            className: 'bg-success',
            textClassName: 'text-success',
          },
          {
            name: 'Success Strong',
            className: 'bg-success-strong',
            textClassName: 'text-on-succes-strong',
          },
          {
            name: 'Success Transparent',
            className: 'bg-success-transparent',
            textClassName: 'text-success',
          },
        ]}
      />

      <ColorSection
        title="Active Colors"
        category="background"
        tokens={[
          {
            name: 'Active',
            className: 'bg-active',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Active Hover',
            className: 'bg-active-hover',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Active Pressed',
            className: 'bg-active-pressed',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Active Subtle',
            className: 'bg-active-subtle',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Gradient Colors"
        category="background"
        tokens={[
          {
            name: 'Gradient 100',
            className: 'bg-gradient-100',
            textClassName: 'dark:text-black text-white',
          },
          {
            name: 'Gradient 80',
            className: 'bg-gradient-80',
            textClassName: 'text-white',
          },
          {
            name: 'Gradient 70',
            className: 'bg-gradient-70',
            textClassName: 'text-white',
          },
          {
            name: 'Gradient 0',
            className: 'bg-gradient-0',
            textClassName: 'text-base',
          },
          {
            name: 'Gradient On Interactive 100',
            className: 'bg-gradient-on-interactive-100',
            textClassName: 'text-base',
          },
          {
            name: 'Gradient On Interactive 0',
            className: 'bg-gradient-on-interactive-0',
            textClassName: 'text-base',
          },
          {
            name: 'Gradient On Accent 100',
            className: 'bg-gradient-on-accent-100',
            textClassName: 'text-white',
          },
          {
            name: 'Gradient On Accent 0',
            className: 'bg-gradient-on-accent-0',
            textClassName: 'text-base',
          },
          {
            name: 'Gradient Muted 100',
            className: 'bg-gradient-muted-100',
            textClassName: 'text-base',
          },
          {
            name: 'Gradient Muted 0',
            className: 'bg-gradient-muted-0',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Special Colors"
        category="background"
        tokens={[
          { name: 'White', className: 'bg-white', textClassName: 'text-black' },
          { name: 'Black', className: 'bg-black', textClassName: 'text-white' },
          {
            name: 'Disabled',
            className: 'bg-disabled',
            textClassName: 'text-disabled',
          },
          {
            name: 'Native',
            className: 'bg-native',
            textClassName: 'text-base',
          },
        ]}
      />

      <ColorSection
        title="Text Colors"
        category="text"
        tokens={[
          { name: 'Base', className: '', textClassName: 'text-base' },
          { name: 'Muted', className: '', textClassName: 'text-muted' },
          { name: 'Disabled', className: '', textClassName: 'text-disabled' },
          { name: 'Error', className: '', textClassName: 'text-error' },
          { name: 'Warning', className: '', textClassName: 'text-warning' },
          { name: 'Success', className: '', textClassName: 'text-success' },
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
        ]}
      />

      <ColorSection
        title="Border Colors"
        category="border"
        tokens={[
          { name: 'Base', className: 'bg-base border-base' },
          { name: 'Muted', className: 'bg-base border-muted' },
          { name: 'Muted Subtle', className: 'bg-base border-muted-subtle' },
          { name: 'Disabled', className: 'bg-base border-disabled' },
          { name: 'Error', className: 'bg-base border-error' },
          { name: 'Warning', className: 'bg-base border-warning' },
          { name: 'Success', className: 'bg-base border-success' },
          { name: 'Focus', className: 'bg-base border-focus' },
        ]}
      />
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="p-24 max-w-4xl">
      <SectionHeader
        title="Spacing Tokens"
        description="Consistent spacing scale for padding, margin, and layout"
      />
      <SpacingShowcase />
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="p-24 max-w-4xl">
      <SectionHeader
        title="Border Radius Tokens"
        description="Border radius values for consistent rounded corners"
      />
      <BorderRadiusShowcase />
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="p-24 max-w-4xl">
      <SectionHeader
        title="Typography Tokens"
        description="Font sizes, weights, and styles for consistent typography"
      />
      <TypographyShowcase />
    </div>
  ),
};
