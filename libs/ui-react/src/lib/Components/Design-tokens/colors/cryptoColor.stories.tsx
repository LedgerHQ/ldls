import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader, ColorSection } from '../shared';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Colors/Crypto background',
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

export const Crypto: Story = {
  name: 'Crypto background',
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Crypto Colors Tokens"
        description="Crypto colors tokens for different cryptocurrencies"
      />
      <ColorSection
        category="background"
        tokens={[
          { name: 'Aion', className: 'bg-crypto-aion' },
          {
            name: 'Algorand',
            className: 'bg-crypto-algorand',
          },
          {
            name: 'Avalanche',
            className: 'bg-crypto-avax',
          },
          { name: 'BAT', className: 'bg-crypto-bat' },
          { name: 'BGB', className: 'bg-crypto-bgb' },
          {
            name: 'Bitcoin',
            className: 'bg-crypto-bitcoin',
          },
          {
            name: 'Bitcoin Cash',
            className: 'bg-crypto-bitcoin-cash',
          },
          {
            name: 'Bitcoin Gold',
            className: 'bg-crypto-bitcoin-gold',
          },
          {
            name: 'Bitcoin SV',
            className: 'bg-crypto-bitcoin-sv',
          },
          {
            name: 'Binance',
            className: 'bg-crypto-binance',
          },
          {
            name: 'Bytecoin',
            className: 'bg-crypto-bytecoin',
          },
          {
            name: 'Cardano',
            className: 'bg-crypto-cardano',
          },
          {
            name: 'Cosmos',
            className: 'bg-crypto-cosmos',
          },
          {
            name: 'Compound',
            className: 'bg-crypto-compound',
          },
          {
            name: 'Celo',
            className: 'bg-crypto-celo',
            textClassName: 'text-black',
          },
          {
            name: 'Chainlink',
            className: 'bg-crypto-chainlink',
          },
          { name: 'CRO', className: 'bg-crypto-cro' },
          { name: 'Dash', className: 'bg-crypto-dash' },
          { name: 'DAI', className: 'bg-crypto-dai' },
          {
            name: 'Decred',
            className: 'bg-crypto-decred',
          },
          {
            name: 'Digibyte',
            className: 'bg-crypto-digibyte',
          },
          {
            name: 'Dogecoin',
            className: 'bg-crypto-dogecoin',
          },
          { name: 'dYdX', className: 'bg-crypto-dydx' },
          {
            name: 'Dymension',
            className: 'bg-crypto-dym',
            textClassName: 'text-black',
          },
          {
            name: 'Elrond',
            className: 'bg-crypto-elrond',
          },
          { name: 'Enigma', className: 'bg-crypto-eng' },
          { name: 'EOS', className: 'bg-crypto-eos' },
          {
            name: 'EtherGem',
            className: 'bg-crypto-ethergem',
          },
          {
            name: 'Ethereum',
            className: 'bg-crypto-ethereum',
          },
          {
            name: 'Ethereum Classic',
            className: 'bg-crypto-ethereum-classic',
          },
          { name: 'Flare', className: 'bg-crypto-flr' },
          { name: 'Fantom', className: 'bg-crypto-ftm' },
          {
            name: 'Hedera',
            className: 'bg-crypto-hedera',
          },
          { name: 'Helium', className: 'bg-crypto-hnt' },
          { name: 'Huobi', className: 'bg-crypto-huobi' },
          { name: 'IOTA', className: 'bg-crypto-iota' },
          {
            name: 'Komodo',
            className: 'bg-crypto-komodo',
          },
          { name: 'LEO', className: 'bg-crypto-leo' },
          {
            name: 'Litecoin',
            className: 'bg-crypto-litecoin',
          },
          {
            name: 'Monero',
            className: 'bg-crypto-monero',
          },
          {
            name: 'MultiversX',
            className: 'bg-crypto-multiverse-x',
          },
          { name: 'Nano', className: 'bg-crypto-nano' },
          { name: 'Near', className: 'bg-crypto-near' },
          { name: 'NEO', className: 'bg-crypto-neo' },
          { name: 'Nimiq', className: 'bg-crypto-nimiq' },
          {
            name: 'OMG Network',
            className: 'bg-crypto-omg-network',
          },
          { name: 'OKB', className: 'bg-crypto-okb' },
          {
            name: 'Osmosis',
            className: 'bg-crypto-osmo',
          },
          {
            name: 'Peercoin',
            className: 'bg-crypto-peercoin',
          },
          { name: 'Pirl', className: 'bg-crypto-pirl' },
          { name: 'PIVX', className: 'bg-crypto-pivx' },
          {
            name: 'Polkadot',
            className: 'bg-crypto-polkadot',
          },
          {
            name: 'Polygon',
            className: 'bg-crypto-polygon',
          },
          { name: 'Sats', className: 'bg-crypto-sats' },
          {
            name: 'Stellar',
            className: 'bg-crypto-stellar',
          },
          {
            name: 'Solana',
            className: 'bg-crypto-sol',
            textClassName: 'text-base',
          },
          {
            name: 'USDT',
            className: 'bg-crypto-tether-usdt',
          },
          { name: 'Tezos', className: 'bg-crypto-tezos' },
          { name: 'TKX', className: 'bg-crypto-tkx' },
          { name: 'Tron', className: 'bg-crypto-tron' },
          {
            name: 'Uniswap',
            className: 'bg-crypto-uniswap',
          },
          {
            name: 'TrueUSD',
            className: 'bg-crypto-tusd',
          },
          {
            name: 'USDC',
            className: 'bg-crypto-usdc',
            textClassName: 'text-base',
          },
          { name: 'UNI', className: 'bg-crypto-uni' },
          { name: 'Waves', className: 'bg-crypto-waves' },
          { name: 'XRP', className: 'bg-crypto-xrp' },
          { name: 'Mixin', className: 'bg-crypto-xin' },
          {
            name: 'Yieldly',
            className: 'bg-crypto-yieldly',
          },
          { name: 'Zcash', className: 'bg-crypto-zcash' },
        ]}
      />
    </div>
  ),
};
