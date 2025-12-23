import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Box, Text } from '../Utility';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Selection/Checkbox',
  component: Checkbox,
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
  args: {
    label: 'Checkbox',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox is disabled',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Callback function called when the checked state changes',
    },
    label: {
      control: 'text',
      description: 'The label text of the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The base checkbox in its normal state.
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
        <Checkbox {...args} />
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
            <Checkbox
              label='Unchecked'
              accessibilityLabel='Unchecked'
              defaultChecked={false}
            />
          </Box>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Checkbox label='Checked' defaultChecked />
          </Box>
        </Box>
      </Box>
      <Box lx={{ gap: 's16' }}>
        <Text typography='heading4'>Disabled</Text>
        <Box lx={{ gap: 's8' }}>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Checkbox label='Unchecked' disabled defaultChecked={false} />
          </Box>
          <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
            <Checkbox label='Checked' disabled defaultChecked />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};
