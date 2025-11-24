import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import { View, Text } from 'react-native';
import { Settings, Information, ArrowRight } from '../../Symbols';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
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
      options: ['base', 'accent'],
      description: 'The visual style appearance of the link',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'The size of the link',
    },
    underline: {
      control: 'boolean',
      description: 'Whether to underline the link text',
    },
    icon: {
      control: 'select',
      description: 'Optional icon component to display',
      options: ['None', 'Information', 'Settings', 'ArrowRight'],
      mapping: {
        None: undefined,
        Information: Information,
        Settings: Settings,
        ArrowRight: ArrowRight,
      },
    },
    isExternal: {
      control: 'boolean',
      description: 'Whether to display external link icon',
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;
type LinkAppearance = 'base' | 'accent';

export const Base: Story = {
  args: {
    appearance: 'base',
    size: 'md',
    children: 'Base Link',
    href: 'https://ledger.com',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link appearance="base" href="https://ledger.com">
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
    href: 'https://ledger.com',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Link
  appearance="base"
  icon={Information}
  href="https://ledger.com"
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
    size: 'md',
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
  size="md"
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
      <View className='flex-row gap-32 p-8'>
        {appearances.map(({ name, appearance }) => (
          <Link
            key={appearance}
            size='md'
            appearance={appearance}
            href='https://ledger.com'
            icon={Information}
            isExternal
          >
            {name}
          </Link>
        ))}
      </View>
    );
  },
};

export const UnderlineShowcase: Story = {
  render: () => (
    <View className='flex-col gap-16 p-8'>
      <Link appearance='base' size='md' href='https://ledger.com'>
        Link with underline (default)
      </Link>
      <Link
        appearance='base'
        size='md'
        underline={false}
        href='https://ledger.com'
      >
        Link without underline
      </Link>
      <Link
        appearance='accent'
        size='md'
        href='https://ledger.com'
        icon={ArrowRight}
      >
        Accent with underline
      </Link>
      <Link
        appearance='accent'
        size='md'
        underline={false}
        href='https://ledger.com'
        icon={ArrowRight}
      >
        Accent without underline
      </Link>
    </View>
  ),
};

export const SizesShowcase: Story = {
  render: () => (
    <View className='flex-col gap-16'>
      <View className='flex-row items-center gap-32 p-8'>
        <Link
          appearance='base'
          size='sm'
          href='https://ledger.com'
          icon={Information}
          isExternal
        >
          Small
        </Link>
        <Link
          appearance='base'
          size='md'
          href='https://ledger.com'
          icon={Information}
          isExternal
        >
          Medium
        </Link>
      </View>
      <View className='flex-row items-center gap-32 p-8'>
        <Link
          appearance='accent'
          size='sm'
          href='https://ledger.com'
          icon={Information}
          isExternal
        >
          Small Accent
        </Link>
        <Link
          appearance='accent'
          size='md'
          href='https://ledger.com'
          icon={Information}
          isExternal
        >
          Medium Accent
        </Link>
      </View>
    </View>
  ),
};

export const StatesShowcase: Story = {
  render: () => (
    <View className='flex-row items-center gap-16 p-8'>
      <Link appearance='base' href='https://ledger.com'>
        Default
      </Link>
      <Link appearance='accent' href='https://ledger.com' icon={ArrowRight}>
        With Icon
      </Link>
    </View>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <View className='w-256 flex-col gap-8 rounded-sm bg-muted p-8'>
      <Link underline href='https://ledger.com' size='md'>
        Short Link
      </Link>
      <Link appearance='base' href='https://ledger.com' size='md'>
        This is a longer link text to show line clamping behavior over two lines
        if necessary
      </Link>
      <Link
        appearance='base'
        size='md'
        href='https://ledger.com'
        icon={Information}
        isExternal
      >
        Base with long text that should fit
      </Link>
    </View>
  ),
};

export const WithCustomNavigation: Story = {
  render: () => {
    const handlePress = () => {
      console.log('Custom navigation triggered');
      // In a real app: navigation.navigate('Dashboard')
    };

    return (
      <View className='flex-col gap-16 p-8'>
        <Link appearance='base' size='md' onPress={handlePress}>
          Navigate to Dashboard
        </Link>
        <Link
          appearance='accent'
          size='md'
          icon={ArrowRight}
          onPress={handlePress}
        >
          Continue to Next Screen
        </Link>
      </View>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();
  
  return (
    <>
      <Link
        appearance="base"
        size="md"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Navigate to Dashboard
      </Link>
      
      <Link
        appearance="accent"
        size="md"
        icon={ArrowRight}
        onPress={() => navigation.navigate('Next')}
      >
        Continue to Next Screen
      </Link>
    </>
  );
}
`,
      },
    },
  },
};

export const InTextUsage: Story = {
  render: () => (
    <View className='flex-col gap-32 p-8'>
      <Text className='text-base body-2'>
        By continuing, you agree to our{' '}
        <Link appearance='base' size='sm' href='https://ledger.com/terms'>
          Terms & Conditions
        </Link>{' '}
        and{' '}
        <Link appearance='base' size='sm' href='https://ledger.com/privacy'>
          Privacy Policy
        </Link>
        .
      </Text>

      <Text className='text-interactive body-1-semi-bold'>
        Need help?{' '}
        <Link appearance='accent' size='md' href='https://ledger.com/support'>
          Contact Support
        </Link>
      </Text>

      <Text className='text-base body-1-semi-bold'>
        Already have an account?{' '}
        <Link
          appearance='accent'
          size='md'
          underline={false}
          href='https://ledger.com/signin'
        >
          Sign in
        </Link>
      </Text>
    </View>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Links within text content
<Text className='text-base body-2'>
  By continuing, you agree to our{' '}
  <Link appearance='base' size='sm' href='https://ledger.com/terms'>
    Terms & Conditions
  </Link>{' '}
  and{' '}
  <Link appearance='base' size='sm' href='https://ledger.com/privacy'>
    Privacy Policy
  </Link>.
</Text>

// Heading with inline link
<Text className='text-interactive body-1-semi-bold'>
  Need help?{' '}
  <Link appearance='accent' size='md' href='https://ledger.com/support'>
    Contact Support
  </Link>
</Text>

// Bold text with ununderlined link
<Text className='text-base body-1-semi-bold'>
  Already have an account?{' '}
  <Link
    appearance='accent'
    size='md'
    underline={false}
    href='https://ledger.com/signin'
  >
    Sign in
  </Link>
</Text>
`,
      },
    },
  },
};
