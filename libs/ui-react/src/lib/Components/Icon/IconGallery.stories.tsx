import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { IconSize } from './Icon';
import * as Icons from '../../Symbols';

const meta: Meta = {
  title: 'Symbols/React/IconGallery',
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
    <div className="space-y-16">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="heading-3 font-semibold mb-16">Size {size}px</h3>
          <div className="flex flex-wrap gap-16 border border-1 border-muted-subtle rounded-lg p-16 min-w-min">
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
                  <span className="body-4 text-muted mt-1">{iconName}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ),
};
