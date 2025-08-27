import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { InformationFill, SparksFill } from '../../Symbols';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input/Overview',
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
    label: {
      control: 'text',
      description:
        'The label text that floats above the input when focused or filled',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates whether the input value is invalid',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'The type of input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    value: {
      control: 'text',
      description: 'Controlled value of the input',
    },
    renderRightElement: {
      control: 'select',
      options: [undefined, 'Information'],
      defaultValue: undefined,
      mapping: {
        undefined: undefined,
        Information: () => <InformationFill size={20} className="text-muted" />,
      },
      description:
        'Function to render custom content on the right side of the input',
    },
    onClear: {
      control: 'select',
      options: [undefined, 'Clear'],
      defaultValue: undefined,
      mapping: {
        undefined: undefined,
        Clear: () => {},
      },
      description: 'Function to clear the input via a clear button',
    },
  },
  // Default args moved to Default story
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * The default input with a label.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value || '');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={args.onClear}
        renderRightElement={args.renderRightElement}
      />
    );
  },
  args: {
    label: 'Title',
    type: 'text',
    disabled: false,
    'aria-invalid': false,
    value: '',
    onClear: undefined,
    renderRightElement: undefined,
  },
};

/**
 * Input with content showing the floating label behavior and clear button.
 */
export const WithContent: Story = {
  render: () => {
    const [value, setValue] = React.useState('Initial content');
    return (
      <Input
        label="Title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
};

/**
 * Input in a focused state showing the accent border and ring.
 */
export const Focused: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <Input
        label="Title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        autoFocus
      />
    );
  },
};

/**
 * Input in an error state with visual indicators.
 */
export const WithError: Story = {
  render: () => {
    const [email, setEmail] = React.useState('invalid.email');
    // Consider empty input as valid to allow clearing
    const isValidEmail =
      email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
      <div className="space-y-16">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClear={() => setEmail('')}
          aria-invalid={!isValidEmail}
          errorMessage={
            !isValidEmail ? 'Please enter a valid email address' : undefined
          }
        />
        <div className="text-muted body-3">
          Try typing a valid email address or clicking the clear button to
          remove the error state
        </div>
      </div>
    );
  },
};

/**
 * Disabled input state.
 */
export const Disabled: Story = {
  render: () => {
    const [value] = React.useState('Disabled content');
    return <Input label="Title" value={value} onChange={() => {}} disabled />;
  },
};

/**
 * Input with different types.
 */
export const EmailType: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <Input
        label="Email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
};

export const PasswordType: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <Input
        label="Password"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
};

/**
 * Interactive example showing how the input behaves with user interaction and external error handling.
 */
/**
 * Input with an info icon that provides additional context.
 */
// Custom right elements
const InfoTooltip = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className="rounded-full p-2 transition-colors hover:bg-muted-hover"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Username requirements"
      >
        <InformationFill size={20} className="text-muted" />
      </button>
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-8 w-64 rounded-md bg-base p-8 shadow-lg">
          <p className="body-3">
            Username must be unique and at least 3 characters long
          </p>
        </div>
      )}
    </>
  );
};

const GeneratePasswordButton = () => (
  <button
    type="button"
    onClick={() => alert('Generate password')}
    className="rounded-full p-2 transition-colors hover:bg-muted-hover"
    aria-label="Generate random password"
  >
    <SparksFill size={20} className="text-muted" />
  </button>
);

export const WithCustomElement: Story = {
  render: () => {
    return (
      <div className="space-y-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Example with tooltip */}
          <div>
            <h3 className="mb-8 body-1-semi-bold">With Tooltip</h3>
            <Input label="Username" renderRightElement={InfoTooltip} />
          </div>

          {/* Example with action button */}
          <div>
            <h3 className="mb-8 body-1-semi-bold">With Action Button</h3>
            <Input
              label="Generate Password"
              type="password"
              renderRightElement={GeneratePasswordButton}
            />
          </div>
        </div>
        <div className="text-muted body-3">
          The renderRightElement prop allows you to add custom interactive
          elements like tooltips, clear buttons, or action buttons
        </div>
      </div>
    );
  },
};

/**
 * Interactive example showing how the input behaves with user interaction and external error handling.
 */
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [hasError, setHasError] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      // Simple validation example
      setHasError(newValue.length > 0 && newValue.length < 3);
    };

    return (
      <div className="space-y-16">
        <div>
          <Input
            label="Username"
            value={value}
            onChange={handleChange}
            aria-invalid={hasError}
            errorMessage={
              hasError ? 'Must be at least 3 characters' : undefined
            }
          />
        </div>
        <div className="text-muted body-3">
          Try typing to see the clear button appear. Click the X to clear the
          input. Validation requires minimum 3 characters.
        </div>
      </div>
    );
  },
};
