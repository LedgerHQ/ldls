import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
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
      <DialogContent className='w-[500px]'>
        <DialogHeader {...dialogHeaderProps} onClose={() => setOpen(false)} />
        <div className='h-256' />
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
  <DialogContent className="w-[500px]">
    <DialogHeader title="Sheet Title" onClose={() => setOpen(false)} />
    <div className="h-256" />
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
  <DialogContent className="w-[500px]">
    <DialogHeader title="Sheet Title" description="Additional information" onClose={() => setOpen(false)} />
    <div className="h-256" />
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
  <DialogContent className="w-[500px]">
    <DialogHeader title="Sheet Title" onBack={() => console.log('Back clicked')} onClose={() => setOpen(false)} />
    <div className="h-256" />
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
  <DialogContent className="w-[500px]">
    <DialogHeader title="Large Sheet Title" onClose={() => setOpen(false)} />
    <div className="h-256" />
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
