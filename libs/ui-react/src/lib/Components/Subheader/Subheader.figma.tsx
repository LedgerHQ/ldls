import React from 'react';
import {
  Subheader,
  SubheaderRow,
  SubheaderTitle,
  SubheaderAction,
  SubheaderCount,
  SubheaderDescription,
  SubheaderInfo,
  SubheaderShowMore,
} from './Subheader';
import { Link } from '../Link/Link';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';

import figma from '@figma/code-connect';

figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10438-1354',
  {
    variant: { action: 'none' },
    props: {
      title: figma.string('title'),
      description: figma.string('description'),
      info: figma.boolean('show-info', {
        true: (
          <Tooltip>
            <TooltipTrigger>
              <SubheaderInfo />
            </TooltipTrigger>
            <TooltipContent>Additional information</TooltipContent>
          </Tooltip>
        ),
        false: undefined,
      }),
      descriptionBlock: figma.boolean('show-description', {
        true: (
          <SubheaderDescription>
            {figma.string('description')}
          </SubheaderDescription>
        ),
        false: undefined,
      }),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderDescription } from '@ledgerhq/lumen-ui-react'",
      "import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/lumen-ui-react'",
    ],
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
    example: ({ title, info, descriptionBlock }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {info}
        </SubheaderRow>
        {descriptionBlock}
      </Subheader>
    ),
  },
);

figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10438-1354',
  {
    variant: { action: 'button' },
    props: {
      title: figma.string('title'),
      description: figma.string('description'),
      info: figma.boolean('show-info', {
        true: (
          <Tooltip>
            <TooltipTrigger>
              <SubheaderInfo />
            </TooltipTrigger>
            <TooltipContent>Additional information</TooltipContent>
          </Tooltip>
        ),
        false: undefined,
      }),
      descriptionBlock: figma.boolean('show-description', {
        true: (
          <SubheaderDescription>
            {figma.string('description')}
          </SubheaderDescription>
        ),
        false: undefined,
      }),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderAction, SubheaderDescription } from '@ledgerhq/lumen-ui-react'",
      "import { Link, Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/lumen-ui-react'",
    ],
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/communication-subheader--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/communication-subheader--complete',
      },
    ],
    example: ({ title, info, descriptionBlock }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {info}
          <SubheaderAction onClick={() => console.log('Action clicked')}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
        {descriptionBlock}
      </Subheader>
    ),
  },
);

figma.connect(
  Subheader,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10438-1354',
  {
    variant: { action: 'show-more' },
    props: {
      title: figma.string('title'),
      description: figma.string('description'),
      count: figma.boolean('show-number', {
        true: <SubheaderCount value={5} />,
        false: undefined,
      }),
      descriptionBlock: figma.boolean('show-description', {
        true: (
          <SubheaderDescription>
            {figma.string('description')}
          </SubheaderDescription>
        ),
        false: undefined,
      }),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderCount, SubheaderShowMore, SubheaderDescription } from '@ledgerhq/lumen-ui-react'",
    ],
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/communication-subheader--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/communication-subheader--with-show-more',
      },
    ],
    example: ({ title, count, descriptionBlock }) => (
      <Subheader>
        <SubheaderRow onClick={() => console.log('Row clicked')}>
          <SubheaderTitle>{title}</SubheaderTitle>
          {count}
          <SubheaderShowMore />
        </SubheaderRow>
        {descriptionBlock}
      </Subheader>
    ),
  },
);
