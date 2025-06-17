import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery, IconItem } from '@storybook/blocks';
import * as Icons from '../../Symbols';

const meta: Meta = {
  title: 'React/Symbols/IconGallery',
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

export const IconSizes: StoryObj = {
  render: () => (
    <div className="space-y-6">
      {[16, 20, 24, 40, 48].map((size) => (
        <div key={size}>
          <h3 className="text-lg font-semibold mb-4">Size {size}px</h3>
          <div className="flex flex-wrap gap-4">
            {['ArrowUp', 'Home', 'Settings', 'Heart', 'Star'].map(
              (iconName) => {
                const IconComponent = Icons[iconName as keyof typeof Icons];
                if (!IconComponent) return null;

                return (
                  <div
                    key={iconName}
                    className="flex flex-col items-center p-2"
                  >
                    <IconComponent size={size as 16 | 20 | 24 | 40 | 48} />
                    <span className="text-xs mt-1">{iconName}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};
