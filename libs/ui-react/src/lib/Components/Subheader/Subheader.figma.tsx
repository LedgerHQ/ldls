import React from 'react';
import { Subheader, SubheaderProps } from './Subheader';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import { Link } from '../Link/Link';
import { Information } from '../../Symbols';

import figma from '@figma/code-connect';

// Base subheader with title only
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5609-1117',
  {
    variant: { 'show-info': false, 'show-action': false },
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

// Subheader with info tooltip
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5609-1117',
  {
    variant: { 'show-info': true, 'show-action': false },
    imports: [
      "import { Subheader } from '@ledgerhq/lumen-ui-react'",
      "import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/lumen-ui-react'",
      "import { Information } from '@ledgerhq/lumen-ui-react/symbols'",
    ],
    props: {
      title: figma.string('title'),
    },
    example: (props: SubheaderProps) => (
      <Subheader title={props.title}>
        <Subheader.Info>
          <Tooltip>
            <TooltipTrigger asChild>
              <Information
                size={12}
                className='shrink-0 text-muted'
                aria-label='More information'
              />
            </TooltipTrigger>
            <TooltipContent>Additional information</TooltipContent>
          </Tooltip>
        </Subheader.Info>
      </Subheader>
    ),
  },
);

// Subheader with action link
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5609-1117',
  {
    variant: { 'show-info': false, 'show-action': true },
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

// Subheader with both info and action
figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5609-1117',
  {
    variant: { 'show-info': true, 'show-action': true },
    imports: [
      "import { Subheader } from '@ledgerhq/lumen-ui-react'",
      "import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/lumen-ui-react'",
      "import { Information } from '@ledgerhq/lumen-ui-react/symbols'",
    ],
    props: {
      title: figma.string('title'),
    },
    example: (props: SubheaderProps) => (
      <Subheader title={props.title}>
        <Subheader.Info>
          <Tooltip>
            <TooltipTrigger asChild>
              <Information
                size={12}
                className='shrink-0 text-muted'
                aria-label='More information'
              />
            </TooltipTrigger>
            <TooltipContent>Additional information</TooltipContent>
          </Tooltip>
        </Subheader.Info>
        <Subheader.Action>
          <Link href='#' appearance='accent' size='sm'>
            Action
          </Link>
        </Subheader.Action>
      </Subheader>
    ),
  },
);
