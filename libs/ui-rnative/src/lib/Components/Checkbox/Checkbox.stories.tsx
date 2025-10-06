import type { Meta, StoryObj } from '@storybook/react-vite';
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
      <div className='flex size-80 items-center justify-center'>
        <Checkbox {...args} />
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
            <Checkbox
              label='Unchecked'
              accessibilityLabel='Unchecked'
              defaultChecked={false}
            />
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox label='Checked' defaultChecked />
          </div>
        </div>
      </div>
      <div className='space-y-16'>
        <h3 className='heading-4'>Disabled</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Checkbox label='Unchecked' disabled defaultChecked={false} />
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox label='Checked' disabled defaultChecked />
          </div>
        </div>
      </div>
      <div className='space-y-16'>
        <h3 className='heading-4'>Required</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Checkbox label='Unchecked' required defaultChecked={false} />
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox label='Checked' required defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
};
