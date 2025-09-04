import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressFieldInput } from './AddressFieldInput';

const meta: Meta<typeof AddressFieldInput> = {
  component: AddressFieldInput,
  title: 'Components/AddressFieldInput/Overview',
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
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the address input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the address input is disabled',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    value: {
      control: 'text',
      description: 'Controlled value of the address input',
    },
    hideClearButton: {
      control: 'boolean',
      description: 'Hide the clear button that appears when typing',
    },
    onQrCodeClick: {
      action: 'qr-code-clicked',
      description: 'Callback fired when the QR code scanner icon is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddressFieldInput>;

/**
 * The default address field input with "To:" prefix and clickable QR code scanner icon.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter address or ENS',
    onQrCodeClick: () => console.log('QR code clicked!'),
  },
  parameters: {
    docs: {
      source: {
        code: '<AddressFieldInput placeholder="Enter address or ENS" onQrCodeClick={() => openQrScanner()} />',
      },
    },
  },
};

/**
 * Empty address field showing placeholder text and clickable QR code scanner.
 */
export const Empty: Story = {
  args: {
    placeholder: 'Enter address or ENS',
    onQrCodeClick: () => console.log('QR code clicked!'),
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<AddressFieldInput placeholder="Enter address or ENS" onQrCodeClick={() => openQrScanner()} containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Address field with content showing the clear button instead of QR code scanner.
 */
export const WithContent: Story = {
  args: {
    placeholder: 'Enter address or ENS',
    defaultValue: '0x95f980s5ag77xe7csuz',
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<AddressFieldInput placeholder="Enter address or ENS" defaultValue="0x95f980s5ag77xe7csuz" containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Disabled address field input.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Enter address or ENS',
    disabled: true,
    defaultValue: '0x95f980s5ag77xe7csuz',
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<AddressFieldInput placeholder="Enter address or ENS" disabled defaultValue="0x95f980s5ag77xe7csuz" containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Address field in error state with error message.
 */
export const Error: Story = {
  args: {
    placeholder: 'Enter address or ENS',
    defaultValue: 'invalid-address-format',
    errorMessage: 'Invalid address format',
    'aria-invalid': true,
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: `<AddressFieldInput 
  placeholder="Enter address or ENS"
  defaultValue="invalid-address-format"
  errorMessage="Invalid address format"
  aria-invalid={true}
  containerClassName="max-w-md"
/>`,
      },
    },
  },
};

/**
 * Address field with controlled state and QR code scanning functionality.
 */
export const Controlled: Story = {
  render: () => {
    const [address, setAddress] = React.useState('');
    const [error, setError] = React.useState('');

    // Simulate address validation
    React.useEffect(() => {
      if (address.length > 0) {
        const isValidAddress =
          address.startsWith('0x') && address.length === 42;
        const isValidENS = address.endsWith('.eth');

        if (!isValidAddress && !isValidENS && address.length > 5) {
          setError('Please enter a valid Ethereum address or ENS name');
        } else {
          setError('');
        }
      } else {
        setError('');
      }
    }, [address]);

    const handleQrCodeScan = () => {
      // Simulate QR code scanning
      const mockAddress = '0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434';
      setAddress(mockAddress);
      console.log('QR code scanned:', mockAddress);
    };

    return (
      <div className="space-y-4">
        <AddressFieldInput
          placeholder="Enter address or ENS"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onQrCodeClick={handleQrCodeScan}
          onClear={() => {
            // BaseInput already handles clearing the input value
            setError(''); // Clear error state
            console.log('Address cleared');
          }}
          errorMessage={error}
          aria-invalid={!!error}
          containerClassName="max-w-md"
        />

        <div className="text-muted body-3">
          <p>
            Click the QR code icon when the field is empty to scan an address.
          </p>
        </div>

        {address && !error && (
          <div className="bg-success/10 rounded-md border border-muted p-16">
            <h4 className="mb-4 text-success body-2-semi-bold">
              Valid Address
            </h4>
            <p className="break-all text-success body-3">{address}</p>
          </div>
        )}
      </div>
    );
  },
};

/**
 * Address field with custom styling and hidden clear button.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-16">
      <div className="max-w-md">
        <h3 className="mb-8 body-2-semi-bold">Custom container styling</h3>
        <AddressFieldInput
          placeholder="Enter wallet address"
          containerClassName="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100"
        />
      </div>

      <div className="max-w-md">
        <h3 className="mb-8 body-2-semi-bold">Hidden clear button</h3>
        <AddressFieldInput
          placeholder="Enter address or ENS"
          defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
          hideClearButton={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// Custom container styling
<AddressFieldInput
  placeholder="Enter wallet address"
  containerClassName="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100"
/>

// Hidden clear button
<AddressFieldInput
  placeholder="Enter address or ENS"
  defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
  hideClearButton={true}
/>`,
      },
    },
  },
};
