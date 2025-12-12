import React from 'react';
import { Subheader, SubheaderProps } from './Subheader';
import { Link } from '../Link/Link';

import figma from '@figma/code-connect';

// Base subheader with title only
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10438-1354',
  {
    variant: { action: 'button' },
    imports: ["import { Subheader } from '@ledgerhq/lumen-ui-react'"],
    props: {
      title: figma.string('title'),
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/communication-subheader--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/communication-subheader--base',
      },
    ],
    example: (props) => <Subheader title={props.title} />,
  },
);

// Subheader with action link
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10438-1354',
  {
    variant: { action: 'button' },
    imports: ["import { Subheader } from '@ledgerhq/lumen-ui-react'"],
    props: {
      title: figma.string('title'),
    },
    example: (props: SubheaderProps) => (
      <Subheader title={props.title}>
        <Subheader.Action>
          <Link href='#' appearance='accent' size='sm'>
            Action
          </Link>
        </Subheader.Action>
      </Subheader>
    ),
  },
);
