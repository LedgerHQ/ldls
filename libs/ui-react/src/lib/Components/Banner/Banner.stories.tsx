import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Settings } from '../../Symbols';

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

export const WithClose: Story = {
  args: {
    appearance: 'info',
    title: 'Dismissible Banner',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Banner
  appearance="info"
  title="Dismissible Banner"
  onCloseClick={() => {}}
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
          />
        ))}
      </div>
    );
  },
};

export const ContentTypesShowcase: Story = {
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
        title="With Actions and Description"
        description="Details"
        primaryActionLabel="Primary"
        secondaryActionLabel="Secondary"
        onPrimaryActionClick={() => console.log('Primary clicked')}
        onSecondaryActionClick={() => console.log('Secondary clicked')}
      />
      <Banner title="With Close" onCloseClick={() => console.log('Closed')} />
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

    const handlePrimary = () => {
      setState('loading');
      setTimeout(() => setState('success'), 2000);
    };

    return (
      <Banner
        {...args}
        appearance={state === 'success' ? 'success' : 'info'}
        title={
          state === 'success' ? 'Action Successful!' : 'Banner with Action'
        }
        description={state === 'loading' ? 'Processing...' : undefined}
        primaryActionLabel={state === 'idle' ? 'Perform Action' : undefined}
        onPrimaryActionClick={state === 'idle' ? handlePrimary : undefined}
      />
    );
  },
};
