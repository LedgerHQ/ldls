import React from 'react';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

import figma from '@figma/code-connect';

// Base banner without actions or close
figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { 'show-actions': false, 'show-close': false },
    imports: ["import { Banner } from '@ledgerhq/ldls-ui-react'"],
    props: {
      appearance: figma.enum('appearance', {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
      }),
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/communication-banner-overview--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/communication-banner--base',
      },
    ],
    example: (props) => (
      <Banner
        appearance={props.appearance}
        title={props.title}
        description={props.description}
      />
    ),
  },
);

// Info banner with actions (gray + no-background buttons)
figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { appearance: 'info', 'show-actions': true },
    imports: [
      "import { Banner } from '@ledgerhq/ldls-ui-react'",
      "import { Button } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      secondaryAction: figma.boolean('show-actions', {
        true: figma.boolean('show-secondary-action', {
          true: (
            <Button appearance='no-background' size='sm' onClick={() => {}}>
              Secondary Action
            </Button>
          ),
          false: undefined,
        }),
        false: undefined,
      }),
    },
    example: (props) => (
      <Banner
        appearance='info'
        title={props.title}
        description={props.description}
        primaryAction={
          <Button appearance='gray' size='sm' onClick={() => {}}>
            Primary Action
          </Button>
        }
        secondaryAction={props.secondaryAction}
      />
    ),
  },
);

// Success/Warning/Error banner with actions (transparent + no-background buttons)
figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { appearance: 'success', 'show-actions': true },
    imports: [
      "import { Banner } from '@ledgerhq/ldls-ui-react'",
      "import { Button } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      appearance: figma.enum('appearance', {
        success: 'success',
        warning: 'warning',
        error: 'error',
      }),
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      secondaryAction: figma.boolean('show-actions', {
        true: figma.boolean('show-secondary-action', {
          true: (
            <Button appearance='no-background' size='sm' onClick={() => {}}>
              Secondary Action
            </Button>
          ),
          false: undefined,
        }),
        false: undefined,
      }),
    },
    example: (props) => (
      <Banner
        appearance={props.appearance}
        title={props.title}
        description={props.description}
        primaryAction={
          <Button appearance='transparent' size='sm' onClick={() => {}}>
            Primary Action
          </Button>
        }
        secondaryAction={props.secondaryAction}
      />
    ),
  },
);

figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { appearance: 'warning', 'show-actions': true },
    imports: [
      "import { Banner } from '@ledgerhq/ldls-ui-react'",
      "import { Button } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      secondaryAction: figma.boolean('show-actions', {
        true: figma.boolean('show-secondary-action', {
          true: (
            <Button appearance='no-background' size='sm' onClick={() => {}}>
              Secondary Action
            </Button>
          ),
          false: undefined,
        }),
        false: undefined,
      }),
    },
    example: (props) => (
      <Banner
        appearance='warning'
        title={props.title}
        description={props.description}
        primaryAction={
          <Button appearance='transparent' size='sm' onClick={() => {}}>
            Primary Action
          </Button>
        }
        secondaryAction={props.secondaryAction}
      />
    ),
  },
);

figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { appearance: 'error', 'show-actions': true },
    imports: [
      "import { Banner } from '@ledgerhq/ldls-ui-react'",
      "import { Button } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      secondaryAction: figma.boolean('show-actions', {
        true: figma.boolean('show-secondary-action', {
          true: (
            <Button appearance='no-background' size='sm' onClick={() => {}}>
              Secondary Action
            </Button>
          ),
          false: undefined,
        }),
        false: undefined,
      }),
    },
    example: (props) => (
      <Banner
        appearance='error'
        title={props.title}
        description={props.description}
        primaryAction={
          <Button appearance='transparent' size='sm' onClick={() => {}}>
            Primary Action
          </Button>
        }
        secondaryAction={props.secondaryAction}
      />
    ),
  },
);

// Banner with close button
figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    variant: { 'show-close': true },
    imports: ["import { Banner } from '@ledgerhq/ldls-ui-react'"],
    props: {
      appearance: figma.enum('appearance', {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
      }),
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
    },
    example: (props) => (
      <Banner
        appearance={props.appearance}
        title={props.title}
        description={props.description}
        onClose={() => {}}
        closeAriaLabel='Close banner'
      />
    ),
  },
);
