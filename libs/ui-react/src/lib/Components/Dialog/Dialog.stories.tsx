import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '../Button';
import { Spot } from '../Spot';
import { Dialog, DialogContent, DialogTrigger, DialogHeader } from './Dialog';

const DialogTemplate = ({
  dialogHeaderProps,
  triggerLabel = 'Open Dialog',
}: {
  dialogHeaderProps: Omit<React.ComponentProps<typeof DialogHeader>, 'onClose'>;
  triggerLabel?: string;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button appearance='base'>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader {...dialogHeaderProps} onClose={() => setOpen(false)} />
        <div className='space-y-16'>
          <p className='text-base body-2'>
            The content area after the DialogHeader can contain any components.
            Ensure proper padding and scrolling if needed.
          </p>
          <div className='rounded-sm bg-muted p-12'>
            <p className='text-muted body-3'>
              <strong className='text-base body-3-semi-bold'>Note:</strong> The
              dialog content defaults to a width of 400px and height
              auto-adjusts to content. Use the className prop on DialogContent
              to customize dimensions if needed.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Containment/Dialog',
  subcomponents: {
    DialogHeader,
    DialogContent,
    DialogTrigger,
  },
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
    defaultOpen: {
      control: false,
    },
    open: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        appearance: 'compact',
        title: 'Sheet Title',
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader appearance="compact" title="Sheet Title" onClose={() => setOpen(false)} />
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        appearance: 'compact',
        title: 'Sheet Title',
        description: 'Additional information',
        onBack: () => console.log('Back clicked'),
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent >
    <DialogHeader appearance="compact" title="Sheet Title" description="Additional information" onBack={() => console.log('Back clicked')} onClose={() => setOpen(false)} />
    <div>Content goes here </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const AppearanceVariants: Story = {
  render: () => {
    const [openCompact, setOpenCompact] = React.useState(false);
    const [openExtended, setOpenExtended] = React.useState(false);

    return (
      <div className='flex gap-16'>
        <Dialog open={openCompact} onOpenChange={setOpenCompact}>
          <DialogTrigger asChild>
            <Button appearance='base'>Compact</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader
              appearance='compact'
              title='Sheet Title'
              description='Additional information'
              onClose={() => setOpenCompact(false)}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={openExtended} onOpenChange={setOpenExtended}>
          <DialogTrigger asChild>
            <Button appearance='base'>Extended</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader
              appearance='extended'
              title='Sheet Title'
              description='Additional information'
              onClose={() => setOpenExtended(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
// Compact appearance
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader appearance="compact" title="Sheet Title" description="Additional information" onClose={() => setOpen(false)} />
  </DialogContent>
</Dialog>

// Extended appearance
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader appearance="extended" title="Sheet Title" description="Additional information" onClose={() => setOpen(false)} />
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const WithBack: Story = {
  render: () => {
    const [openCompact, setOpenCompact] = React.useState(false);
    const [openExtended, setOpenExtended] = React.useState(false);

    return (
      <div className='flex gap-16'>
        <Dialog open={openCompact} onOpenChange={setOpenCompact}>
          <DialogTrigger asChild>
            <Button appearance='base'>Compact with Back</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader
              appearance='compact'
              title='Sheet Title'
              description='Additional information'
              onClose={() => setOpenCompact(false)}
              onBack={() => console.log('Back clicked')}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={openExtended} onOpenChange={setOpenExtended}>
          <DialogTrigger asChild>
            <Button appearance='base'>Extended with Back</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader
              appearance='extended'
              title='Sheet Title'
              description='Additional information'
              onClose={() => setOpenExtended(false)}
              onBack={() => console.log('Back clicked')}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
// Compact appearance with back button
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader 
      appearance="compact" 
      title="Sheet Title" 
      description="Additional information"
      onBack={() => console.log('Back clicked')}
      onClose={() => setOpen(false)} 
    />
  </DialogContent>
</Dialog>

// Extended appearance with back button
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader 
      appearance="extended" 
      title="Sheet Title" 
      description="Additional information"
      onBack={() => console.log('Back clicked')}
      onClose={() => setOpen(false)} 
    />
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const ExtendedWithDescription: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        appearance: 'extended',
        title: 'Extended Sheet Title',
        description: 'Additional information',
      }}
    />
  ),
};

export const ExtendedWithBack: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        appearance: 'extended',
        title: 'Extended Sheet Title',
        onBack: () => console.log('Back clicked'),
      }}
    />
  ),
};

export const InfoStateError: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button appearance='base'>Open Error Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            appearance='compact'
            onClose={() => setOpen(false)}
            className='relative'
          />
          <div className='flex flex-col items-center gap-24 overflow-hidden'>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-error' />

            <Spot appearance='error' size={72} />

            <div className='flex flex-col items-center gap-12 text-center'>
              <h3 className='text-base heading-3-semi-bold'>Title</h3>
              <p className='text-muted body-2'>Description</p>
            </div>

            <div className='flex w-full flex-col gap-8'>
              <Button appearance='base' size='lg' isFull>
                Label
              </Button>
              <Button appearance='no-background' size='lg' isFull>
                Label
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Error Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader appearance="compact" onClose={() => setOpen(false)} className="relative"/>
    <div className="flex flex-col items-center gap-24 overflow-hidden">
      <div className='pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-error' />
      
      <Spot appearance="error" size={72} />
      
      <div className="flex flex-col items-center gap-12 text-center">
        <h3 className="heading-3-semi-bold text-base">Title</h3>
        <p className="body-2 text-muted">Description</p>
      </div>
      
      <div className="flex w-full flex-col gap-8">
        <Button appearance="base" size="lg" isFull>Label</Button>
        <Button appearance="no-background" size="lg" isFull>Label</Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const InfoStateSuccess: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button appearance='base'>Open Success Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            appearance='compact'
            onClose={() => setOpen(false)}
            className='relative'
          />
          <div className='flex flex-col items-center gap-24 overflow-hidden'>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-success' />

            <Spot appearance='check' size={72} />

            <div className='flex flex-col items-center gap-12 text-center'>
              <h3 className='text-base heading-3-semi-bold'>Title</h3>
              <p className='text-muted body-2'>Description</p>
            </div>

            <div className='flex w-full flex-col gap-8'>
              <Button appearance='base' size='lg' isFull>
                Label
              </Button>
              <Button appearance='no-background' size='lg' isFull>
                Label
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button appearance="base">Open Success Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader appearance="compact" onClose={() => setOpen(false)} className="relative"/>
       <div className="flex flex-col items-center gap-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-success" />
      
      <Spot appearance="check" size={72} />
      
      <div className="flex flex-col items-center gap-12 text-center">
        <h3 className="heading-3-semi-bold text-base">Title</h3>
        <p className="body-2 text-muted">Description</p>
      </div>
      
      <div className="flex w-full flex-col gap-8">
        <Button appearance="base" size="lg" isFull>Label</Button>
        <Button appearance="no-background" size="lg" isFull>Label</Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};
