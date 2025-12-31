import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Settings,
  Plus,
  User,
  PenEdit,
  Wallet,
  Cart,
  Apps,
  ChevronRight,
  Chart1,
} from '../../Symbols';
import { Switch } from '../Switch';
import { Tag } from '../Tag/Tag';
import {
  ListItem,
  ListItemLeading,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
  ListItemSpot,
  ListItemTruncate,
} from './ListItem';

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'Containment/ListItem',
  subcomponents: {
    ListItemLeading,
    ListItemContent,
    ListItemTitle,
    ListItemDescription,
    ListItemTrailing,
    ListItemSpot,
    ListItemTruncate,
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
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Base: Story = {
  args: {
    className: 'max-w-320 gap-4',
  },
  render: (args) => (
    <ListItem {...args}>
      <ListItemLeading>
        <ListItemSpot appearance='icon' icon={Settings} />
        <ListItemContent>
          <ListItemTitle>Item with Icon and Description</ListItemTitle>
          <ListItemDescription>Additional information</ListItemDescription>
        </ListItemContent>
      </ListItemLeading>
    </ListItem>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<ListItem>
  <ListItemLeading>
    <Spot appearance="icon" icon={Settings} />
    <ListItemContent>
      <ListItemTitle>Item with Icon and Description</ListItemTitle>
      <ListItemDescription>Additional information</ListItemDescription>
    </ListItemContent>
  </ListItemLeading>
</ListItem>
`,
      },
    },
  },
};

export const VariantsShowcase: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div className='max-w-320 flex flex-col gap-4'>
        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Chart1} />
            <ListItemContent>
              <ListItemTitle>Simple composition</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={User} />
            <ListItemContent>
              <ListItemTitle>Caret Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ChevronRight size={24} />
          </ListItemTrailing>
        </ListItem>

        <ListItem onClick={() => setSelected(!selected)}>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Wallet} />
            <ListItemContent>
              <ListItemTitle>Switch Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <Switch tabIndex={-1} selected={selected} />
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Cart} />
            <ListItemContent>
              <ListItemTitle>Value Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ListItemContent align='end'>
              <ListItemTitle>42.10</ListItemTitle>
              <ListItemDescription>USD</ListItemDescription>
            </ListItemContent>
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Wallet} />
            <ListItemContent>
              <ListItemTitle>Content Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <div className='body-2-semi-bold'>$3,000</div>
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Apps} />
            <ListItemContent>
              <ListItemTitle>Tag Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <Tag size='sm' label='New' appearance='accent' />
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Settings} />
            <ListItemContent>
              <ListItemTitle>Icon Variant</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <PenEdit size={24} />
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Cart} />
            <ListItemContent>
              <ListItemTitle className='flex gap-6'>
                <ListItemTruncate>Complex 1</ListItemTruncate>
                <Tag size='sm' label='New' appearance='base' />
              </ListItemTitle>
              <ListItemDescription className='flex gap-6'>
                <ListItemTruncate>With description</ListItemTruncate>
                <Tag size='sm' label='Custom Tag' appearance='gray' />
              </ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ListItemContent align='end'>
              <ListItemTitle>42.10</ListItemTitle>
              <ListItemDescription>USD</ListItemDescription>
            </ListItemContent>
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Cart} />
            <ListItemContent>
              <ListItemTitle>Complex 2</ListItemTitle>
              <ListItemDescription>With description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ListItemContent align='end'>
              <ListItemTitle className='flex gap-6'>
                <Tag size='sm' label='New' appearance='base' />
                <ListItemTruncate>1200.12</ListItemTruncate>
              </ListItemTitle>
              <ListItemDescription className='flex gap-6'>
                <Tag size='sm' label='BTC' appearance='gray' />
              </ListItemDescription>
            </ListItemContent>
          </ListItemTrailing>
        </ListItem>
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className='w-320 flex flex-col gap-4'>
      <ListItem {...args}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Settings} />
          <ListItemContent>
            <ListItemTitle>Disabled Item</ListItemTitle>
            <ListItemDescription>This item is disabled</ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <Switch selected={false} disabled={args.disabled} />
        </ListItemTrailing>
      </ListItem>

      <ListItem {...args}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Settings} />
          <ListItemContent>
            <ListItemTitle>Disabled Item</ListItemTitle>
            <ListItemDescription>This item is disabled</ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <ChevronRight size={24} />
        </ListItemTrailing>
      </ListItem>

      <ListItem {...args}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Cart} />
          <ListItemContent>
            <ListItemTitle>Value Variant</ListItemTitle>
            <ListItemDescription>With description</ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <ListItemContent align='end'>
            <ListItemTitle>42.10</ListItemTitle>
            <ListItemDescription>USD</ListItemDescription>
          </ListItemContent>
        </ListItemTrailing>
      </ListItem>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<ListItem disabled>
  <ListItemLeading>
    <ListItemSpot appearance="icon" icon={Settings} />
    <ListItemContent>
      <ListItemTitle>Disabled Item</ListItemTitle>
      <ListItemDescription>This item is disabled</ListItemDescription>
    </ListItemContent>
  </ListItemLeading>
  <ListItemTrailing>
    <ChevronRight size={24} className="text-disabled" />
  </ListItemTrailing>
</ListItem>
`,
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='w-400 border-muted-subtle grid grid-cols-1 gap-4 border p-16'>
      <div className='text-muted body-4-semi-bold'>Container: 320px wide</div>
      <div>
        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Plus} />
            <ListItemContent>
              <ListItemTitle>Short Title</ListItemTitle>
              <ListItemDescription>Short description</ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ChevronRight size={24} className='text-muted' />
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Plus} />
            <ListItemContent>
              <ListItemTitle>
                Long Title that should truncate appropriately
              </ListItemTitle>
              <ListItemDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ChevronRight size={24} className='text-muted' />
          </ListItemTrailing>
        </ListItem>

        <ListItem>
          <ListItemLeading>
            <ListItemSpot appearance='icon' icon={Cart} />
            <ListItemContent>
              <ListItemTitle className='flex gap-6'>
                <ListItemTruncate>
                  Long Title that should truncate appropriately
                </ListItemTruncate>
                <Tag size='sm' label='New' appearance='base' />
              </ListItemTitle>
              <ListItemDescription className='flex gap-6'>
                <ListItemTruncate>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </ListItemTruncate>
                <Tag size='sm' label='Custom Tag' appearance='gray' />
              </ListItemDescription>
            </ListItemContent>
          </ListItemLeading>
          <ListItemTrailing>
            <ListItemContent align='end'>
              <ListItemTitle>42.10</ListItemTitle>
              <ListItemDescription>USD</ListItemDescription>
            </ListItemContent>
          </ListItemTrailing>
        </ListItem>
      </div>
    </div>
  ),
};
