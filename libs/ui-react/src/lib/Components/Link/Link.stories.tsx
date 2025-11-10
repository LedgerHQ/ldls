import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Settings, Information } from '../../Symbols';
import { Link } from './Link';

const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Action/Link',
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
    icon: {
      control: 'select',
      options: ['None', 'Information', 'Settings'],
      mapping: {
        None: undefined,
        Information: Information,
        Settings: Settings,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;
type LinkAppearance = 'base' | 'accent' | 'inherit';

export const Base: Story = {
  args: {
    appearance: 'base',
    children: 'Base Link',
    href: '#',
    onClick,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link appearance="base" href="#">
  Base Link
</Link>
`,
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    appearance: 'base',
    children: 'Link with Icon',
    icon: Information,
    href: '#',
    onClick,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link
  appearance="base"
  icon={Information}
  href="#"
>
  Link with Icon
</Link>
`,
      },
    },
  },
};

export const External: Story = {
  args: {
    appearance: 'base',
    children: 'External Link',
    isExternal: true,
    href: 'https://ledger.com',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link
  appearance="base"
  isExternal
  href="https://ledger.com"
>
  External Link
</Link>
`,
      },
    },
  },
};

export const ExternalLinkWithIcon: Story = {
  args: {
    appearance: 'base',
    children: 'External Link with Icon',
    icon: Information,
    isExternal: true,
    href: 'https://ledger.com',
  },
  parameters: {
    docs: {
      source: {
        code: `
  <Link
    appearance="base"
    icon={Information}
    isExternal
    href="https://ledger.com"
  >
    External Link with Icon
  </Link>
  `,
      },
    },
  },
};

export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{ name: string; appearance: LinkAppearance }> = [
      { name: 'Base', appearance: 'base' },
      { name: 'Accent', appearance: 'accent' },
    ];

    return (
      <div className='flex gap-32 p-8'>
        {appearances.map(({ name, appearance }) => (
          <Link
            key={appearance}
            appearance={appearance}
            href='#'
            onClick={onClick}
            icon={Information}
            isExternal
          >
            {name}
          </Link>
        ))}
      </div>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => (
    <>
      <div className='flex items-center gap-32 p-8'>
        <Link
          appearance='base'
          size='sm'
          href='#'
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Small
        </Link>
        <Link
          appearance='base'
          size='md'
          href='#'
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Medium
        </Link>
      </div>
      <div className='flex items-center gap-32 p-8'>
        <Link
          appearance='accent'
          size='sm'
          href='#'
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Small Accent
        </Link>
        <Link
          appearance='accent'
          size='md'
          href='#'
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Medium Accent
        </Link>
      </div>
    </>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className='flex w-256 flex-col gap-8 rounded-sm bg-muted p-8'>
      <Link appearance='base' href='#' onClick={onClick}>
        Short Link
      </Link>
      <Link appearance='base' href='#' onClick={onClick}>
        This is a longer link text to show line clamping behavior over two lines
        if necessary
      </Link>
      <Link
        appearance='base'
        href='#'
        icon={Information}
        isExternal
        onClick={onClick}
      >
        Base with long text that should fit
      </Link>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => {
    // Mock RouterLink for demonstration
    const RouterLink = ({
      to,
      children,
      ...props
    }: {
      to: string;
      children: React.ReactNode;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={to} {...props}>
        {children}
      </a>
    );

    return (
      <div className='flex flex-col gap-16 p-8'>
        <Link asChild appearance='base'>
          <RouterLink to='#'>Dashboard</RouterLink>
        </Link>
        <Link asChild appearance='accent'>
          <a
            href='https://shop.ledger.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            External Link to Ledger Shop
          </a>
        </Link>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
// Example with react-router-dom
import { Link as RouterLink } from 'react-router-dom';

<Link asChild appearance="base">
  <RouterLink to="#">Dashboard</RouterLink>
</Link>

// Example as external link
<Link asChild appearance="accent">
  <a href="https://shop.ledger.com" target="_blank" rel="noopener noreferrer">
    External Link to Ledger Shop
  </a>
</Link>
`,
      },
    },
  },
};

export const InheritVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-24 p-8'>
      <div className='text-error heading-2'>
        <Link appearance='inherit' size='inherit' href='#' onClick={onClick}>
          Inherits parent heading-2 and text-error
        </Link>
      </div>
      <div className='text-muted body-3'>
        <Link appearance='inherit' size='inherit' href='#' onClick={onClick}>
          Inherits parent body-3 and text-muted
        </Link>
      </div>
      <div className='text-error body-1-semi-bold'>
        <Link
          appearance='inherit'
          size='inherit'
          underline={false}
          href='#'
          onClick={onClick}
        >
          Inherits parent styles without underline
        </Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div className='heading-2 text-error'>
  <Link appearance='inherit' size='inherit' href='#'>
    Inherits parent heading-2 and text-error
  </Link>
</div>

<div className='body-3 text-muted'>
  <Link appearance='inherit' size='inherit' href='#'>
    Inherits parent body-3 and text-muted
  </Link>
</div>

<div className='body-1-semi-bold text-error'>
  <Link appearance='inherit' size='inherit' underline={false} href='#'>
    Inherits parent styles without underline
  </Link>
</div>
`,
      },
    },
  },
};
