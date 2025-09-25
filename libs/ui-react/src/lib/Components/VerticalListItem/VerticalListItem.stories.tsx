import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VerticalListItem } from './VerticalListItem';
import { Spot } from '../Spot/Spot';
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
import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';

const secondaryAction = (
  <IconButton
    iconType='stroked'
    aria-label='More actions'
    onClick={() => console.log('secondary action clicked')}
  >
    <MoreVertical />
  </IconButton>
);

const meta: Meta<typeof VerticalListItem> = {
  component: VerticalListItem,
  title: 'Containment/VerticalListItem',
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
    title: {
      control: 'text',
      description: 'The main title of the list item',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle',
    },
    spot: {
      control: 'select',
      options: ['None', 'Settings', 'Plus'],
      mapping: {
        None: undefined,
        Settings: <Spot appearance='icon' icon={Settings} />,
        Plus: <Spot appearance='icon' icon={Plus} />,
      },
      description: 'The spot component to display',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the item is clicked',
    },
    secondaryAction: {
      control: 'select',
      options: ['None', 'MoreVertical'],
      mapping: {
        None: undefined,
        MoreVertical: secondaryAction,
      },
      description: 'Function called when the more actions button is clicked',
    },
    tag: {
      control: 'select',
      options: ['None', 'Base', 'Success', 'Error'],
      mapping: {
        None: undefined,
        Base: <Tag label='Tag' appearance='base' />,
        Success: <Tag label='Tag' appearance='success' />,
        Error: <Tag label='Tag' appearance='error' />,
      },
      description: 'The tag to display at the bottom',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalListItem>;

export const Base: Story = {
  args: {
    title: 'Item with Spot and Subtitle',
    subtitle: 'Additional information',
    spot: <Spot appearance='icon' icon={Settings} />,
    className: 'max-w-256',
    secondaryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `
<VerticalListItem
  title="Item with Spot and Subtitle"
  subtitle="Additional information"
  spot={<Spot appearance="icon" icon={Settings} />}
  secondaryAction={(
    <IconButton
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </IconButton>
  )}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'Item without Subtitle',
    spot: <Spot appearance='icon' icon={Plus} />,
    className: 'max-w-256',
    secondaryAction,
  },
  parameters: {
    docs: {
      source: {
        code: `
<VerticalListItem
  title="Item without Subtitle"
  spot={<Spot appearance="icon" icon={Plus} />}
  secondaryAction={(
    <IconButton
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </IconButton>
  )}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const WithTag: Story = {
  args: {
    title: 'Item with Tag',
    subtitle: 'Additional information',
    spot: <Spot appearance='icon' icon={Settings} />,
    tag: <Tag label='New' appearance='base' />,
    secondaryAction,
    className: 'max-w-256',
  },
  parameters: {
    docs: {
      source: {
        code: `
<VerticalListItem
  title="Item with Tag"
  subtitle="Additional information"
  spot={<Spot appearance="icon" icon={Settings} />}
  tag={<Tag label="New" appearance="base" />}
  secondaryAction={(
    <IconButton
      iconType="stroked"
      aria-label="More actions"
      onClick={() => console.log('secondary action clicked')}
    >
      <MoreVertical />
    </IconButton>
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
    subtitle: 'Additional information',
    spot: <Spot appearance='icon' icon={Settings} />,
    className: 'max-w-256',
  },
  parameters: {
    docs: {
      source: {
        code: `
<VerticalListItem
  title="Item without secondary action"
  subtitle="Additional information"
  spot={<Spot appearance="icon" icon={Settings} />}
  className="max-w-256"
/>
`,
      },
    },
  },
};

export const SpotVariantsShowcase: Story = {
  render: () => (
    <div className='flex'>
      <VerticalListItem
        title='User'
        subtitle='With subtitle'
        spot={<Spot appearance='icon' icon={User} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <VerticalListItem
        title='Wallet'
        subtitle='With subtitle'
        spot={<Spot appearance='icon' icon={Wallet} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <VerticalListItem
        title='Cart'
        subtitle='With subtitle'
        spot={<Spot appearance='icon' icon={Cart} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <VerticalListItem
        title='Apps'
        subtitle='With subtitle'
        spot={<Spot appearance='icon' icon={Apps} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
      <VerticalListItem
        title='Chart'
        subtitle='With subtitle'
        spot={<Spot appearance='icon' icon={Chart1} />}
        secondaryAction={secondaryAction}
        className='max-w-128'
      />
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='grid w-256 grid-cols-1 gap-16 bg-base p-16'>
      <div className='text-muted body-4-semi-bold'>Container: 256px wide</div>
      <div>
        <VerticalListItem
          title='Short Title'
          subtitle='Short subtitle'
          spot={<Spot appearance='icon' icon={Plus} />}
          secondaryAction={secondaryAction}
        />
        <VerticalListItem
          title='Long Title that should truncate appropriately'
          subtitle='Long subtitle that should truncate appropriately'
          spot={<Spot appearance='icon' icon={Plus} />}
          secondaryAction={secondaryAction}
        />
      </div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className='flex flex-col gap-16'>
      <div className='flex w-[450px] rounded-sm bg-base'>
        {Array.from({ length: 3 }).map((_, i) => (
          <VerticalListItem
            key={`list-1-${i}`}
            title={`Item ${i + 1}`}
            subtitle={`Subtitle ${i + 1}`}
            spot={<Spot appearance='icon' icon={Apps} />}
            secondaryAction={secondaryAction}
          />
        ))}
      </div>
      <div className='flex w-[450px] overflow-x-auto rounded-sm bg-base'>
        {Array.from({ length: 5 }).map((_, i) => (
          <VerticalListItem
            key={`list-2-${i}`}
            title={
              i === 0
                ? 'Long Title that should truncate appropriately'
                : `Item ${i + 1}`
            }
            subtitle={
              i === 0
                ? 'Long subtitle that should truncate appropriately'
                : `Subtitle ${i + 1}`
            }
            spot={<Spot appearance='icon' icon={Apps} />}
            secondaryAction={secondaryAction}
            className='w-128 shrink-0'
          />
        ))}
      </div>
    </div>
  ),
};
