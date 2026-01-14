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
      showInfo: figma.boolean('show-info'),
      showDescription: figma.boolean('show-description'),
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
    example: ({ title, description, showInfo, showDescription }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showInfo ? (
            <Tooltip>
              <TooltipTrigger>
                <SubheaderInfo />
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          ) : null}
        </SubheaderRow>
        {showDescription ? (
          <SubheaderDescription>{description}</SubheaderDescription>
        ) : null}
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
      showInfo: figma.boolean('show-info'),
      showDescription: figma.boolean('show-description'),
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
    example: ({ title, description, showInfo, showDescription }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showInfo ? (
            <Tooltip>
              <TooltipTrigger>
                <SubheaderInfo />
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          ) : null}
          <SubheaderAction onClick={() => console.log('Action clicked')}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
        {showDescription ? (
          <SubheaderDescription>{description}</SubheaderDescription>
        ) : null}
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
      showNumber: figma.boolean('show-number'),
      showDescription: figma.boolean('show-description'),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderCount, SubheaderShowMore, SubheaderDescription } from '@ledgerhq/lumen-ui-react'",
      "import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/lumen-ui-react'",
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
    example: ({ title, description, showNumber, showDescription }) => (
      <Subheader>
        <SubheaderRow onClick={() => console.log('Row clicked')}>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showNumber ? <SubheaderCount value={5} /> : null}
          <SubheaderShowMore />
        </SubheaderRow>
        {showDescription ? (
          <SubheaderDescription>{description}</SubheaderDescription>
        ) : null}
      </Subheader>
    ),
  },
);
