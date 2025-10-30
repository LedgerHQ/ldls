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
  argTypes: {
    onCheckedChange: {
      action: 'checked changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The base checkbox in its normal state.
 */
export const Base: Story = {
  render: (args) => (
    <div className='flex size-80 items-center justify-center'>
      <Checkbox {...args} />
    </div>
  ),
};

/**
 * Interactive example showing all states.
 */
export const AllStates: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-16 p-16 text-base'>
      <div className='space-y-16'>
        <h3 className='heading-4'>Enabled</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Checkbox checked={false} />
            <span>Unchecked</span>
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox checked />
            <span>Checked</span>
          </div>
        </div>
      </div>
      <div className='space-y-16'>
        <h3 className='heading-4'>Disabled</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Checkbox disabled checked={false} />
            <span className='text-muted'>Unchecked</span>
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox disabled checked />
            <span className='text-muted'>Checked</span>
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
    <form className='space-y-16 p-16 text-base'>
      <div className='space-y-12'>
        <h3 className='body-1'>Subscribe to newsletters</h3>
        <div className='space-y-8'>
          <div className='flex items-center space-x-8'>
            <Checkbox id='weekly' name='newsletter' value='weekly' />
            <label htmlFor='weekly' className='body-2 cursor-pointer'>
              Weekly newsletter
            </label>
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox id='monthly' name='newsletter' value='monthly' />
            <label htmlFor='monthly' className='body-2 cursor-pointer'>
              Monthly newsletter
            </label>
          </div>
          <div className='flex items-center space-x-8'>
            <Checkbox
              id='product-updates'
              name='newsletter'
              value='product-updates'
              defaultChecked
            />
            <label htmlFor='product-updates' className='body-2 cursor-pointer'>
              Product updates
            </label>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-8'>
        <Checkbox id='terms' name='terms' required />
        <label htmlFor='terms' className='body-2 cursor-pointer'>
          I agree to the{' '}
          <a href='#' onClick={(e) => e.preventDefault()} className='underline'>
            terms and conditions
          </a>{' '}
          *
        </label>
      </div>
    </form>
  ),
};
