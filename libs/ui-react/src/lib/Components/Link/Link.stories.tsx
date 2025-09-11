import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { Settings, Information } from '../../Symbols';

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
    appearance: {
      control: 'select',
      options: ['underlined', 'accent'],
      description: 'The visual style appearance of the link',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'The size of the link',
    },
    icon: {
      control: 'select',
      description: 'Optional icon component to display',
      options: ['None', 'Information', 'Settings'],
      mapping: {
        None: undefined,
        Information: Information,
        Settings: Settings,
      },
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the link',
    },
    isExternal: {
      control: 'boolean',
      description: 'Whether the link is external',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
    },
    href: {
      control: 'text',
      description: 'The URL to link to',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;
type LinkAppearance = 'underlined' | 'accent';

export const Base: Story = {
  args: {
    appearance: 'underlined',
    children: 'Underlined Link',
    href: '#',
    onClick,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link appearance="underlined" href="#">
  Underlined Link
</Link>
`,
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    appearance: 'underlined',
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
  appearance="underlined"
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
    appearance: 'underlined',
    children: 'External Link',
    isExternal: true,
    href: 'https://ledger.com',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link
  appearance="underlined"
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
    appearance: 'underlined',
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
    appearance="underlined"
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
      { name: 'Underlined', appearance: 'underlined' },
      { name: 'Accent', appearance: 'accent' },
    ];

    return (
      <div className="flex gap-32 p-8">
        {appearances.map(({ name, appearance }) => (
          <Link
            key={appearance}
            appearance={appearance}
            href="#"
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
      <div className="flex items-center gap-32 p-8">
        <Link
          appearance="underlined"
          size="sm"
          href="#"
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Small
        </Link>
        <Link
          appearance="underlined"
          size="md"
          href="#"
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Medium
        </Link>
      </div>
      <div className="flex items-center gap-32 p-8">
        <Link
          appearance="accent"
          size="sm"
          href="#"
          onClick={onClick}
          icon={Information}
          isExternal
        >
          Small Accent
        </Link>
        <Link
          appearance="accent"
          size="md"
          href="#"
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
    <div className="flex w-256 flex-col gap-8 rounded-sm bg-muted p-8">
      <Link appearance="underlined" href="#" onClick={onClick}>
        Short Link
      </Link>
      <Link appearance="underlined" href="#" onClick={onClick}>
        This is a longer link text to show line clamping behavior over two lines
        if necessary
      </Link>
      <Link
        appearance="underlined"
        href="#"
        icon={Information}
        isExternal
        onClick={onClick}
      >
        Underlined with long text that should fit
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
      <div className="flex flex-col gap-16 p-8">
        <Link asChild appearance="underlined">
          <RouterLink to="#">Dashboard</RouterLink>
        </Link>
        <Link asChild appearance="accent">
          <a
            href="https://shop.ledger.com"
            target="_blank"
            rel="noopener noreferrer"
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

<Link asChild appearance="underlined">
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
