import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery, IconItem } from '@storybook/addon-docs/blocks';
import { IconSize } from './Icon';
import * as Icons from '../../Symbols';

const meta: Meta = {
  title: 'Symbols/React/IconGallery',
  tags: ['autodocs'],
  globals: {
    backgrounds: { value: 'var(--background-canvas-sheet)', grid: false },
  },
  parameters: {
    docs: {
      page: () => (
        <IconGallery>
          {Object.entries(Icons).map(([name, IconComponent]) => (
            <IconItem key={name} name={name}>
              <IconComponent size={24} />
            </IconItem>
          ))}
        </IconGallery>
      ),
    },
  },
};

export default meta;

const sizes: IconSize[] = [16, 20, 24, 40, 48];

export const IconSizes: StoryObj = {
  render: () => (
    <div className="space-y-16 text-base">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="font-semibold mb-16 heading-3">Size {size}px</h3>
          <div className="border flex max-w-fit flex-wrap gap-16 rounded-lg border-1 border-muted-subtle p-16">
            {[
              'Home',
              'Settings',
              'Heart',
              'Star',
              'ArrowDown',
              'ArrowLeft',
              'ArrowRight',
              'ArrowUp',
            ].map((iconName) => {
              const IconComponent = Icons[iconName as keyof typeof Icons];
              if (!IconComponent) return null;

              return (
                <div key={iconName} className="flex flex-col items-center p-2">
                  <IconComponent size={size} />
                  <span className="mt-1 text-muted body-4">{iconName}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ),
};
