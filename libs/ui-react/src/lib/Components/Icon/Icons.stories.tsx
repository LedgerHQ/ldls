import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSize } from './Icon';
import * as Icons from '../../Symbols';
import { useState } from 'react';

const meta: Meta = {
  title: 'Symbols/Interface Icons/React',
};

export default meta;

const sizes: IconSize[] = [16, 20, 24, 40, 48, 56];

type IconName = keyof typeof Icons;
const iconNames = Object.keys(Icons) as IconName[];

interface IconStoryProps {
  size: IconSize;
  name: IconName;
  className?: string;
}

interface IconCardProps {
  name: string;
  size?: IconSize;
  className?: string;
}

const IconCard = ({
  name,
  size = 24,
  className = 'text-base',
}: IconCardProps) => {
  const [copied, setCopied] = useState(false);
  const IconComponent = Icons[name as keyof typeof Icons];

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      key={name}
      className="relative flex cursor-pointer flex-col items-center gap-2 rounded-lg p-4 transition-colors hover:bg-muted-pressed"
      onClick={handleClick}
    >
      <IconComponent size={size} className={className} />
      <span className="text-muted body-4">{name}</span>
      {copied && (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-muted">
          <span className="text-accent body-4">Copied!</span>
        </div>
      )}
    </div>
  );
};

export const Icon: StoryObj<IconStoryProps> = {
  args: {
    size: 24,
    name: 'Home',
    className: 'text-base',
  },
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      description: 'The size of the icon in pixels',
    },
    name: {
      control: 'select',
      options: iconNames,
      description: 'The name of the icon to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply (can be used for color)',
    },
  },
  render: (args) => {
    const IconComponent = Icons[args.name];
    return (
      <div className="p-8">
        <div className="flex flex-col items-center gap-4">
          <IconComponent size={args.size} className={args.className} />
          <span className="text-base">{args.name}</span>
        </div>
      </div>
    );
  },
};

export const IconSizes: StoryObj = {
  render: () => (
    <div className="space-y-16 text-base">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="font-semibold mb-16 heading-3">Size {size}px</h3>
          <div className="border flex max-w-fit flex-wrap gap-16 rounded-lg border-muted-subtle p-16">
            {[
              'Home',
              'Settings',
              'Heart',
              'Star',
              'ArrowDown',
              'ArrowLeft',
              'ArrowRight',
              'ArrowUp',
            ].map((iconName) => (
              <IconCard key={iconName} name={iconName} size={size} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Gallery: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="p-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-8">
        {Object.entries(Icons).map(([name]) => (
          <IconCard key={name} name={name} />
        ))}
      </div>
    </div>
  ),
};
