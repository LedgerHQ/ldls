import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox/Overview',
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
    required: {
      control: 'boolean',
      description: 'If true, the checkbox is required in forms',
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
 * The base checkbox in its normal state.
 */
export const Base: Story = {
  args: {},
};

/**
 * Interactive example showing all states.
 */
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 p-16">
      <div className="space-y-16">
        <h3 className="heading-4">Enabled</h3>
        <div className="space-y-8">
          <div className="flex items-center space-x-8">
            <Checkbox checked={false} />
            <span>Unchecked</span>
          </div>
          <div className="flex items-center space-x-8">
            <Checkbox checked />
            <span>Checked</span>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        <h3 className="heading-4">Disabled</h3>
        <div className="space-y-8">
          <div className="flex items-center space-x-8">
            <Checkbox disabled checked={false} />
            <span className="text-muted">Unchecked</span>
          </div>
          <div className="flex items-center space-x-8">
            <Checkbox disabled checked />
            <span className="text-muted">Checked</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Example of checkbox usage in a form context.
 */
export const FormExample: Story = {
  render: () => (
    <form className="space-y-16 p-16">
      <div className="space-y-12">
        <h3 className="body-1">Subscribe to newsletters</h3>
        <div className="space-y-8">
          <div className="flex items-center space-x-8">
            <Checkbox name="newsletter" value="weekly" />
            <span className="body-2">Weekly newsletter</span>
          </div>
          <div className="flex items-center space-x-8">
            <Checkbox name="newsletter" value="monthly" />
            <span className="body-2">Monthly newsletter</span>
          </div>
          <div className="flex items-center space-x-8">
            <Checkbox
              name="newsletter"
              value="product-updates"
              defaultChecked
            />
            <span className="body-2">Product updates</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <Checkbox name="terms" required />
        <span className="body-2">
          I agree to the{' '}
          <a href="#" onClick={(e) => e.preventDefault()} className="underline">
            terms and conditions
          </a>{' '}
          *
        </span>
      </div>
    </form>
  ),
};
