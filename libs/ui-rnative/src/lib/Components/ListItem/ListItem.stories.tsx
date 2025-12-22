import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useTheme } from '../../../styles/Provider/useTheme';
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
import { Spot } from '../Spot/Spot';
import { Tag } from '../Tag/Tag';
import { Box, Text } from '../Utility';
import { ListItem } from './ListItem';

const Balance = ({ disabled }: { disabled?: boolean }) => {
  return (
    <Box lx={{ alignItems: 'flex-end' }}>
      <Text
        typography='body2SemiBold'
        lx={{ color: disabled ? 'disabled' : 'base' }}
      >
        42.00
      </Text>
      <Text typography='body3' lx={{ color: disabled ? 'disabled' : 'muted' }}>
        USD
      </Text>
    </Box>
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
    lx: { maxWidth: 's320' },
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
    <Box lx={{ maxWidth: 's320' }}>
      <ListItem {...args} />
    </Box>
  ),
};

export const TrailingContentVariantsShowcase: Story = {
  render: () => {
    return (
      <Box lx={{ flexDirection: 'column', maxWidth: 's256' }}>
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
      </Box>
    );
  },
};

export const StateShowcase: Story = {
  render: () => {
    const { theme } = useTheme();
    return (
      <Box lx={{ flexDirection: 'row', gap: 's32' }}>
        <Box lx={{ flexDirection: 'column', maxWidth: 's256' }}>
          <ListItem
            title='Caret Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={User} />}
            trailingContent={
              <ChevronRight
                size={24}
                style={{ color: theme.colors.text.muted }}
              />
            }
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
        </Box>
        <Box lx={{ flexDirection: 'column', maxWidth: 's256' }}>
          <ListItem
            title='Caret Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={User} disabled />}
            disabled
            trailingContent={
              <ChevronRight
                size={24}
                style={{ color: theme.colors.text.disabled }}
              />
            }
          />
          <ListItem
            title='Tag Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Apps} disabled />}
            disabled
            trailingContent={<Tag label='New' appearance='accent' disabled />}
          />
          <ListItem
            title='Icon Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Settings} disabled />}
            disabled
            trailingContent={
              <PenEdit
                size={24}
                style={{ color: theme.colors.text.disabled }}
              />
            }
          />
          <ListItem
            title='None Variant'
            description='With description'
            leadingContent={<Spot appearance='icon' icon={Chart1} disabled />}
            disabled
          />
        </Box>
      </Box>
    );
  },
};

export const ResponsiveLayout: Story = {
  render: () => {
    const { theme } = useTheme();
    return (
      <Box
        lx={{
          width: 's320',
          backgroundColor: 'mutedPressed',
          padding: 's16',
        }}
      >
        <Text
          typography='body4SemiBold'
          lx={{ marginBottom: 's16', color: 'muted' }}
        >
          Container: 320px wide
        </Text>
        <Box lx={{ flexDirection: 'column', gap: 's0' }}>
          <ListItem
            title='Short Title'
            description='Short description'
            leadingContent={<Spot appearance='icon' icon={Plus} />}
            trailingContent={
              <ChevronRight
                size={24}
                style={{ color: theme.colors.text.muted }}
              />
            }
          />
          <ListItem
            title='Long Title that should truncate appropriately'
            description='Long description that should truncate appropriately'
            leadingContent={<Spot appearance='icon' icon={Plus} />}
            trailingContent={
              <ChevronRight
                size={24}
                style={{ color: theme.colors.text.muted }}
              />
            }
          />
          <ListItem
            title='Long Title that should truncate appropriately'
            description='Long description that should truncate appropriately'
            descriptionTag={<Tag label='New' appearance='accent' size='sm' />}
            leadingContent={<Spot appearance='icon' icon={Plus} />}
            trailingContent={
              <ChevronRight
                size={24}
                style={{ color: theme.colors.text.muted }}
              />
            }
          />
        </Box>
      </Box>
    );
  },
};
