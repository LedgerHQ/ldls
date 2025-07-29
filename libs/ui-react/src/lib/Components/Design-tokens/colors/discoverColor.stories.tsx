import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader, ColorSection } from '../shared';

const meta: Meta = {
  title: 'Foundations/Colors/Discover background',
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

export const Discover: Story = {
  name: 'Discover background',
  render: () => (
    <div className="border-width p-24">
      <SectionHeader
        title="Discover Colors"
        description="Tailwind classes for brand colors for discover services and platform integrations"
      />
      <ColorSection
        category="background"
        tokens={[
          {
            name: '1inch',
            className: 'bg-discover-1inch',
            textClassName: 'text-base',
          },
          {
            name: 'Changelly',
            className: 'bg-discover-changelly',
          },
          {
            name: 'Compound',
            className: 'bg-discover-compound',
          },

          {
            name: 'Deversifi',
            className: 'bg-discover-deversifi',
          },
          {
            name: 'Lido',
            className: 'bg-discover-lido',
          },
          {
            name: 'OpenSea',
            className: 'bg-discover-opensea',
          },
          {
            name: 'Paraswap',
            className: 'bg-discover-paraswap',
          },
          {
            name: 'Rarible',
            className: 'bg-discover-rarible',
          },
          {
            name: 'Zerion',
            className: 'bg-discover-zerion',
          },
          {
            name: 'Bitrefill',
            className: 'bg-discover-bitrefill',
          },
          {
            name: 'Loopipay Blue',
            className: 'bg-discover-loopipay-blue',
          },
          {
            name: 'Loopipay Black',
            className: 'bg-discover-loopipay-black',
          },
          {
            name: 'Loopipay Lime',
            className: 'bg-discover-loopipay-lime',
          },
          {
            name: 'Simplex',
            className: 'bg-discover-simplex',
          },
          {
            name: 'Baanx',
            className: 'bg-discover-baanx',
          },
          {
            name: 'Mercuryo',
            className: 'bg-discover-mercuryo',
          },
          {
            name: 'Juno',
            className: 'bg-discover-juno',
          },
          {
            name: 'Sardine',
            className: 'bg-discover-sardine',
          },
        ]}
      />
    </div>
  ),
};
