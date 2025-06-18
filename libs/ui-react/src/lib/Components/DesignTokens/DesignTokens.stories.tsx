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
          <div
            className={cn(
              className,
              'p-16 rounded-lg border border-muted-subtle'
            )}
          >
            <div className={cn('heading-4', textClassName)}>Aa</div>
            <div className={cn('body-2 text-muted mt-4', textClassName)}>
              {name}
            </div>
            <div className={cn('body-2 text-muted', textClassName)}>
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
            <div className="body-2 text-muted">{name}</div>
            <div className="body-2 text-muted mt-4">
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
            <div className={cn('heading-4', textClassName)}>{name}</div>
            <div className={cn('body-2 opacity-75', textClassName)}>
              {className}
            </div>
          </div>
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
  <div className="mb-24">
    <h2 className="heading-3 text-base mb-8">{title}</h2>
    {description && <p className="text-muted">{description}</p>}
  </div>
);

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
    <h3 className="heading-3 text-base mb-16">{title}</h3>
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
    <h3 className="heading-3 mb-16 text-base">Spacing Scale</h3>
    <div className="space-y-12">
      {[
        { name: '1px', class: 'w-1', token: 'p-1' },
        { name: '2px', class: 'w-2', token: 'p-2' },
        { name: '4px', class: 'w-4', token: 'p-4' },
        { name: '6px', class: 'w-6', token: 'p-6' },
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
          <div className="w-48 caption text-base">{name}</div>
          <div className={`${widthClass} h-16 bg-accent rounded`}></div>
          <div className="body-2 text-muted">{token}</div>
        </div>
      ))}
    </div>
  </div>
);

const BorderRadiusShowcase = () => (
  <div className="mb-32">
    <h3 className="heading-3 mb-16 text-base">Border Radius</h3>
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
        <div key={name} className="">
          <div
            className={`w-48 h-48 bg-accent mx-auto mb-8 ${className}`}
          ></div>
          <div className="body-2 text-base">{name}</div>
          <div className="text-muted caption">{className}</div>
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
    <div className="caption mb-4 text-base">{className}</div>
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
    { className: 'caption', title: 'Caption' },
    { className: 'small-caption', title: 'Small Caption' },
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
          <div className="caption text-muted mt-8">{shadowClass}</div>
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
            { name: 'Top', class: 'gradient-top' },
            { name: 'Bottom', class: 'gradient-bottom' },
          ].map(({ name, class: gradientClass }) => (
            <div key={name} className="text-center">
              <div className={`h-96 rounded-lg ${gradientClass}`}></div>
              <div className="body-2 text-muted mt-8">{name}</div>
              <div className="caption text-muted mt-8">{gradientClass}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="heading-4 mb-16 text-base">Asset Gradients</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16">
          {[
            { name: 'BTC', class: 'gradient-bitcoin' },
            { name: 'USDT', class: 'gradient-tether-usdt' },
            { name: 'SOL', class: 'gradient-sol' },
            { name: 'ETH', class: 'gradient-ethereum' },
            { name: 'TRX', class: 'gradient-tron' },
            { name: 'DOGE', class: 'gradient-dogecoin' },
            { name: 'XRP', class: 'gradient-xrp' },
            { name: 'LTC', class: 'gradient-litecoin' },
            { name: 'BCH', class: 'gradient-bitcoin-cash' },
            { name: 'BNB', class: 'gradient-binance' },
            { name: 'ADA', class: 'gradient-cardano' },
            { name: 'DOT', class: 'gradient-polkadot' },
            { name: 'LINK', class: 'gradient-chainlink' },
            { name: 'UNI', class: 'gradient-uniswap' },
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
        title="Constant Colors"
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
          { name: 'Aion', className: 'bg-aion', textClassName: 'text-white' },
          {
            name: 'Algorand',
            className: 'bg-algorand',
            textClassName: 'text-white',
          },
          {
            name: 'Avalanche',
            className: 'bg-avax',
            textClassName: 'text-white',
          },
          { name: 'BAT', className: 'bg-bat', textClassName: 'text-white' },
          { name: 'BGB', className: 'bg-bgb', textClassName: 'text-white' },
          {
            name: 'Bitcoin',
            className: 'bg-bitcoin',
            textClassName: 'text-white',
          },
          {
            name: 'Bitcoin Cash',
            className: 'bg-bitcoin-cash',
            textClassName: 'text-white',
          },
          {
            name: 'Bitcoin Gold',
            className: 'bg-bitcoin-gold',
            textClassName: 'text-white',
          },
          {
            name: 'Bitcoin SV',
            className: 'bg-bitcoin-sv',
            textClassName: 'text-white',
          },
          {
            name: 'Binance',
            className: 'bg-binance',
            textClassName: 'text-white',
          },
          {
            name: 'Bytecoin',
            className: 'bg-bytecoin',
            textClassName: 'text-white',
          },
          {
            name: 'Cardano',
            className: 'bg-cardano',
            textClassName: 'text-white',
          },
          {
            name: 'Cosmos',
            className: 'bg-cosmos',
            textClassName: 'text-white',
          },
          {
            name: 'Compound',
            className: 'bg-compound',
            textClassName: 'text-white',
          },
          { name: 'Celo', className: 'bg-celo', textClassName: 'text-black' },
          {
            name: 'Chainlink',
            className: 'bg-chainlink',
            textClassName: 'text-white',
          },
          { name: 'CRO', className: 'bg-cro', textClassName: 'text-white' },
          { name: 'Dash', className: 'bg-dash', textClassName: 'text-white' },
          { name: 'DAI', className: 'bg-dai', textClassName: 'text-white' },
          {
            name: 'Decred',
            className: 'bg-decred',
            textClassName: 'text-white',
          },
          {
            name: 'Digibyte',
            className: 'bg-digibyte',
            textClassName: 'text-white',
          },
          {
            name: 'Dogecoin',
            className: 'bg-dogecoin',
            textClassName: 'text-white',
          },
          { name: 'dYdX', className: 'bg-dydx', textClassName: 'text-white' },
          {
            name: 'Dymension',
            className: 'bg-dym',
            textClassName: 'text-black',
          },
          {
            name: 'Elrond',
            className: 'bg-elrond',
            textClassName: 'text-white',
          },
          { name: 'Enigma', className: 'bg-eng', textClassName: 'text-white' },
          { name: 'EOS', className: 'bg-eos', textClassName: 'text-white' },
          {
            name: 'EtherGem',
            className: 'bg-ethergem',
            textClassName: 'text-white',
          },
          {
            name: 'Ethereum',
            className: 'bg-ethereum',
            textClassName: 'text-white',
          },
          {
            name: 'Ethereum Classic',
            className: 'bg-ethereum-classic',
            textClassName: 'text-white',
          },
          { name: 'Flare', className: 'bg-flr', textClassName: 'text-white' },
          { name: 'Fantom', className: 'bg-ftm', textClassName: 'text-white' },
          {
            name: 'Hedera',
            className: 'bg-hedera',
            textClassName: 'text-white',
          },
          { name: 'Helium', className: 'bg-hnt', textClassName: 'text-white' },
          { name: 'Huobi', className: 'bg-huobi', textClassName: 'text-white' },
          { name: 'IOTA', className: 'bg-iota', textClassName: 'text-white' },
          {
            name: 'Komodo',
            className: 'bg-komodo',
            textClassName: 'text-white',
          },
          { name: 'LEO', className: 'bg-leo', textClassName: 'text-white' },
          {
            name: 'Litecoin',
            className: 'bg-litecoin',
            textClassName: 'text-white',
          },
          {
            name: 'Monero',
            className: 'bg-monero',
            textClassName: 'text-white',
          },
          {
            name: 'MultiversX',
            className: 'bg-multiverse-x',
            textClassName: 'text-white',
          },
          { name: 'Nano', className: 'bg-nano', textClassName: 'text-white' },
          { name: 'Near', className: 'bg-near', textClassName: 'text-white' },
          { name: 'NEO', className: 'bg-neo', textClassName: 'text-white' },
          { name: 'Nimiq', className: 'bg-nimiq', textClassName: 'text-white' },
          {
            name: 'OMG Network',
            className: 'bg-omg-network',
            textClassName: 'text-white',
          },
          { name: 'OKB', className: 'bg-okb', textClassName: 'text-white' },
          {
            name: 'Osmosis',
            className: 'bg-osmo',
            textClassName: 'text-white',
          },
          {
            name: 'Peercoin',
            className: 'bg-peercoin',
            textClassName: 'text-white',
          },
          { name: 'Pirl', className: 'bg-pirl', textClassName: 'text-white' },
          { name: 'PIVX', className: 'bg-pivx', textClassName: 'text-white' },
          {
            name: 'Polkadot',
            className: 'bg-polkadot',
            textClassName: 'text-white',
          },
          {
            name: 'Polygon',
            className: 'bg-polygon',
            textClassName: 'text-white',
          },
          { name: 'Sats', className: 'bg-sats', textClassName: 'text-white' },
          {
            name: 'Stellar',
            className: 'bg-stellar',
            textClassName: 'text-white',
          },
          { name: 'Solana', className: 'bg-sol', textClassName: 'text-base' },
          {
            name: 'USDT',
            className: 'bg-tether-usdt',
            textClassName: 'text-white',
          },
          { name: 'Tezos', className: 'bg-tezos', textClassName: 'text-white' },
          { name: 'TKX', className: 'bg-tkx', textClassName: 'text-white' },
          { name: 'Tron', className: 'bg-tron', textClassName: 'text-white' },
          {
            name: 'Uniswap',
            className: 'bg-uniswap',
            textClassName: 'text-white',
          },
          {
            name: 'TrueUSD',
            className: 'bg-tusd',
            textClassName: 'text-white',
          },
          { name: 'USDC', className: 'bg-usdc', textClassName: 'text-base' },
          { name: 'UNI', className: 'bg-uni', textClassName: 'text-white' },
          { name: 'Waves', className: 'bg-waves', textClassName: 'text-white' },
          { name: 'XRP', className: 'bg-xrp', textClassName: 'text-white' },
          { name: 'Mixin', className: 'bg-xin', textClassName: 'text-white' },
          {
            name: 'Yieldly',
            className: 'bg-yieldly',
            textClassName: 'text-white',
          },
          { name: 'Zcash', className: 'bg-zcash', textClassName: 'text-white' },
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

export const Typography: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Typography Tokens"
        description="Typography: Display, Heading, Body, Caption, Small Caption"
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
