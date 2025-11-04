import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
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
      <div className='flex size-80 items-center justify-center'>
        <Switch {...args} />
      </div>
    );
  },
};

/**
 * Interactive example showing all states.
 */
export const AllStates: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-48 p-16 text-base'>
      <div className='space-y-16'>
        <h3 className='heading-4'>Enabled</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Switch defaultChecked={false} />
          </div>
          <div className='flex items-center space-x-8'>
            <Switch aria-labelledby='' defaultChecked />
          </div>
        </div>
      </div>
      <div className='space-y-16'>
        <h3 className='heading-4'>Disabled</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Switch disabled defaultChecked={false} />
          </div>
          <div className='flex items-center space-x-8'>
            <Switch disabled defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
};
