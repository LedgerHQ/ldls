import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button, ButtonProps } from '../Button';
import { Close } from '../../Symbols';

const PrimaryButton = (props: ButtonProps) => (
  <Button
    appearance="transparent"
    size="sm"
    onClick={() => console.log('Primary clicked')}
    {...props}
  >
    Primary
  </Button>
);

const SecondaryButton = (props: ButtonProps) => (
  <Button
    appearance="no-background"
    size="sm"
    onClick={() => console.log('Secondary clicked')}
    {...props}
  >
    Secondary
  </Button>
);

const CloseButton = (props: ButtonProps) => (
  <Button
    appearance="transparent"
    size="xs"
    icon={Close}
    onClick={() => console.log('Closed')}
    aria-label="Close banner"
    {...props}
  />
);

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Communication/Banner',
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
  },
  render: (args: BannerProps) => (
    <div className="max-w-md">
      <Banner {...args}>
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
        <Banner.SecondaryAction>
          <SecondaryButton />
        </Banner.SecondaryAction>
      </Banner>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Banner appearance="info" title="Banner with Actions">
  <Banner.PrimaryAction>
    <Button appearance="transparent" size="sm" onClick={() => console.log('Primary clicked')}>
      Primary
    </Button>
  </Banner.PrimaryAction>
  <Banner.SecondaryAction>
    <Button appearance="no-background" size="sm" onClick={() => console.log('Secondary clicked')}>
      Secondary
    </Button>
  </Banner.SecondaryAction>
</Banner>
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
  },
  render: (args: BannerProps) => (
    <div className="max-w-md">
      <Banner {...args}>
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
        <Banner.SecondaryAction>
          <SecondaryButton />
        </Banner.SecondaryAction>
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
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
>
  <Banner.PrimaryAction>
    <Button appearance="transparent" size="sm" onClick={() => console.log('Primary clicked')}>
      Primary
    </Button>
  </Banner.PrimaryAction>
  <Banner.SecondaryAction>
    <Button appearance="no-background" size="sm" onClick={() => console.log('Secondary clicked')}>
      Secondary
    </Button>
  </Banner.SecondaryAction>
  <Banner.CloseAction>
    <Button
      appearance="transparent"
      size="xs"
      onClick={() => console.log('Closed')}
      aria-label="Close banner"
      icon={Close}
    />
  </Banner.CloseAction>
</Banner>
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
          >
            <Banner.CloseAction>
              <CloseButton />
            </Banner.CloseAction>
          </Banner>
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
      <Banner title="With Primary Action">
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
      </Banner>
      <Banner title="With Close" description="Can be dismissed">
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
      <Banner title="With Actions and Description" description="Details">
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
        <Banner.SecondaryAction>
          <SecondaryButton />
        </Banner.SecondaryAction>
      </Banner>
      <Banner
        appearance="info"
        title="Banner with Full Features"
        description="This is additional information about the banner."
      >
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
        <Banner.SecondaryAction>
          <SecondaryButton />
        </Banner.SecondaryAction>
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
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
      >
        <Banner.PrimaryAction>
          <PrimaryButton />
        </Banner.PrimaryAction>
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid w-384 grid-cols-1 gap-16 bg-muted-pressed p-16">
      <div className="text-muted body-4-semi-bold">Container: 384px wide</div>
      <Banner title="Short Title" description="Short description">
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
      <Banner
        title="Constrained Width"
        description="Banner width is controlled by this 384px container"
      >
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
      <Banner
        title="Longer Title That Might Overflow When Container is Smaller"
        description="This is a longer description that demonstrates how the banner handles longer content within its constraints. It should be truncated at 5 lines with an ellipsis, so this line should not be visible."
      >
        <Banner.CloseAction>
          <CloseButton />
        </Banner.CloseAction>
      </Banner>
    </div>
  ),
};

export const InteractiveDismiss: Story = {
  render: (args: BannerProps) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) return <p>Banner dismissed</p>;

    return (
      <div className="max-w-md">
        <Banner {...args} title="Click close to dismiss">
          <Banner.CloseAction>
            <CloseButton onClick={() => setVisible(false)} />
          </Banner.CloseAction>
        </Banner>
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
        >
          {state === 'idle' && (
            <Banner.PrimaryAction>
              <PrimaryButton onClick={handleAccept} />
            </Banner.PrimaryAction>
          )}
          {state === 'idle' && (
            <Banner.SecondaryAction>
              <SecondaryButton onClick={handleReject} />
            </Banner.SecondaryAction>
          )}
          <Banner.CloseAction>
            <CloseButton onClick={() => setState('idle')} />
          </Banner.CloseAction>
        </Banner>
      </div>
    );
  },
};
