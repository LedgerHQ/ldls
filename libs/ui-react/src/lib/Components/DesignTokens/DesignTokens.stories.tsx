import type { Meta, StoryObj } from '@storybook/react';
import cn from '../../../utils/twMerge';

const meta: Meta = {
  title: 'Design Tokens',
  tags: ['autodocs'],
  globals: {
    backgrounds: { value: 'var(--background-canvas-sheet)', grid: false },
  },
};

export default meta;
type Story = StoryObj;

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
          <>
            <div
              className={cn(
                className,
                'p-16 rounded-lg border border-1 border-muted-subtle h-64'
              )}
            >
              <div className={cn('heading-4', textClassName)}>Aa</div>
            </div>
            <div className="body-1-semi-bold mt-8 text-base">{name}</div>
            <div className="body-3 text-muted">{textClassName}</div>
          </>
        );
      case 'border':
        return (
          <>
            <div
              className={cn(
                'bg- p-16 rounded-lg border-2 h-64',
                className.replace('bg-base ', '')
              )}
            ></div>
            <div className="body-1-semi-bold mt-8 text-base">{name}</div>
            <div className="body-3 text-muted">
              {className.replace('bg-base ', '')}
            </div>
          </>
        );
      default:
        return (
          <>
            <div
              className={cn(
                'p-16 rounded-lg flex flex-col justify-between border border-muted-subtle h-64 border-1',
                className
              )}
            ></div>
            <div className={cn('body-1-semi-bold mt-8', textClassName)}>
              {name}
            </div>
            <div className={cn('body-3 text-muted', textClassName)}>
              {className}
            </div>
          </>
        );
    }
  };

  return <div className="group">{getSwatchContent()}</div>;
};

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-48">
    <h2 className="display-4 text-base mb-8">{title}</h2>
    {description && <p className="text-muted">{description}</p>}
  </div>
);

const ColorSection = ({
  title,
  tokens,
  category = 'background',
}: {
  title?: string;
  tokens: Array<{ name: string; className: string; textClassName?: string }>;
  category?: 'background' | 'text' | 'border';
}) => (
  <div className="mb-32">
    <h3 className="heading-3 text-base mb-32">{title}</h3>
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

const SpacingShowcase = () => (
  <div className="mb-32">
    <div className="space-y-12">
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
        // { name: '96px', class: 'p-96', token: 'p-96' },
        { name: '112px', class: 'p-112', token: 'p-112' },
        { name: '128px', class: 'p-128', token: 'p-128' },
        { name: '144px', class: 'p-144', token: 'p-144' },
        { name: '160px', class: 'p-160', token: 'p-160' },
        { name: '256px', class: 'p-256', token: 'p-256' },
      ].map(({ name, class: widthClass, token }) => (
        <div key={name} className="flex items-center gap-16">
          <div className="w-48 body-4 text-base">{name}</div>
          <div className={`${widthClass}  bg-accent rounded-md`}>
            <div className="body-2 w-56 h-56 text-muted bg-muted-transparent-pressed rounded-sm"></div>
          </div>
          <div className="body-2 text-muted">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

const WidthShowcase = () => (
  <div className="mb-32">
    <div className="space-y-12">
      {[
        { name: '208px', class: 'w-208', token: 'w-208' },
        { name: '176px', class: 'w-176', token: 'w-176' },
        { name: '144px', class: 'w-144', token: 'w-144' },
        { name: '128px', class: 'w-128', token: 'w-128' },
        { name: '112px', class: 'w-112', token: 'w-112' },
        { name: '96px', class: 'w-96', token: 'w-96' },
        { name: '80px', class: 'w-80', token: 'w-80' },
        { name: '64px', class: 'w-64', token: 'w-64' },
        { name: '48px', class: 'w-48', token: 'w-48' },
        { name: '40px', class: 'w-40', token: 'w-40' },
        { name: '32px', class: 'w-32', token: 'w-32' },
        { name: '24px', class: 'w-24', token: 'w-24' },
        { name: '20px', class: 'w-20', token: 'w-20' },
        { name: '16px', class: 'w-16', token: 'w-16' },
        { name: '12px', class: 'w-12', token: 'w-12' },
        { name: '8px', class: 'w-8', token: 'w-8' },
        { name: '6px', class: 'w-6', token: 'w-6' },
        { name: '4px', class: 'w-4', token: 'w-4' },
        { name: '2px', class: 'w-2', token: 'p-2' },
        { name: '1px', class: 'w-1', token: 'w-1' },
      ].map(({ name, class: widthClass, token }) => (
        <div key={name} className="flex items-center gap-16">
          <div>
            <div className="w-48 body-2 text-base">{name}</div>
            <div className="body-4 text-muted">{token}</div>
          </div>
          <div className={`${widthClass} h-24 bg-accent rounded-xs`}></div>
        </div>
      ))}
    </div>
  </div>
);

const HeightShowcase = () => (
  <div className="mb-32">
    <div className="flex flex-row gap-16">
      {[
        { name: '208px', class: 'h-208', token: 'h-208' },
        { name: '176px', class: 'h-176', token: 'h-176' },
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
            className={`${heightClass} w-24 bg-accent rounded-xs mb-12`}
          ></div>
          <div className="w-48 body-2 text-base">{name}</div>
          <div className="body-4 text-muted">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

const BorderRadiusShowcase = () => (
  <div className="mb-32">
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-16">
      {[
        { name: 'none', class: 'rounded-none' },
        { name: 'sm', class: 'rounded-sm' },
        // { name: 'base', class: 'rounded' }, //to be added ?
        { name: 'md', class: 'rounded-md' },
        { name: 'lg', class: 'rounded-lg' },
        { name: 'xl', class: 'rounded-xl' },
        { name: '2xl', class: 'rounded-2xl' },
        { name: 'full', class: 'rounded-full' },
      ].map(({ name, class: className }) => (
        <div key={name} className="">
          <div
            className={`w-48 h-48 bg-accent mx-auto mb-8 ${className}`}
          ></div>
          <div></div>
          <div className="body-2 text-base">{name}</div>
          <div className="text-muted body-4">{className}</div>
        </div>
      ))}
    </div>
  </div>
);

const BorderWidthShowcase = () => (
  <div className="mb-32">
    <h3 className="heading-3 mb-16 text-base">Border Width</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
      {[
        { name: '1px', class: 'border-1', token: 'border-1' },
        { name: '2px', class: 'border-2', token: 'border-2' },
      ].map(({ name, class: borderWidthClass, token }) => (
        <div key={name} className="flex items-center gap-16">
          <div className="w-48 body-4 text-base">{name}</div>
          <div
            className={`${borderWidthClass} border w-16 border-muted-subtle rounded`}
          ></div>
          <div className="body-2 text-muted">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

const TypographySample = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => (
  <div>
    <div className={`${className} mb-4 text-base`}>{title}</div>
    <div className={`${className} text-base`}>
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="body-4 mb-4 text-base">{className}</div>
  </div>
);

const TypographyShowcase = () => {
  const typographyStyles = [
    { className: 'display-1', title: 'Display 1' },
    { className: 'display-2', title: 'Display 2' },
    { className: 'display-3', title: 'Display 3' },
    { className: 'display-4', title: 'Display 4' },
    { className: 'heading-1', title: 'Heading 1' },
    { className: 'heading-1-medium', title: 'Heading 1 Medium' },
    { className: 'heading-2', title: 'Heading 2' },
    { className: 'heading-2-medium', title: 'Heading 2 Medium' },
    { className: 'heading-3', title: 'Heading 3' },
    { className: 'heading-3-medium', title: 'Heading 3 Medium' },
    { className: 'body-1', title: 'Body 1' },
    { className: 'body-1-semi-bold', title: 'Body 1 Semi Bold' },
    { className: 'body-2', title: 'Body 2' },
    { className: 'body-2-semi-bold', title: 'Body 2 Semi Bold' },
    { className: 'body-3', title: 'Body 3' },
    { className: 'body-3-semi-bold', title: 'Body 3 Semi Bold' },
    { className: 'body-4', title: 'Body 4' },
    { className: 'body-4-semi-bold', title: 'Body 4 Semi Bold' },
  ];

  return (
    <div className="mb-32">
      <h3 className="heading-3 mb-16 text-base">Typography</h3>
      <div className="space-y-12">
        {typographyStyles.map((style) => (
          <TypographySample key={style.className} {...style} />
        ))}
      </div>
    </div>
  );
};

// Drop Shadow Showcase Component
const DropShadowShowcase = () => (
  <div className="mb-32 ">
    <h3 className="heading-3 mb-16 text-base">Drop Shadows</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16">
      {[
        { name: '4px', class: 'drop-shadow-4' },
        { name: '8px', class: 'drop-shadow-8' },
        { name: '16px', class: 'drop-shadow-16' },
        { name: '24px', class: 'drop-shadow-24' },
        { name: '32px', class: 'drop-shadow-32' },
      ].map(({ name, class: shadowClass }) => (
        <div key={name} className="text-center ">
          <div className={`h-64 rounded-lg ${shadowClass}`}></div>
          <div className="body-2 text-muted mt-8">{name}</div>
          <div className="body-4 text-muted mt-8">{shadowClass}</div>
        </div>
      ))}
    </div>
  </div>
);

const GradientShowcase = () => (
  <div className="mb-32">
    <h3 className="heading-3 mb-16 text-base">Gradients</h3>
    <div className="space-y-32">
      <div>
        <h4 className="heading-4 mb-16 text-base">Directional Gradients</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {[
            { name: 'Top', class: 'bg-gradient-top' },
            { name: 'Bottom', class: 'bg-gradient-bottom' },
          ].map(({ name, class: gradientClass }) => (
            <div key={name} className="text-center">
              <div className={`h-96 rounded-lg ${gradientClass}`}></div>
              <div className="body-2 text-muted mt-8">{name}</div>
              <div className="body-4 text-muted mt-8">{gradientClass}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="heading-4 mb-16 text-base">Asset Gradients</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16">
          {[
            { name: 'BTC', class: 'bg-gradient-bitcoin' },
            { name: 'USDT', class: 'bg-gradient-tether-usdt' },
            { name: 'SOL', class: 'bg-gradient-sol' },
            { name: 'ETH', class: 'bg-gradient-ethereum' },
            { name: 'TRX', class: 'bg-gradient-tron' },
            { name: 'DOGE', class: 'bg-gradient-dogecoin' },
            { name: 'XRP', class: 'bg-gradient-xrp' },
            { name: 'LTC', class: 'bg-gradient-litecoin' },
            { name: 'BCH', class: 'bg-gradient-bitcoin-cash' },
            { name: 'BNB', class: 'bg-gradient-binance' },
            { name: 'ADA', class: 'bg-gradient-cardano' },
            { name: 'DOT', class: 'bg-gradient-polkadot' },
            { name: 'LINK', class: 'bg-gradient-chainlink' },
            { name: 'UNI', class: 'bg-gradient-uniswap' },
            { name: 'USDC', class: 'bg-gradient-usdc' },
          ].map(({ name, class: gradientClass }) => (
            <div key={name} className="text-center">
              <div className={`h-64 rounded-lg ${gradientClass}`}></div>
              <div className="body-2 text-muted mt-8">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div className="p-24 transition-colors duration-300">
      <SectionHeader
        title="Color Tokens"
        description="Semantic color tokens for consistent theming across components"
      />

      <ColorSection
        title="Background"
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
        ]}
      />

      <ColorSection
        category="background"
        tokens={[
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
        ]}
      />

      <ColorSection
        category="background"
        tokens={[
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

      <ColorSection
        title="Text Colors"
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
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
          {
            name: 'Muted Subtle',
            className: '',
            textClassName: 'text-muted-subtle',
          },
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
          { name: 'Disabled', className: '', textClassName: 'text-disabled' },
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
          {
            name: 'Muted Subtle',
            className: '',
            textClassName: 'text-muted-subtle',
          },
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
          { name: 'Error', className: '', textClassName: 'text-error' },
          { name: 'Warning', className: '', textClassName: 'text-warning' },
          { name: 'Success', className: '', textClassName: 'text-success' },
        ]}
      />

      <ColorSection
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
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
          {
            name: 'White',
            className: 'bg-black',
          },
          {
            name: 'Black',
            className: 'bg-white',
            textClassName: 'text-black',
          },
          {
            name: 'Gray',
            className: 'bg-gray',
            textClassName: 'text-gray',
          },
        ]}
      />

      <ColorSection
        category="text"
        tokens={[
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
        title="Border Color"
        category="border"
        tokens={[
          { name: 'Base', className: 'bg-base border-base' },
          { name: 'Base Hover', className: 'bg-base border-base-hover' },
          { name: 'Base Pressed', className: 'bg-base border-base-pressed' },
        ]}
      />

      <ColorSection
        category="border"
        tokens={[
          { name: 'Muted', className: 'bg-base border-muted' },
          { name: 'Muted Hover', className: 'bg-base border-muted-hover' },
          { name: 'Muted Pressed', className: 'bg-base border-muted-pressed' },
        ]}
      />

      <ColorSection
        category="border"
        tokens={[
          { name: 'Muted Subtle', className: 'bg-base border-muted-subtle' },
        ]}
      />

      <ColorSection
        category="border"
        tokens={[{ name: 'Disabled', className: 'bg-base border-disabled' }]}
      />

      <ColorSection
        category="border"
        tokens={[
          { name: 'Black', className: 'bg-base border-black' },
          { name: 'White', className: 'bg-base border-white' },
        ]}
      />

      <ColorSection
        category="border"
        tokens={[
          { name: 'Error', className: 'bg-base border-error' },
          { name: 'Warning', className: 'bg-base border-warning' },
          { name: 'Success', className: 'bg-base border-success' },
        ]}
      />

      <ColorSection
        category="border"
        tokens={[
          { name: 'Focus', className: 'bg-base border-focus' },
          { name: 'Active', className: 'bg-base border-active' },
        ]}
      />
    </div>
  ),
};

export const DiscoveryColors: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Discovery Colors Tokens"
        description="Brand colors for discover services and platform integrations"
      />
      <ColorSection
        title="Discovery Colors"
        category="background"
        tokens={[
          { name: '1inch', className: 'bg-1inch', textClassName: 'text-base' },
          {
            name: 'Changelly',
            className: 'bg-changelly',
          },
          {
            name: 'Compound',
            className: 'bg-compound',
          },
          {
            name: 'Curve',
            className: 'bg-curve',
          },
          { name: 'Dai', className: 'bg-dai' },
          { name: 'Dydx', className: 'bg-dydx' },
          {
            name: 'Deversifi',
            className: 'bg-deversifi',
          },
          {
            name: 'Lido',
            className: 'bg-lido',
          },
          {
            name: 'OpenSea',
            className: 'bg-opensea',
          },
          {
            name: 'Paraswap',
            className: 'bg-paraswap',
          },
          {
            name: 'Rarible',
            className: 'bg-rarible',
          },
          {
            name: 'Zerion',
            className: 'bg-zerion',
          },
          {
            name: 'Bitrefill',
            className: 'bg-bitrefill',
          },
          {
            name: 'Loopipay Blue',
            className: 'bg-loopipay-blue',
          },
          {
            name: 'Loopipay Black',
            className: 'bg-loopipay-black',
          },
          {
            name: 'Loopipay Lime',
            className: 'bg-loopipay-lime',
          },
          {
            name: 'Simplex',
            className: 'bg-simplex',
          },
          {
            name: 'Baanx',
            className: 'bg-baanx',
          },
          {
            name: 'Mercuryo',
            className: 'bg-mercuryo',
          },
          {
            name: 'Juno',
            className: 'bg-juno',
          },
          {
            name: 'Sardine',
            className: 'bg-sardine',
          },
        ]}
      />
    </div>
  ),
};
export const CryptoColors: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Crypto Colors Tokens"
        description="Crypto colors tokens for different cryptocurrencies"
      />
      <ColorSection
        title="Crypto Colors"
        category="background"
        tokens={[
          { name: 'Aion', className: 'bg-aion' },
          {
            name: 'Algorand',
            className: 'bg-algorand',
          },
          {
            name: 'Avalanche',
            className: 'bg-avax',
          },
          { name: 'BAT', className: 'bg-bat' },
          { name: 'BGB', className: 'bg-bgb' },
          {
            name: 'Bitcoin',
            className: 'bg-bitcoin',
          },
          {
            name: 'Bitcoin Cash',
            className: 'bg-bitcoin-cash',
          },
          {
            name: 'Bitcoin Gold',
            className: 'bg-bitcoin-gold',
          },
          {
            name: 'Bitcoin SV',
            className: 'bg-bitcoin-sv',
          },
          {
            name: 'Binance',
            className: 'bg-binance',
          },
          {
            name: 'Bytecoin',
            className: 'bg-bytecoin',
          },
          {
            name: 'Cardano',
            className: 'bg-cardano',
          },
          {
            name: 'Cosmos',
            className: 'bg-cosmos',
          },
          {
            name: 'Compound',
            className: 'bg-compound',
          },
          { name: 'Celo', className: 'bg-celo', textClassName: 'text-black' },
          {
            name: 'Chainlink',
            className: 'bg-chainlink',
          },
          { name: 'CRO', className: 'bg-cro' },
          { name: 'Dash', className: 'bg-dash' },
          { name: 'DAI', className: 'bg-dai' },
          {
            name: 'Decred',
            className: 'bg-decred',
          },
          {
            name: 'Digibyte',
            className: 'bg-digibyte',
          },
          {
            name: 'Dogecoin',
            className: 'bg-dogecoin',
          },
          { name: 'dYdX', className: 'bg-dydx' },
          {
            name: 'Dymension',
            className: 'bg-dym',
            textClassName: 'text-black',
          },
          {
            name: 'Elrond',
            className: 'bg-elrond',
          },
          { name: 'Enigma', className: 'bg-eng' },
          { name: 'EOS', className: 'bg-eos' },
          {
            name: 'EtherGem',
            className: 'bg-ethergem',
          },
          {
            name: 'Ethereum',
            className: 'bg-ethereum',
          },
          {
            name: 'Ethereum Classic',
            className: 'bg-ethereum-classic',
          },
          { name: 'Flare', className: 'bg-flr' },
          { name: 'Fantom', className: 'bg-ftm' },
          {
            name: 'Hedera',
            className: 'bg-hedera',
          },
          { name: 'Helium', className: 'bg-hnt' },
          { name: 'Huobi', className: 'bg-huobi' },
          { name: 'IOTA', className: 'bg-iota' },
          {
            name: 'Komodo',
            className: 'bg-komodo',
          },
          { name: 'LEO', className: 'bg-leo' },
          {
            name: 'Litecoin',
            className: 'bg-litecoin',
          },
          {
            name: 'Monero',
            className: 'bg-monero',
          },
          {
            name: 'MultiversX',
            className: 'bg-multiverse-x',
          },
          { name: 'Nano', className: 'bg-nano' },
          { name: 'Near', className: 'bg-near' },
          { name: 'NEO', className: 'bg-neo' },
          { name: 'Nimiq', className: 'bg-nimiq' },
          {
            name: 'OMG Network',
            className: 'bg-omg-network',
          },
          { name: 'OKB', className: 'bg-okb' },
          {
            name: 'Osmosis',
            className: 'bg-osmo',
          },
          {
            name: 'Peercoin',
            className: 'bg-peercoin',
          },
          { name: 'Pirl', className: 'bg-pirl' },
          { name: 'PIVX', className: 'bg-pivx' },
          {
            name: 'Polkadot',
            className: 'bg-polkadot',
          },
          {
            name: 'Polygon',
            className: 'bg-polygon',
          },
          { name: 'Sats', className: 'bg-sats' },
          {
            name: 'Stellar',
            className: 'bg-stellar',
          },
          { name: 'Solana', className: 'bg-sol', textClassName: 'text-base' },
          {
            name: 'USDT',
            className: 'bg-tether-usdt',
          },
          { name: 'Tezos', className: 'bg-tezos' },
          { name: 'TKX', className: 'bg-tkx' },
          { name: 'Tron', className: 'bg-tron' },
          {
            name: 'Uniswap',
            className: 'bg-uniswap',
          },
          {
            name: 'TrueUSD',
            className: 'bg-tusd',
          },
          { name: 'USDC', className: 'bg-usdc', textClassName: 'text-base' },
          { name: 'UNI', className: 'bg-uni' },
          { name: 'Waves', className: 'bg-waves' },
          { name: 'XRP', className: 'bg-xrp' },
          { name: 'Mixin', className: 'bg-xin' },
          {
            name: 'Yieldly',
            className: 'bg-yieldly',
          },
          { name: 'Zcash', className: 'bg-zcash' },
        ]}
      />
    </div>
  ),
};

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

export const Width: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Width Tokens"
        description="Width values for consistent width"
      />
      <WidthShowcase />
    </div>
  ),
};

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

export const BorderRadius: Story = {
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

export const BorderWidth: Story = {
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

export const Typography: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Typography Tokens"
        description="Typography: Display, Heading, Body, body-4, Small body-4"
      />
      <TypographyShowcase />
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Drop Shadow Tokens"
        description="Consistent shadow styles for depth and elevation"
      />
      <DropShadowShowcase />
    </div>
  ),
};

export const Gradients: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Gradient Tokens"
        description="Directional and asset-specific gradients"
      />
      <GradientShowcase />
    </div>
  ),
};
