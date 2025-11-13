import type { Meta, StoryObj } from '@storybook/react-vite';
import { View } from 'react-native';
import {
  Settings,
  Plus,
  User,
  Wallet,
  Cart,
  Apps,
  Chart1,
} from '../../Symbols';
import { Spot } from '../Spot/Spot';
import { Tag } from '../Tag/Tag';
import { Tile } from './Tile';

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
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item with Spot and Description"
  description="Additional information"
  leadingContent={<Spot appearance="icon" icon={Settings} />}
  onLongPress={() => console.log('Secondary action')}
  onPress={() => console.log('Primary action')}
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
      onPress={() => console.log('secondary action clicked')}
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

export const WithSecondaryAction: Story = {
  args: {
    title: 'Item with secondary action',
    description: 'LongPress to trigger secondary action',
    leadingContent: <Spot appearance='icon' icon={Settings} />,
    onLongPress: () => alert('Long press - secondary action'),
    className: 'max-w-256',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tile
  title="Item secondary action"
  description="Additional information"
  onLongPress={() => // do stuff}
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
    <View className='flex'>
      <Tile
        title='User'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={User} />}
        className='max-w-128'
      />
      <Tile
        title='Wallet'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Wallet} />}
        className='max-w-128'
      />
      <Tile
        title='Cart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Cart} />}
        className='max-w-128'
      />
      <Tile
        title='Apps'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Apps} />}
        className='max-w-128'
      />
      <Tile
        title='Chart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Chart1} />}
        className='max-w-128'
      />
    </View>
  ),
};

export const HorizontalList: Story = {
  render: () => (
    <View className='flex flex-col gap-16'>
      <View className='flex w-480 bg-base'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile
            key={`list-1-${i}`}
            title={`Item ${i + 1}`}
            description={`Description ${i + 1}`}
            leadingContent={<Spot appearance='icon' icon={Apps} />}
          />
        ))}
      </View>
      <View className='flex w-480 overflow-x-auto bg-base'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile
            key={`list-2-${i}`}
            title='Long Title that should truncate appropriately'
            description='Long description that should truncate appropriately'
            leadingContent={<Spot appearance='icon' icon={Apps} />}
            className='w-208 shrink-0'
          />
        ))}
      </View>
    </View>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <View className='flex w-full flex-col gap-16'>
      <View>
        <Tile
          title='Item fill width'
          description='Description fill width'
          leadingContent={<Spot appearance='icon' icon={Apps} />}
        />
      </View>
      <View className='flex items-center justify-center'>
        <Tile
          className='w-224'
          title='Long Item with fixed width'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          leadingContent={<Spot appearance='icon' icon={Plus} />}
        />
      </View>
    </View>
  ),
};
