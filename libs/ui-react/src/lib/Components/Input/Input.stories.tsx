import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { Button } from '../Button';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip';
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
      control: false,
      description: 'Controlled value of the input',
    },
    suffix: {
      control: 'select',
      options: [undefined, 'Information'],
      defaultValue: undefined,
      mapping: {
        undefined: undefined,
        Information: <InformationFill size={20} className="text-muted" />,
      },
      description:
        'Custom content to render after the input (right side in LTR)',
    },
    onClear: {
      control: 'select',
      options: [undefined, 'Clear'],
      defaultValue: undefined,
      mapping: {
        undefined: undefined,
        Clear: () => {
          console.log('Clear');
        },
      },
      description: 'Optional function to override the default clear behavior',
    },
    hideClearButton: {
      control: 'boolean',
      description:
        'Hide the clear button (shown by default when input has content)',
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
      <div className="max-w-md">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={args.onClear ? () => setValue('') : undefined}
          suffix={args.suffix}
        />
      </div>
    );
  },
  args: {
    label: 'Label',
    type: 'text',
    disabled: false,
    'aria-invalid': false,
    value: '',
    onClear: undefined,
    suffix: undefined,
    hideClearButton: false,
  },
};

/**
 * Input with content showing the floating label behavior and clear button.
 */
export const WithContent: Story = {
  render: () => {
    const [value, setValue] = React.useState('Initial content');
    return (
      <div className="max-w-md">
        <Input
          label="Label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
      </div>
    );
  },
};

/**
 * Input with default clear button behavior (no onClear provided).
 * Shows how the clear button appears automatically and handles clearing.
 */
export const DefaultClearBehavior: Story = {
  render: () => {
    return (
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <ControlledInputExample />
          <UncontrolledInputExample />
          <div className="col-span-full text-muted body-3">
            Clear buttons appear automatically when input has content. No
            onClear prop needed - default behavior handles both controlled and
            uncontrolled inputs.
          </div>
        </div>
      </div>
    );
  },
};

export const ExtendedClearBehavior = () => {
  return (
    <div className="max-w-md">
      <Input
        label="Extended Clear Behavior"
        onClear={() => {
          alert('Extended clear behavior');
        }}
      />
    </div>
  );
};

// Separate components to avoid state interference
export const ControlledInputExample = () => {
  const [value, setValue] = React.useState(
    'Type here to see default clear button',
  );
  return (
    <div className="max-w-md">
      <Input
        label="Controlled Input (Default Clear)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="controlled-input"
      />
    </div>
  );
};

export const UncontrolledInputExample = () => {
  return (
    <div className="max-w-md">
      <Input
        label="Uncontrolled Input (Default Clear)"
        defaultValue="Default content"
        id="uncontrolled-input"
      />
    </div>
  );
};

/**
 * Input with hidden clear button using hideClearButton prop.
 */
export const HiddenClearButton: Story = {
  render: () => {
    const [value, setValue] = React.useState('Content with no clear button');
    return (
      <div className="max-w-md space-y-16">
        <Input
          label="Clear Button Hidden"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          hideClearButton
        />
        <div className="text-muted body-3">
          Use hideClearButton to prevent the clear button from appearing.
        </div>
      </div>
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
      <div className="max-w-md">
        <Input
          label="Label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          autoFocus
        />
      </div>
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
      <div className="max-w-md">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!isValidEmail}
          errorMessage={
            !isValidEmail ? 'Please enter a valid email address' : undefined
          }
        />
        <div className="mt-12 text-muted body-3">
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
    return (
      <div className="max-w-md">
        <Input
          label="Label"
          value={value}
          onChange={() => {
            console.log('onChange');
          }}
          disabled
        />
      </div>
    );
  },
};

/**
 * Input with different types.
 */
export const EmailType: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <div className="max-w-md">
        <Input
          label="Email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const PasswordType: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <div className="max-w-md">
        <Input
          label="Password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
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
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" aria-label="Username requirements">
          <InformationFill size={20} className="text-muted" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">
        Username must be unique and at least 3 characters long
      </TooltipContent>
    </Tooltip>
  );
};

const GeneratePasswordButton = () => (
  <button
    type="button"
    onClick={() => alert('Generate password')}
    aria-label="Generate random password"
  >
    <SparksFill size={20} className="text-muted" />
  </button>
);

export const WithCustomElement: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Example with tooltip and clear button */}
          <div>
            <h3 className="mb-8 body-1-semi-bold">
              With Tooltip and Clear Button
            </h3>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Username"
              suffix={<InfoTooltip />}
              id="tooltip-input"
            />
          </div>

          {/* Example with action button and no clear button */}
          <div>
            <h3 className="mb-8 body-1-semi-bold">
              With Action Button and No Clear Button
            </h3>
            <Input
              label="Generate Password"
              type="password"
              hideClearButton
              suffix={<GeneratePasswordButton />}
            />
          </div>
        </div>
        <div className="mt-16 text-muted body-3">
          The suffix prop allows you to add custom interactive elements like
          tooltips, or action buttons
        </div>
      </div>
    );
  },
};

/**
 * Interactive form example showing how Input components work together in a real form with validation and submission.
 */
export const Interactive: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange =
      (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: '' }));
        }
      };

    const handleClear = (field: string) => () => {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.username) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters';
      }

      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        setIsSubmitted(true);
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        }, 2000);
      }
    };

    if (isSubmitted) {
      return (
        <div className="bg-success/10 rounded-md p-16 text-center">
          <div className="text-success body-1-semi-bold">
            ✓ Form submitted successfully!
          </div>
          <div className="mt-4 text-muted body-3">Resetting form...</div>
        </div>
      );
    }

    return (
      <div className="max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-16">
          <div className="flex flex-col gap-16">
            <Input
              label="Username"
              value={formData.username}
              onChange={handleChange('username')}
              onClear={handleClear('username')}
              aria-invalid={!!errors.username}
              errorMessage={errors.username}
              suffix={<InformationFill size={20} className="text-muted" />}
            />

            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              onClear={handleClear('email')}
              aria-invalid={!!errors.email}
              errorMessage={errors.email}
            />

            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange('password')}
              onClear={handleClear('password')}
              aria-invalid={!!errors.password}
              errorMessage={errors.password}
            />

            <Input
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
              onClear={handleClear('confirmPassword')}
              aria-invalid={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword}
            />
          </div>

          <div className="flex gap-12">
            <Button type="submit" appearance="base">
              Create Account
            </Button>
            <Button
              type="button"
              appearance="gray"
              onClick={() => {
                setFormData({
                  username: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                });
                setErrors({});
              }}
            >
              Reset
            </Button>
          </div>

          <div className="text-muted body-3">
            This example demonstrates form validation, error handling, clear
            buttons, and right elements working together.
          </div>
        </form>
      </div>
    );
  },
};
