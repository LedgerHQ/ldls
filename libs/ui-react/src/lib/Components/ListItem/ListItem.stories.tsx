import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';
import {
  Settings,
  Plus,
  Check,
  User,
  PenEdit,
  Wallet,
  Cart,
  Apps,
  Chart1,
  Bolt,
} from '../../Symbols';

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
    trailingContentVariant: {
      control: 'select',
      options: ['caret', 'toggle', 'value', 'tag', 'icon', 'none'],
      description: 'The variant of the trailing content of the list item',
    },
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
    onClick: { action: 'clicked' },
    selected: {
      control: 'boolean',
      if: { arg: 'trailingContentVariant', eq: 'toggle' },
    },
    value: {
      control: 'text',
      if: { arg: 'trailingContentVariant', eq: 'value' },
    },
    subValue: {
      control: 'text',
      if: { arg: 'trailingContentVariant', eq: 'value' },
    },
    tagProps: {
      control: 'object',
      if: { arg: 'trailingContentVariant', eq: 'tag' },
    },
    trailingIcon: {
      control: 'select',
      options: ['None', 'Check'],
      mapping: {
        None: undefined,
        Check: Check,
      },
      if: { arg: 'trailingContentVariant', eq: 'icon' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const OnlyTitle: Story = {
  args: {
    trailingContentVariant: 'none',
    title: 'Only Title',
    className: 'max-w-256',
  },
};

export const WithDescription: Story = {
  args: {
    trailingContentVariant: 'none',
    title: 'Item with Description',
    description: 'Additional information',
    className: 'max-w-256',
  },
};

export const WithDescriptionTag: Story = {
  args: {
    trailingContentVariant: 'none',
    title: 'Item with Description Tag',
    description: 'Additional information',
    descriptionTagProps: { label: 'New', appearance: 'accent', icon: Bolt },
    className: 'max-w-256',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    trailingContentVariant: 'none',
    title: 'Item with Leading Icon',
    leadingIcon: Settings,
    className: 'max-w-256',
  },
};

export const WithLeadingIconAndDescription: Story = {
  args: {
    trailingContentVariant: 'none',
    title: 'Item with Icon and Description',
    leadingIcon: Settings,
    description: 'Additional information',
    className: 'max-w-320',
  },
};

export const TrailingContentVariantsShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex max-w-256 flex-col">
        <ListItem
          trailingContentVariant="caret"
          title="Caret Variant"
          description="With description"
          leadingIcon={User}
        />
        <ListItem
          trailingContentVariant="toggle"
          title="Toggle Variant"
          description="With description"
          leadingIcon={Wallet}
          selected={selected}
          onClick={() => setSelected(!selected)}
        />
        <ListItem
          trailingContentVariant="value"
          title="Value Variant"
          description="With description"
          value="42.00"
          subValue="USD"
          leadingIcon={Cart}
        />
        <ListItem
          trailingContentVariant="tag"
          title="Tag Variant"
          description="With description"
          tagProps={{ label: 'New', appearance: 'accent' }}
          leadingIcon={Apps}
        />
        <ListItem
          trailingContentVariant="icon"
          title="Icon Variant"
          description="With description"
          leadingIcon={Settings}
          trailingIcon={PenEdit}
        />
        <ListItem
          trailingContentVariant="none"
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
            trailingContentVariant="caret"
            title="Caret Variant"
            description="With description"
            leadingIcon={User}
          />
          <ListItem
            trailingContentVariant="toggle"
            title="Toggle Variant"
            description="With description"
            leadingIcon={Wallet}
            selected={selected}
            onClick={() => setSelected(!selected)}
          />
          <ListItem
            trailingContentVariant="value"
            title="Value Variant"
            description="With description"
            value="42.00"
            subValue="USD"
            leadingIcon={Cart}
          />
          <ListItem
            trailingContentVariant="tag"
            title="Tag Variant"
            description="With description"
            tagProps={{ label: 'New', appearance: 'accent' }}
            leadingIcon={Apps}
          />
          <ListItem
            trailingContentVariant="icon"
            title="Icon Variant"
            description="With description"
            leadingIcon={Settings}
            trailingIcon={PenEdit}
          />
          <ListItem
            trailingContentVariant="none"
            title="None Variant"
            description="With description"
            leadingIcon={Chart1}
          />
        </div>
        <div className="flex max-w-256 flex-col">
          <ListItem
            trailingContentVariant="caret"
            title="Caret Variant"
            description="With description"
            leadingIcon={User}
            disabled
          />
          <ListItem
            trailingContentVariant="toggle"
            title="Toggle Variant"
            description="With description"
            leadingIcon={Wallet}
            selected={selected}
            onClick={() => setSelected(!selected)}
            disabled
          />
          <ListItem
            trailingContentVariant="value"
            title="Value Variant"
            description="With description"
            value="42.00"
            subValue="USD"
            leadingIcon={Cart}
            disabled
          />
          <ListItem
            trailingContentVariant="tag"
            title="Tag Variant"
            description="With description"
            tagProps={{ label: 'New', appearance: 'accent' }}
            leadingIcon={Apps}
            disabled
          />
          <ListItem
            trailingContentVariant="icon"
            title="Icon Variant"
            description="With description"
            leadingIcon={Settings}
            trailingIcon={PenEdit}
            disabled
          />
          <ListItem
            trailingContentVariant="none"
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
          trailingContentVariant="caret"
          title="Short Title"
          description="Short description"
          leadingIcon={Plus}
        />
        <ListItem
          trailingContentVariant="caret"
          title="Long Title that should truncate appropriately"
          description="Long description that should truncate appropriately"
          leadingIcon={Plus}
        />
        <ListItem
          trailingContentVariant="caret"
          title="Long Title that should truncate appropriately"
          description="Long description that should truncate appropriately"
          descriptionTagProps={{ label: 'New', appearance: 'accent' }}
          leadingIcon={Plus}
        />
      </div>
    </div>
  ),
};
