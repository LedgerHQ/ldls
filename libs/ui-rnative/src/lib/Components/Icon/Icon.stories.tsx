import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import * as Icons from '../../Symbols';
import { IconSize } from './Icon.types';

const meta: Meta = {
  title: 'Symbols/Interface Icons',
};

export default meta;

const sizes: IconSize[] = [12, 16, 20, 24, 40, 48, 56];

type IconName = keyof typeof Icons;
const iconNames = Object.keys(Icons) as IconName[];

type IconStoryProps = {
  size: IconSize;
  name: IconName;
  className?: string;
};

type IconCardProps = {
  name: string;
  size?: IconSize;
  className?: string;
};

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
      className='hover:bg-muted-pressed relative flex cursor-pointer flex-col items-center gap-2 rounded-lg p-4 transition-colors'
      onClick={handleClick}
    >
      <IconComponent size={size} className={className} />
      <span className='text-muted body-4'>{name}</span>
      {copied && (
        <div className='bg-muted absolute inset-0 flex items-center justify-center rounded-lg'>
          <span className='text-on-accent body-4'>Copied!</span>
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
      <div className='p-8'>
        <div className='flex flex-col items-center gap-4'>
          <IconComponent size={args.size} className={args.className} />
          <span className='text-base'>{args.name}</span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Information size={24} className="text-base" />
      `,
      },
    },
  },
};

export const IconSizes: StoryObj = {
  render: () => (
    <div className='space-y-16 text-base'>
      {sizes.map((size) => (
        <div key={size}>
          <h3 className='heading-3 mb-16'>Size {size}px</h3>
          <div className='border-muted-subtle flex max-w-fit flex-wrap gap-16 rounded-lg border p-16'>
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
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter icons based on search term
    const filteredIcons = Object.entries(Icons).filter(([name]) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <div className='p-8'>
        {/* Search bar */}
        <div className='mb-32'>
          <div className='mb-8 max-w-md'>
            {/* TODO: Replace with Search component */}
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search icons...'
              className='border-muted-subtle w-full rounded border p-2'
            />
          </div>

          {/* Results count */}
          <div className='mb-4'>
            <span className='text-muted body-3 ml-8'>
              {filteredIcons.length} of {Object.keys(Icons).length} icons
              {searchTerm && ` matching "${searchTerm}"`}
            </span>
          </div>
        </div>

        {/* Icon grid */}
        <div className='grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-8'>
          {filteredIcons.map(([name]) => (
            <IconCard key={name} name={name} />
          ))}
        </div>

        {/* No results message */}
        {filteredIcons.length === 0 && searchTerm && (
          <div className='flex flex-col items-center justify-center py-16'>
            <p className='text-muted body-2'>
              No icons found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className='text-interactive body-2 hover:text-interactive-hover mt-4'
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    );
  },
};
