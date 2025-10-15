import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader } from './Dialog';
import { Spot } from '../Spot';

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
          <p className='body-2 text-base'>
            The content area after the DialogHeader can contain any components.
            Ensure proper padding and scrolling if needed.
          </p>
          <div className='rounded-sm bg-muted p-12'>
            <p className='body-3 text-muted'>
              <strong className='body-3-semi-bold text-base'>Note:</strong> The
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
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        size: 'sm',
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
  <DialogContent >
    <DialogHeader title="Sheet Title" onClose={() => setOpen(false)} />
    <div>Content goes here</div>
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
        size: 'sm',
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
    <DialogHeader title="Sheet Title" description="Additional information" onBack={() => console.log('Back clicked')} onClose={() => setOpen(false)} />
    <div>Content goes here </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const WithBack: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        size: 'sm',
        title: 'Sheet Title',
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
    <DialogHeader title="Sheet Title" onBack={() => console.log('Back clicked')} onClose={() => setOpen(false)} />
    <div>Content goes here </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const Large: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        size: 'lg',
        title: 'Large Sheet Title',
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
    <DialogHeader title="Large Sheet Title" onClose={() => setOpen(false)} />
    <div>Content goes here </div>
  </DialogContent>
</Dialog>
        `,
      },
    },
  },
};

export const LargeWithDescription: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        size: 'lg',
        title: 'Large Sheet Title',
        description: 'Additional information',
      }}
    />
  ),
};

export const LargeWithBack: Story = {
  render: () => (
    <DialogTemplate
      dialogHeaderProps={{
        size: 'lg',
        title: 'Large Sheet Title',
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
            size='sm'
            onClose={() => setOpen(false)}
            className='relative'
          />
          <div className='flex flex-col items-center gap-24 overflow-hidden'>
            <div className='absolute inset-x-0 top-0 h-full bg-gradient-error pointer-events-none' />

            <Spot appearance='error' size={72} />

            <div className='flex flex-col items-center gap-12 text-center'>
              <h3 className='heading-3-semi-bold text-base'>Title</h3>
              <p className='body-2 text-muted'>Description</p>
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
    <DialogHeader size="sm" onClose={() => setOpen(false)} className="relative"/>
    <div className="flex flex-col items-center gap-24 overflow-hidden">
      <div className='absolute inset-x-0 top-0 h-full bg-gradient-error pointer-events-none' />
      
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
            size='sm'
            onClose={() => setOpen(false)}
            className='relative'
          />
          <div className='flex flex-col items-center gap-24 overflow-hidden'>
            <div className='absolute inset-x-0 top-0 h-full bg-gradient-success pointer-events-none' />

            <Spot appearance='check' size={72} />

            <div className='flex flex-col items-center gap-12 text-center'>
              <h3 className='heading-3-semi-bold text-base'>Title</h3>
              <p className='body-2 text-muted'>Description</p>
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
    <DialogHeader size="sm" onClose={() => setOpen(false)} className="relative"/>
       <div className="flex flex-col items-center gap-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-success pointer-events-none" />
      
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
