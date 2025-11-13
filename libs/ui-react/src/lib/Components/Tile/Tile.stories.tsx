import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Settings,
  Plus,
  User,
  Wallet,
  Cart,
  Apps,
  Chart1,
  MoreVertical,
} from '../../Symbols';
import { InteractiveIcon } from '../InteractiveIcon';
import { Spot } from '../Spot/Spot';
import { Tag } from '../Tag/Tag';
import { Tile } from './Tile';

const secondaryAction = (
  <InteractiveIcon
    iconType='stroked'
    aria-label='More actions'
    onClick={() => console.log('secondary action clicked')}
  >
    <MoreVertical />
  </InteractiveIcon>
);

const meta: Meta<typeof Tile> = {
  component: Tile,
  title: 'Containment/Tile',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    leadingContent: {
      control: 'select',
      options: ['None', 'Settings', 'Plus'],
      mapping: {
        None: undefined,
        Settings: <Spot appearance='icon' icon={Settings} />,
        Plus: <Spot appearance='icon' icon={Plus} />,
      },
    },
    onClick: {
      action: 'clicked',
    },
    secondaryAction: {
      control: 'select',
      options: ['None', 'MoreVertical'],
      mapping: {
        None: undefined,
        MoreVertical: secondaryAction,
      },
    },
    trailingContent: {
      control: 'select',
      options: ['None', 'Tag', 'Text'],
      mapping: {
        None: undefined,
        Tag: <Tag label='Tag' appearance='base' />,
        Text: <span>Text</span>,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Base: Story = {
  args: {
    title: 'Item with Spot and Description',
    description: 'Additional information',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    className: 'max-w-256',
    secondaryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item with Spot and Description"
  description="Additional information"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  secondaryAction={(
    <InteractiveIcon
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </InteractiveIcon>
  )}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const Withoutdescription: Story = {
  args: {
    title: 'Item without Description',
    leadingContent: <Spot appearance='icon' icon={Plus} />,
    className: 'max-w-256',
    secondaryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item without Description"
  leadingContent={<Spot appearance="icon" icon={Plus} />}
  secondaryAction={(
    <InteractiveIcon
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </InteractiveIcon>
  )}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const WithTrailingContent: Story = {
  args: {
    title: 'Item with Trailing Content',
    description: 'Additional information',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    trailingContent: <Tag label='New' appearance='base' />,
    secondaryAction,
    className: 'max-w-256',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item with Trailing Content"
  description="Additional information"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  trailingContent={<Tag label="New" appearance="base" />}
  secondaryAction={(
    <InteractiveIcon
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </InteractiveIcon>
  )}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const WithoutSecondaryAction: Story = {
  args: {
    title: 'Item without secondary action',
    description: 'Additional information',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    className: 'max-w-256',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item without secondary action"
  description="Additional information"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const LeadingContentVariantsShowcase: Story = {
  render: () => (
    <div className='flex'>
      <Tile
        title='User'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={User} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <Tile
        title='Wallet'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Wallet} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <Tile
        title='Cart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Cart} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <Tile
        title='Apps'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Apps} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <Tile
        title='Chart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Chart1} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
    </div>
  ),
};

export const HorizontalList: Story = {
  render: () => (
    <div className='flex flex-col gap-16'>
      <div className='flex w-[450px] bg-base'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Tile
            key={`list-1-${i}`}
            title={`Item ${i + 1}`}
            description={`Description ${i + 1}`}
            leadingContent={<Spot appearance='icon' icon={Apps} />}
            secondaryAction={secondaryAction}
          />
        ))}
      </div>
      <div className='flex w-[450px] overflow-x-auto bg-base'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile
            key={`list-2-${i}`}
            title={
              i === 0
                ? 'Long Title that should truncate appropriately'
                : `Item ${i + 1}`
            }
            description={
              i === 0
                ? 'Long description that should truncate appropriately'
                : `Description ${i + 1}`
            }
            leadingContent={<Spot appearance='icon' icon={Apps} />}
            secondaryAction={secondaryAction}
            className='w-128 shrink-0'
          />
        ))}
      </div>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='flex w-full flex-col gap-16'>
      <div>
        <Tile
          title='Item fill width'
          description='Description fill width'
          leadingContent={<Spot appearance='icon' icon={Apps} />}
        />
      </div>
      <div className='flex items-center justify-center'>
        <Tile
          className='w-224'
          title='Long Item with fixed width'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          leadingContent={<Spot appearance='icon' icon={Plus} />}
        />
      </div>
    </div>
  ),
};
