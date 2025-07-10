import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Dimensions/Size',
};

export default meta;
type Story = StoryObj;

const SizeShowcase = () => (
  <div className="mb-32">
    <div className="grid grid-cols-4 gap-24">
      {[
        { value: '208', token: 'size-208' },
        { value: '176', token: 'size-176' },
        { value: '144', token: 'size-144' },
        { value: '128', token: 'size-128' },
        { value: '112', token: 'size-112' },
        { value: '96', token: 'size-96' },
        { value: '80', token: 'size-80' },
        { value: '64', token: 'size-64' },
        { value: '48', token: 'size-48' },
        { value: '40', token: 'size-40' },
        { value: '32', token: 'size-32' },
        { value: '24', token: 'size-24' },
        { value: '20', token: 'size-20' },
        { value: '16', token: 'size-16' },
        { value: '12', token: 'size-12' },
        { value: '8', token: 'size-8' },
        { value: '6', token: 'size-6' },
        { value: '4', token: 'size-4' },
        { value: '2', token: 'size-2' },
        { value: '1', token: 'size-1' },
      ].map(({ value, token }) => (
        <div key={value} className="flex flex-col items-center gap-8">
          <div className="text-muted body-4">{token}</div>
          <div
            className={`${token} flex items-center justify-center bg-accent text-white body-4`}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

export const Size: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Size Tokens"
        description="Size tokens define fixed dimensions that can be used for both width and height, ensuring consistent element sizing across the design system."
      />
      <SizeShowcase />
    </div>
  ),
};
