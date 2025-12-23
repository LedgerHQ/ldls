import type { Meta, StoryObj } from '@storybook/react-native';
import {
  Settings,
  PenEdit,
  DeleteCircleFill,
  MoreVertical,
} from '../../Symbols';
import { Box, Text } from '../Utility';
import { InteractiveIcon } from './InteractiveIcon';

const meta: Meta<typeof InteractiveIcon> = {
  component: InteractiveIcon,
  title: 'Action/InteractiveIcon',
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
    children: {
      control: 'select',
      options: ['Settings', 'PenEdit', 'DeleteCircleFill'],
      mapping: {
        Settings: <Settings />,
        PenEdit: <PenEdit />,
        DeleteCircleFill: <DeleteCircleFill />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveIcon>;

export const Base: Story = {
  args: {
    iconType: 'filled',
    children: <DeleteCircleFill />,
    accessibilityLabel: 'Delete',
  },
  parameters: {
    docs: {
      source: {
        code: `
<InteractiveIcon iconType="filled" accessibilityLabel="Delete">
  <DeleteCircleFill />
</InteractiveIcon>
`,
      },
    },
  },
};

export const Stroked: Story = {
  args: {
    iconType: 'stroked',
    children: <MoreVertical />,
    accessibilityLabel: 'More actions',
  },
  parameters: {
    docs: {
      source: {
        code: `
<InteractiveIcon iconType="stroked" accessibilityLabel="More actions">
  <MoreVertical />
</InteractiveIcon>
`,
      },
    },
  },
};

export const IconTypeShowcase: Story = {
  render: () => {
    return (
      <Box lx={{ flexDirection: 'row', gap: 's16', padding: 's8' }}>
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Filled
          </Text>
          <InteractiveIcon iconType='filled' accessibilityLabel='Delete'>
            <DeleteCircleFill />
          </InteractiveIcon>
        </Box>
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Stroked
          </Text>
          <InteractiveIcon iconType='stroked' accessibilityLabel='More actions'>
            <MoreVertical />
          </InteractiveIcon>
        </Box>
      </Box>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => {
    const iconSizes = [16, 20, 24, 40] as const;
    return (
      <Box lx={{ flexDirection: 'row', gap: 's12', padding: 's8' }}>
        {iconSizes.map((size) => (
          <Box key={size} lx={{ flexDirection: 'column', gap: 's16' }}>
            <Box
              lx={{
                width: 's72',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <InteractiveIcon
                key={size}
                iconType='stroked'
                accessibilityLabel='More'
              >
                <DeleteCircleFill size={size} />
              </InteractiveIcon>
            </Box>
            <Text lx={{ textAlign: 'center' }} typography='body3'>
              {size}px
            </Text>
          </Box>
        ))}
      </Box>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => {
    return (
      <Box
        lx={{
          flexDirection: 'row',
          gap: 's16',
          backgroundColor: 'base',
          padding: 's8',
        }}
      >
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Filled enabled
          </Text>
          <InteractiveIcon iconType='filled' accessibilityLabel='Delete'>
            <DeleteCircleFill />
          </InteractiveIcon>
        </Box>
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Stroked enabled
          </Text>
          <InteractiveIcon iconType='stroked' accessibilityLabel='More actions'>
            <MoreVertical />
          </InteractiveIcon>
        </Box>
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Filled disabled
          </Text>
          <InteractiveIcon
            iconType='filled'
            accessibilityLabel='Delete'
            disabled
          >
            <DeleteCircleFill />
          </InteractiveIcon>
        </Box>
        <Box lx={{ flexDirection: 'column', alignItems: 'center', gap: 's4' }}>
          <Text lx={{ color: 'muted' }} typography='body3'>
            Stroked disabled
          </Text>
          <InteractiveIcon
            iconType='stroked'
            accessibilityLabel='More actions'
            disabled
          >
            <MoreVertical />
          </InteractiveIcon>
        </Box>
      </Box>
    );
  },
};
