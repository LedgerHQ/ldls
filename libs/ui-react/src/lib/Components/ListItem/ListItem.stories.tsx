import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';
import { Tag } from '../Tag/Tag';
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
import { Switch } from '../Switch';
import { cn } from '@ldls/utils-shared';

const Balance = ({ disabled }: { disabled?: boolean }) => {
  return (
    <div className="text-right">
      <div className="body-2-semi-bold">42.00</div>
      <div className={cn('text-muted body-3', disabled && 'text-disabled')}>
        USD
      </div>
    </div>
  );
};

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'Components/ListItem/Overview',
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
    descriptionTagProps: {
      control: 'object',
      if: { arg: 'description', exists: true },
    },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Settings', 'Plus'],
      mapping: {
        None: undefined,
        Settings: Settings,
        Plus: Plus,
      },
      description: 'Optional leading icon',
    },
    trailingContent: {
      control: false,
      description: 'Optional trailing content to display on the right side',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Base: Story = {
  args: {
    title: 'Item with Icon and Description',
    leadingIcon: Settings,
    description: 'Additional information',
    className: 'max-w-320',
  },
};

export const WithDescriptionTag: Story = {
  args: {
    title: 'Item with Description Tag',
    leadingIcon: Settings,
    description: 'Additional information',
    descriptionTagProps: { label: 'New', appearance: 'accent', icon: Bolt },
    className: 'max-w-320',
  },
};

export const TrailingContentVariantsShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex max-w-256 flex-col">
        <ListItem
          title="Caret Variant"
          description="With description"
          leadingIcon={User}
          trailingContent={<ChevronRight size={24} />}
        />
        <ListItem
          title="Switch Variant"
          description="With description"
          leadingIcon={Wallet}
          onClick={() => setSelected(!selected)}
          trailingContent={<Switch tabIndex={-1} selected={selected} />}
        />
        <ListItem
          title="Value Variant"
          description="With description"
          leadingIcon={Cart}
          trailingContent={<Balance />}
        />
        <ListItem
          title="Tag Variant"
          description="With description"
          leadingIcon={Apps}
          trailingContent={<Tag label="New" appearance="accent" />}
        />
        <ListItem
          title="Icon Variant"
          description="With description"
          leadingIcon={Settings}
          trailingContent={<PenEdit size={24} />}
        />
        <ListItem
          title="None Variant"
          description="With description"
          leadingIcon={Chart1}
        />
      </div>
    );
  },
};

export const StateShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-32">
        <div className="flex max-w-256 flex-col">
          <ListItem
            title="Caret Variant"
            description="With description"
            leadingIcon={User}
            trailingContent={<ChevronRight size={24} className="text-muted" />}
          />
          <ListItem
            title="Switch Variant"
            description="With description"
            leadingIcon={Wallet}
            onClick={() => setSelected(!selected)}
            trailingContent={<Switch selected={selected} />}
          />
          <ListItem
            title="Value Variant"
            description="With description"
            leadingIcon={Cart}
            trailingContent={<Balance />}
          />
          <ListItem
            title="Tag Variant"
            description="With description"
            leadingIcon={Apps}
            trailingContent={<Tag label="New" appearance="accent" />}
          />
          <ListItem
            title="Icon Variant"
            description="With description"
            leadingIcon={Settings}
            trailingContent={<PenEdit size={24} />}
          />
          <ListItem
            title="None Variant"
            description="With description"
            leadingIcon={Chart1}
          />
        </div>
        <div className="flex max-w-256 flex-col">
          <ListItem
            title="Caret Variant"
            description="With description"
            leadingIcon={User}
            disabled
            trailingContent={
              <ChevronRight size={24} className="text-disabled" />
            }
          />
          <ListItem
            title="Switch Variant"
            description="With description"
            leadingIcon={Wallet}
            onClick={() => setSelected(!selected)}
            disabled
            trailingContent={<Switch selected={selected} disabled />}
          />
          <ListItem
            title="Value Variant"
            description="With description"
            leadingIcon={Cart}
            disabled
            trailingContent={<Balance disabled />}
          />
          <ListItem
            title="Tag Variant"
            description="With description"
            leadingIcon={Apps}
            disabled
            trailingContent={
              <Tag
                label="New"
                appearance="accent"
                className="!bg-muted-transparent !text-disabled"
              />
            }
          />
          <ListItem
            title="Icon Variant"
            description="With description"
            leadingIcon={Settings}
            disabled
            trailingContent={<PenEdit size={24} className="text-disabled" />}
          />
          <ListItem
            title="None Variant"
            description="With description"
            leadingIcon={Chart1}
            disabled
          />
        </div>
      </div>
    );
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid w-320 grid-cols-1 gap-16 bg-muted-pressed p-16">
      <div className="text-muted body-4-semi-bold">Container: 320px wide</div>
      <div>
        <ListItem
          title="Short Title"
          description="Short description"
          leadingIcon={Plus}
          trailingContent={<ChevronRight size={24} className="text-muted" />}
        />
        <ListItem
          title="Long Title that should truncate appropriately"
          description="Long description that should truncate appropriately"
          leadingIcon={Plus}
          trailingContent={<ChevronRight size={24} className="text-muted" />}
        />
        <ListItem
          title="Long Title that should truncate appropriately"
          description="Long description that should truncate appropriately"
          descriptionTagProps={{ label: 'New', appearance: 'accent' }}
          leadingIcon={Plus}
          trailingContent={<ChevronRight size={24} className="text-muted" />}
        />
      </div>
    </div>
  ),
};
