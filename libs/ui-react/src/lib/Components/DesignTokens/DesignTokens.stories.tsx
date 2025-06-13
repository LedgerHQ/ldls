import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  tags: ['autodocs'],
  parameters: {
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
    },
  },
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
          <div className="bg-base p-16 rounded-lg border border-muted-subtle">
            <div className={`text-lg font-medium ${textClassName}`}>Aa</div>
            <div className="text-xs text-muted mt-4">{name}</div>
            <div className="text-xs text-muted font-mono">{textClassName}</div>
          </div>
        );
      case 'border':
        return (
          <div
            className={`bg-base p-16 rounded-lg border-2 ${className.replace(
              'bg-base ',
              ''
            )}`}
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
            className={`p-16 rounded-lg ${className} flex flex-col justify-between`}
          >
            <div className={`text-sm font-medium ${textClassName}`}>{name}</div>
            <div className={`text-xs font-mono ${textClassName} opacity-75`}>
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
    <div className="p-24 max-w-7xl  transition-colors duration-300">
      <SectionHeader
        title="Color Tokens"
        description="Semantic color tokens for consistent theming across components"
      />

      <ColorSection
        title="Background Colors"
        category="background"
        tokens={[
          { name: 'Base', className: 'bg-base', textClassName: 'text-base' },
          { name: 'Muted', className: 'bg-muted', textClassName: 'text-base' },
          {
            name: 'Muted Transparent',
            className: 'bg-muted-transparent',
            textClassName: 'text-base',
          },
          {
            name: 'Accent',
            className: 'bg-accent',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Interactive',
            className: 'bg-interactive',
            textClassName: 'text-on-interactive',
          },
          {
            name: 'Disabled',
            className: 'bg-disabled',
            textClassName: 'text-disabled',
          },
          { name: 'Error', className: 'bg-error', textClassName: 'text-error' },
          {
            name: 'Warning',
            className: 'bg-warning',
            textClassName: 'text-warning',
          },
          {
            name: 'Success',
            className: 'bg-success',
            textClassName: 'text-success',
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

export const AllTokens: Story = {
  render: () => (
    <div className="p-24 max-w-7xl  transition-colors duration-300">
      <div className="mb-40">
        <h1 className="text-3xl font-bold text-base mb-8">Design Tokens</h1>
        <p className="text-muted">
          Complete design token system providing consistent visual language
          across all components and applications.
        </p>
      </div>

      <ColorSection
        title="Background Colors"
        category="background"
        tokens={[
          { name: 'Base', className: 'bg-base', textClassName: 'text-base' },
          { name: 'Muted', className: 'bg-muted', textClassName: 'text-base' },
          {
            name: 'Muted Transparent',
            className: 'bg-muted-transparent',
            textClassName: 'text-base',
          },
          {
            name: 'Accent',
            className: 'bg-accent',
            textClassName: 'text-on-accent',
          },
          {
            name: 'Interactive',
            className: 'bg-interactive',
            textClassName: 'text-on-interactive',
          },
          {
            name: 'Disabled',
            className: 'bg-disabled',
            textClassName: 'text-disabled',
          },
          { name: 'Error', className: 'bg-error', textClassName: 'text-error' },
          {
            name: 'Warning',
            className: 'bg-warning',
            textClassName: 'text-warning',
          },
          {
            name: 'Success',
            className: 'bg-success',
            textClassName: 'text-success',
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

      <SpacingShowcase />
      <BorderRadiusShowcase />
      <TypographyShowcase />
    </div>
  ),
};
