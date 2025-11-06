import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { View, Text } from 'react-native';
import {
  Settings,
  Plus,
  User,
  PenEdit,
  Cart,
  Apps,
  Chart1,
  Bolt,
  ChevronRight,
} from '../../Symbols';
import { cn } from '../../utils';
import { Spot } from '../Spot/Spot';
import { Tag } from '../Tag/Tag';
import { ListItem } from './ListItem';

const Balance = ({ disabled }: { disabled?: boolean }) => {
  return (
    <View className='items-end'>
      <View className={cn('body-2-semi-bold', disabled && 'text-disabled')}>
        <Text>42.00</Text>
      </View>
      <View className={cn('text-muted body-3', disabled && 'text-disabled')}>
        <Text>USD</Text>
      </View>
    </View>
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
        Tag: <Tag label='New' appearance='accent' icon={Bolt} size='sm' />,
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
      options: ['icon', 'value', 'tag', 'none'],
      mapping: {
        icon: <PenEdit size={24} />,
        value: <Balance />,
        tag: <Tag label='New' appearance='accent' />,
        none: undefined,
      },
    },
    onPress: {
      action: 'pressed',
      description: 'The function to be called when the list item is pressed',
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
  },
  render: (args) => (
    <View className='max-w-320'>
      <ListItem {...args} />
    </View>
  ),
};

export const TrailingContentVariantsShowcase: Story = {
  render: () => {
    return (
      <View className='flex max-w-256 flex-col'>
        <ListItem
          title='Caret Variant'
          description='With description'
          leadingContent={<Spot appearance='icon' icon={User} />}
          trailingContent={<ChevronRight size={24} />}
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
      </View>
    );
  },
};

export const StateShowcase: Story = {
  render: () => {
    return (
      <View className='flex flex-row gap-32'>
        <View className='flex max-w-256 flex-col'>
          <ListItem
            title='Caret Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={User} />}
            trailingContent={<ChevronRight size={24} className='text-muted' />}
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
        </View>
        <View className='flex max-w-256 flex-col'>
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
                className='bg-muted-transparent! text-disabled!'
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
        </View>
      </View>
    );
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <View className='w-320 bg-muted-pressed p-16'>
      <Text className='mb-16 text-muted body-4-semi-bold'>
        Container: 320px wide
      </Text>
      <View className='flex flex-col gap-0'>
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
      </View>
    </View>
  ),
};
