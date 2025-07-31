import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Components/Banner/React',
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
    primaryActionLabel: {
      control: 'text',
      description: 'Label for primary action button',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Label for secondary action button',
    },
    onPrimaryActionClick: { action: 'primary action clicked' },
    onSecondaryActionClick: { action: 'secondary action clicked' },
    onCloseClick: { action: 'close clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;
type BannerAppearance = 'info' | 'success' | 'warning' | 'error';

export const Base: Story = {
  args: {
    appearance: 'info',
    title: 'Information Banner',
  },
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
    primaryActionLabel: 'Primary',
    secondaryActionLabel: 'Secondary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Banner with Actions"
  primaryActionLabel="Primary"
  secondaryActionLabel="Secondary"
  onPrimaryActionClick={() => {}}
  onSecondaryActionClick={() => {}}
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
    primaryActionLabel: 'Primary',
    secondaryActionLabel: 'Secondary',
    onPrimaryActionClick: () => console.log('Primary clicked'),
    onSecondaryActionClick: () => console.log('Secondary clicked'),
    onCloseClick: () => console.log('Closed'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Banner with Full Features"
  description="This is additional information about the banner."
  primaryActionLabel="Primary"
  secondaryActionLabel="Secondary"
  onPrimaryActionClick={() => console.log('Primary clicked')}
  onSecondaryActionClick={() => console.log('Secondary clicked')}
  onCloseClick={() => console.log('Closed')}
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
      <div className="flex flex-col gap-16 p-8">
        {appearances.map(({ name, appearance }) => (
          <Banner
            key={appearance}
            appearance={appearance}
            title={`${name} Banner`}
            description={`${name} Banner Description`}
            onCloseClick={() => console.log('Closed')}
          />
        ))}
      </div>
    );
  },
};

export const ContentVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-16 p-8">
      <Banner title="Title Only" />
      <Banner title="With Description" description="Additional details here." />
      <Banner
        title="With Primary Action"
        primaryActionLabel="Action"
        onPrimaryActionClick={() => console.log('Primary clicked')}
      />
      <Banner
        title="With Close"
        description="Can be dismissed"
        onCloseClick={() => console.log('Closed')}
      />
      <Banner
        title="With Actions and Description"
        description="Details"
        primaryActionLabel="Primary"
        secondaryActionLabel="Secondary"
        onPrimaryActionClick={() => console.log('Primary clicked')}
        onSecondaryActionClick={() => console.log('Secondary clicked')}
      />
      <Banner
        appearance="info"
        title="Banner with Full Features"
        description="This is additional information about the banner."
        primaryActionLabel="Primary"
        secondaryActionLabel="Secondary"
        onPrimaryActionClick={() => console.log('Primary clicked')}
        onSecondaryActionClick={() => console.log('Secondary clicked')}
        onCloseClick={() => console.log('Closed')}
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
        onCloseClick={() => console.log('Closed')}
      />
      <Banner
        title="Full Width"
        description="Short description"
        isFull
        onCloseClick={() => console.log('Closed')}
      />
      <Banner
        title="Longer Title That Might Overflow When Container is Smaller"
        description="This is a longer description that demonstrates how the banner handles longer content within its constraints. It should be truncated at 5 lines with an ellipsis, so this line should not be visible."
        onCloseClick={() => console.log('Closed')}
      />
    </div>
  ),
};

export const InteractiveDismiss: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) return <p>Banner dismissed</p>;

    return (
      <Banner
        {...args}
        title="Click close to dismiss"
        onCloseClick={() => setVisible(false)}
      />
    );
  },
};

export const InteractiveActions: Story = {
  render: (args) => {
    const [state, setState] = React.useState('idle');

    const handleAccept = () => {
      setState('success');
    };

    const handleReject = () => {
      setState('error');
    };

    return (
      <Banner
        {...args}
        appearance={
          state === 'success' ? 'success' : state === 'error' ? 'error' : 'info'
        }
        title={
          state === 'success'
            ? 'Accepted!'
            : state === 'error'
              ? 'Rejected!'
              : 'Banner with Action'
        }
        primaryActionLabel={state === 'idle' ? 'Accept' : undefined}
        onPrimaryActionClick={state === 'idle' ? handleAccept : undefined}
        secondaryActionLabel={state === 'idle' ? 'Reject' : undefined}
        onSecondaryActionClick={state === 'idle' ? handleReject : undefined}
        onCloseClick={() => setState('idle')}
      />
    );
  },
};
