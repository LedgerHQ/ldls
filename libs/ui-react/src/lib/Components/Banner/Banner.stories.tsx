import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Communication/Banner/Overview',
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
    appearance: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style appearance of the banner',
    },
    title: {
      control: 'text',
      description: 'The title of the banner',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    primaryAction: {
      control: 'object',
      description: 'Primary action with label and onClick',
    },
    secondaryAction: {
      control: 'object',
      description: 'Secondary action with label and onClick',
    },
    closeAction: {
      control: 'object',
      description: 'Close action with onClick and ariaLabel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;
type BannerAppearance = 'info' | 'success' | 'warning' | 'error';
type BannerProps = React.ComponentProps<typeof Banner>;

export const Base: Story = {
  args: {
    appearance: 'info',
    title: 'Information Banner',
  },
  render: (args: BannerProps) => (
    // max-w-md container for visual presentation - not required for Banner component
    <div className="max-w-md">
      <Banner {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Banner appearance="info" title="Information Banner" />
`,
      },
    },
  },
};

export const WithDescription: Story = {
  args: {
    appearance: 'info',
    title: 'Banner with Description',
    description: 'This is additional information about the banner.',
  },
  render: (args: BannerProps) => (
    <div className="max-w-md">
      <Banner {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Banner with Description"
  description="This is additional information about the banner."
/>
`,
      },
    },
  },
};

export const WithActions: Story = {
  args: {
    appearance: 'info',
    title: 'Banner with Actions',
    primaryAction: {
      label: 'Primary',
      onClick: () => console.log('Primary clicked'),
    },
    secondaryAction: {
      label: 'Secondary',
      onClick: () => console.log('Secondary clicked'),
    },
  },
  render: (args: BannerProps) => (
    <div className="max-w-md">
      <Banner {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Banner with Actions"
  primaryAction={{ label: "Primary", onClick: () => console.log('Primary clicked') }}
  secondaryAction={{ label: "Secondary", onClick: () => console.log('Secondary clicked') }}
/>
`,
      },
    },
  },
};

export const WithFullFeatures: Story = {
  args: {
    appearance: 'info',
    title: 'Banner with Full Features',
    description: 'This is additional information about the banner.',
    primaryAction: {
      label: 'Primary',
      onClick: () => console.log('Primary clicked'),
    },
    secondaryAction: {
      label: 'Secondary',
      onClick: () => console.log('Secondary clicked'),
    },
    closeAction: {
      onClick: () => console.log('Closed'),
      ariaLabel: 'Close banner',
    },
  },
  render: (args: BannerProps) => (
    <div className="max-w-md">
      <Banner {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Banner with Full Features"
  description="This is additional information about the banner."
  primaryAction={{ label: 'Primary', onClick: () => console.log('Primary clicked') }}
  secondaryAction={{ label: 'Secondary', onClick: () => console.log('Secondary clicked') }}
  closeAction={{ onClick: () => console.log('Closed'), ariaLabel: 'Close banner' }}
/>
`,
      },
    },
  },
};

export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{ name: string; appearance: BannerAppearance }> = [
      { name: 'Info', appearance: 'info' },
      { name: 'Success', appearance: 'success' },
      { name: 'Warning', appearance: 'warning' },
      { name: 'Error', appearance: 'error' },
    ];

    return (
      // max-w-md container for visual presentation - not required for Banner component
      <div className="flex max-w-md flex-col gap-16 p-8">
        {appearances.map(({ name, appearance }) => (
          <Banner
            key={appearance}
            appearance={appearance}
            title={`${name} Banner`}
            description={`${name} Banner Description`}
            closeAction={{
              onClick: () => console.log('Closed'),
              ariaLabel: `Close ${name} banner`,
            }}
          />
        ))}
      </div>
    );
  },
};

export const ContentVariations: Story = {
  render: () => (
    // max-w-md container for visual presentation - not required for Banner component
    <div className="flex max-w-md flex-col gap-16 p-8">
      <Banner title="Title Only" />
      <Banner title="With Description" description="Additional details here." />
      <Banner
        title="With Primary Action"
        primaryAction={{
          label: 'Action',
          onClick: () => console.log('Primary clicked'),
        }}
      />
      <Banner
        title="With Close"
        description="Can be dismissed"
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close banner',
        }}
      />
      <Banner
        title="With Actions and Description"
        description="Details"
        primaryAction={{
          label: 'Primary',
          onClick: () => console.log('Primary clicked'),
        }}
        secondaryAction={{
          label: 'Secondary',
          onClick: () => console.log('Secondary clicked'),
        }}
      />
      <Banner
        appearance="info"
        title="Banner with Full Features"
        description="This is additional information about the banner."
        primaryAction={{
          label: 'Primary',
          onClick: () => console.log('Primary clicked'),
        }}
        secondaryAction={{
          label: 'Secondary',
          onClick: () => console.log('Secondary clicked'),
        }}
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close banner',
        }}
      />
    </div>
  ),
};

export const NaturalWidth: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-muted body-3">
        Banner without container constraints - takes full parent width:
      </p>
      <Banner
        title="Full Width Banner"
        description="This banner demonstrates natural width behavior - it fills the full width of its parent container."
        primaryAction={{
          label: 'Action',
          onClick: () => console.log('Action clicked'),
        }}
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close full width banner',
        }}
      />
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid w-384 grid-cols-1 gap-16 bg-muted-pressed p-16">
      <div className="text-muted body-4-semi-bold">Container: 384px wide</div>
      <Banner
        title="Short Title"
        description="Short description"
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close short banner',
        }}
      />
      <Banner
        title="Constrained Width"
        description="Banner width is controlled by this 384px container"
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close constrained width banner',
        }}
      />
      <Banner
        title="Longer Title That Might Overflow When Container is Smaller"
        description="This is a longer description that demonstrates how the banner handles longer content within its constraints. It should be truncated at 5 lines with an ellipsis, so this line should not be visible."
        closeAction={{
          onClick: () => console.log('Closed'),
          ariaLabel: 'Close overflow banner',
        }}
      />
    </div>
  ),
};

export const InteractiveDismiss: Story = {
  render: (args: BannerProps) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) return <p>Banner dismissed</p>;

    return (
      <div className="max-w-md">
        <Banner
          {...args}
          title="Click close to dismiss"
          closeAction={{
            onClick: () => setVisible(false),
            ariaLabel: 'Dismiss interactive banner',
          }}
        />
      </div>
    );
  },
};

export const InteractiveActions: Story = {
  render: (args: BannerProps) => {
    const [state, setState] = React.useState('idle');

    const handleAccept = () => {
      setState('success');
    };

    const handleReject = () => {
      setState('error');
    };

    return (
      <div className="max-w-md">
        <Banner
          {...args}
          appearance={
            state === 'success'
              ? 'success'
              : state === 'error'
                ? 'error'
                : 'info'
          }
          title={
            state === 'success'
              ? 'Accepted!'
              : state === 'error'
                ? 'Rejected!'
                : 'Banner with Action'
          }
          primaryAction={
            state === 'idle'
              ? { label: 'Accept', onClick: handleAccept }
              : undefined
          }
          secondaryAction={
            state === 'idle'
              ? { label: 'Reject', onClick: handleReject }
              : undefined
          }
          closeAction={{
            onClick: () => setState('idle'),
            ariaLabel: 'Reset banner state',
          }}
        />
      </div>
    );
  },
};
