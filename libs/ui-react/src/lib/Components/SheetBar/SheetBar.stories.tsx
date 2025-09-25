import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SheetBar } from './SheetBar';

const Container = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className='w-[400px]' {...props} />
);

const meta: Meta<typeof SheetBar> = {
  component: SheetBar,
  title: 'Containment/SheetBar',
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
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'The size variant of the sheet bar',
    },
    title: {
      control: 'text',
      description: 'The main title text',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    onBack: {
      action: 'backed',
      description: 'Callback when back button is clicked',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SheetBar>;

export const Base: Story = {
  args: {
    size: 'sm',
    title: 'Sheet Title',
  },
  render: (args) => (
    <Container>
      <SheetBar {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SheetBar title="Sheet Title" onBack={() => {}} onClose={() => {}} />
        `,
      },
    },
  },
};

export const WithDescription: Story = {
  args: {
    size: 'sm',
    title: 'Sheet Title',
    description: 'Additional information',
  },
  render: (args) => (
    <Container>
      <SheetBar {...args} />
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SheetBar title="Sheet Title" description="Additional information" onBack={() => {}} onClose={() => {}} />
        `,
      },
    },
  },
};

export const SizeShowcase: Story = {
  render: () => (
    <div className='flex flex-col gap-32'>
      <div className='heading-4-semi-bold'>Small Size</div>
      <Container>
        <SheetBar
          size='sm'
          title='Small Sheet Title'
          description='Description'
          onBack={() => {
            console.log('back');
          }}
          onClose={() => {
            console.log('close');
          }}
        />
      </Container>
      <div className='heading-4-semi-bold'>Large Size</div>
      <Container>
        <SheetBar
          size='lg'
          title='Large Title'
          description='Description'
          onBack={() => {
            console.log('back');
          }}
          onClose={() => {
            console.log('close');
          }}
        />
      </Container>
    </div>
  ),
};

export const ContentVariations: Story = {
  render: () => (
    <div className='flex gap-32'>
      <div className='flex flex-col gap-32'>
        <div className='heading-4-semi-bold'>Small Size</div>
        <Container>
          <SheetBar
            size='sm'
            title='With Title Only'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='sm'
            title='With Title and Description'
            description='Additional info'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='sm'
            title='Without Back Button'
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='sm'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
      </div>
      <div className='flex flex-col gap-32'>
        <div className='heading-4-semi-bold'>Large Size</div>
        <Container>
          <SheetBar
            size='lg'
            title='With Title Only'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='lg'
            title='With Title and Description'
            description='Additional info'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='lg'
            title='Without Back Button'
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
        <Container>
          <SheetBar
            size='lg'
            onBack={() => {
              console.log('back');
            }}
            onClose={() => {
              console.log('close');
            }}
          />
        </Container>
      </div>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='flex flex-col gap-32'>
      <div className='grid w-320 grid-cols-1 gap-16 bg-muted-pressed p-16'>
        <div className='text-muted body-4-semi-bold'>
          Small Size - Narrow Container
        </div>
        <SheetBar
          size='sm'
          title='Long Title That Should Truncate In Narrow Container'
          description='Long description that should also truncate appropriately in narrow width'
          onBack={() => {
            console.log('back');
          }}
          onClose={() => {
            console.log('close');
          }}
        />
      </div>
      <div className='grid w-320 grid-cols-1 gap-16 bg-muted-pressed p-16'>
        <div className='text-muted body-4-semi-bold'>
          Large Size - Narrow Container
        </div>
        <SheetBar
          size='lg'
          title='Long Title That Should Wrap'
          description='Long description that should wrap'
          onBack={() => {
            console.log('back');
          }}
          onClose={() => {
            console.log('close');
          }}
        />
      </div>
    </div>
  ),
};
