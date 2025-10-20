import { cn } from '@ledgerhq/ldls-utils-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  Settings,
  Plus,
  User,
  PenEdit,
  Wallet,
  Cart,
  Apps,
  Chart1,
  Bolt,
  ChevronRight,
} from '../../Symbols';
import { Spot } from '../Spot/Spot';
import { Switch } from '../Switch';
import { Tag } from '../Tag/Tag';
import { ListItem } from './ListItem';

const Balance = ({ disabled }: { disabled?: boolean }) => {
  return (
    <div className='flex flex-col items-end justify-center gap-4'>
      <div className='body-2-semi-bold'>42.00</div>
      <div className={cn('text-muted body-3', disabled && 'text-disabled')}>
        USD
      </div>
    </div>
  );
};

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'Containment/ListItem',
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
    description: {
      control: 'text',
      description: 'Optional description',
    },
    descriptionTag: {
      control: 'select',
      options: ['None', 'Tag'],
      mapping: {
        None: undefined,
        Tag: <Tag label='New' appearance='base' icon={Bolt} size='sm' />,
      },
      if: { arg: 'description', exists: true },
    },
    leadingContent: {
      control: 'select',
      options: ['None', 'Settings', 'Plus'],
      mapping: {
        None: undefined,
        Settings: <Spot appearance='icon' icon={Settings} />,
        Plus: <Spot appearance='icon' icon={Plus} />,
      },
      description: 'Optional leading content',
    },
    trailingContent: {
      control: 'select',
      description: 'Optional trailing content to display on the right side',
      options: ['icon', 'switch', 'value', 'tag', 'none'],
      mapping: {
        icon: <PenEdit size={24} />,
        switch: <Switch selected={false} />,
        value: <Balance />,
        tag: <Tag label='New' appearance='base' />,
        none: undefined,
      },
    },
    onClick: {
      action: 'clicked',
      description: 'The function to be called when the list item is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Base: Story = {
  args: {
    title: 'Item with Icon and Description',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    description: 'Additional information',
    className: 'max-w-320',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ListItem
  title="Item with Icon and Description"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  description="Additional information"
/>
`,
      },
    },
  },
};

export const WithDescriptionTag: Story = {
  args: {
    title: 'Item with Description Tag',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    description: 'Additional information',
    descriptionTag: (
      <Tag label='New' appearance='accent' icon={Bolt} size='sm' />
    ),
    className: 'max-w-320',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ListItem
  title="Item with Description Tag"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  description="Additional information"
  descriptionTag={<Tag label="New" appearance="accent" icon={Bolt} size="sm" />}
/>

`,
      },
    },
  },
};

export const TrailingContentVariantsShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className='flex max-w-256 flex-col'>
        <ListItem
          title='Caret Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={User} />}
          trailingContent={<ChevronRight size={24} />}
        />
        <ListItem
          title='Switch Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={Wallet} />}
          onClick={() => setSelected(!selected)}
          trailingContent={<Switch tabIndex={-1} selected={selected} />}
        />
        <ListItem
          title='Value Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={Cart} />}
          trailingContent={<Balance />}
        />
        <ListItem
          title='Tag Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={Apps} />}
          trailingContent={<Tag label='New' appearance='accent' />}
        />
        <ListItem
          title='Icon Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={Settings} />}
          trailingContent={<PenEdit size={24} />}
        />
        <ListItem
          title='None Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={Chart1} />}
        />
      </div>
    );
  },
};

export const StateShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className='flex gap-32'>
        <div className='flex max-w-256 flex-col'>
          <ListItem
            title='Caret Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={User} />}
            trailingContent={<ChevronRight size={24} className='text-muted' />}
          />
          <ListItem
            title='Switch Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Wallet} />}
            onClick={() => setSelected(!selected)}
            trailingContent={<Switch selected={selected} />}
          />
          <ListItem
            title='Value Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Cart} />}
            trailingContent={<Balance />}
          />
          <ListItem
            title='Tag Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Apps} />}
            trailingContent={<Tag label='New' appearance='accent' />}
          />
          <ListItem
            title='Icon Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Settings} />}
            trailingContent={<PenEdit size={24} />}
          />
          <ListItem
            title='None Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Chart1} />}
          />
        </div>
        <div className='flex max-w-256 flex-col'>
          <ListItem
            title='Caret Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={User} disabled />}
            disabled
            trailingContent={
              <ChevronRight size={24} className='text-disabled' />
            }
          />
          <ListItem
            title='Switch Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Wallet} disabled />}
            onClick={() => setSelected(!selected)}
            disabled
            trailingContent={<Switch selected={selected} disabled />}
          />
          <ListItem
            title='Value Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Cart} disabled />}
            disabled
            trailingContent={<Balance disabled />}
          />
          <ListItem
            title='Tag Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Apps} disabled />}
            disabled
            trailingContent={
              <Tag
                label='New'
                appearance='accent'
                className='!bg-muted-transparent !text-disabled'
              />
            }
          />
          <ListItem
            title='Icon Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Settings} disabled />}
            disabled
            trailingContent={<PenEdit size={24} className='text-disabled' />}
          />
          <ListItem
            title='None Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Chart1} disabled />}
            disabled
          />
        </div>
      </div>
    );
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='grid w-320 grid-cols-1 gap-16 bg-muted-pressed p-16'>
      <div className='text-muted body-4-semi-bold'>Container: 320px wide</div>
      <div>
        <ListItem
          title='Short Title'
          description='Short description'
          leadingContent={<Spot appearance='icon' icon={Plus} />}
          trailingContent={<ChevronRight size={24} className='text-muted' />}
        />
        <ListItem
          title='Long Title that should truncate appropriately'
          description='Long description that should truncate appropriately'
          leadingContent={<Spot appearance='icon' icon={Plus} />}
          trailingContent={<ChevronRight size={24} className='text-muted' />}
        />
        <ListItem
          title='Long Title that should truncate appropriately'
          description='Long description that should truncate appropriately'
          descriptionTag={<Tag label='New' appearance='accent' size='sm' />}
          leadingContent={<Spot appearance='icon' icon={Plus} />}
          trailingContent={<ChevronRight size={24} className='text-muted' />}
        />
      </div>
    </div>
  ),
};
