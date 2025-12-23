import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Box, Text } from '../Utility';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Selection/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the switch',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the switch is disabled',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Callback function called when the checked state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The base switch in its normal state.
 */
export const Base: Story = {
  render: (args) => {
    return (
      <Box
        lx={{
          width: 's80',
          height: 's80',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Switch {...args} />
      </Box>
    );
  },
};

/**
 * Interactive example showing all states.
 */
export const AllStates: Story = {
  render: () => (
    <Box
      lx={{
        flexDirection: 'row',
        gap: 's48',
        padding: 's16',
      }}
    >
      <Box lx={{ gap: 's16' }}>
        <Text typography='heading4'>Enabled</Text>
        <Box lx={{ gap: 's8' }}>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Switch defaultChecked={false} />
          </Box>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Switch aria-labelledby='' defaultChecked />
          </Box>
        </Box>
      </Box>
      <Box lx={{ gap: 's16' }}>
        <Text typography='heading4'>Disabled</Text>
        <Box lx={{ gap: 's8' }}>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Switch disabled defaultChecked={false} />
          </Box>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Switch disabled defaultChecked />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};
