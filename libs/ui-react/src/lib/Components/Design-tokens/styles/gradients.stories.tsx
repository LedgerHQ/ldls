import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Styles/Gradients',
};

export default meta;
type Story = StoryObj;

const GradientShowcase = () => (
  <div className="mb-32">
    <div className="space-y-32">
      <div>
        <h4 className="mb-16 text-base heading-4">Directional Gradients</h4>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {[
            { name: 'Top', class: 'bg-gradient-top' },
            { name: 'Bottom', class: 'bg-gradient-bottom' },
          ].map(({ name, class: gradientClass }) => (
            <div key={name}>
              <div
                className={`border h-96 rounded-lg border-1 border-muted-subtle ${gradientClass}`}
              ></div>
              <div className="mt-8 text-base body-2">{name}</div>
              <div className="mt-8 text-muted body-4">{gradientClass}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-16 text-base heading-4">Asset Gradients</h4>
        <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-6">
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
            <div key={name}>
              <div
                className={`border h-64 rounded-lg border-1 border-muted-subtle ${gradientClass}`}
              ></div>
              <div className="mt-8 text-base body-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
