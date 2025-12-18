import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
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
import { Box } from '../Utility';
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
    lx: { maxWidth: 's256' },
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
  lx={{ maxWidth: 's256' }}
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
    lx: { maxWidth: 's256' },
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
  onLongPress={() => console.log('Long press - secondary action')}
  lx={{ maxWidth: 's256' }}
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
    lx: { maxWidth: 's256' },
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
  lx={{ maxWidth: 's256' }}
/>
`,
      },
    },
  },
};

export const LeadingContentVariantsShowcase: Story = {
  render: () => (
    <Box lx={{ flexDirection: 'row' }}>
      <Tile
        title='User'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={User} />}
        lx={{ maxWidth: 's128' }}
      />
      <Tile
        title='Wallet'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Wallet} />}
        lx={{ maxWidth: 's128' }}
      />
      <Tile
        title='Cart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Cart} />}
        lx={{ maxWidth: 's128' }}
      />
      <Tile
        title='Apps'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Apps} />}
        lx={{ maxWidth: 's128' }}
      />
      <Tile
        title='Chart'
        description='With description'
        leadingContent={<Spot appearance='icon' icon={Chart1} />}
        lx={{ maxWidth: 's128' }}
      />
    </Box>
  ),
};

export const HorizontalList: Story = {
  render: () => (
    <Box lx={{ flexDirection: 'column', gap: 's16' }}>
      <Box
        lx={{ flexDirection: 'row', width: 's480', backgroundColor: 'base' }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile
            key={`list-1-${i}`}
            title={`Item ${i + 1}`}
            description={`Description ${i + 1}`}
            leadingContent={<Spot appearance='icon' icon={Apps} />}
          />
        ))}
      </Box>
      <Box
        lx={{
          flexDirection: 'row',
          width: 's480',
          overflow: 'scroll',
          backgroundColor: 'base',
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile
            key={`list-2-${i}`}
            title='Long Title that should truncate appropriately'
            description='Long description that should truncate appropriately'
            leadingContent={<Spot appearance='icon' icon={Apps} />}
            lx={{ width: 's208', flexShrink: 0 }}
          />
        ))}
      </Box>
    </Box>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Box lx={{ width: 'full', flexDirection: 'column', gap: 's16' }}>
      <Box>
        <Tile
          title='Item fill width'
          description='Description fill width'
          leadingContent={<Spot appearance='icon' icon={Apps} />}
        />
      </Box>
      <Box lx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Tile
          lx={{ width: 's224' }}
          title='Long Item with fixed width'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          leadingContent={<Spot appearance='icon' icon={Plus} />}
        />
      </Box>
    </Box>
  ),
};
