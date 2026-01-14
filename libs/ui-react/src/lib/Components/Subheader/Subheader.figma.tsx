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
      showInfo: figma.boolean('show-info'),
      showDescription: figma.boolean('show-description'),
      description: figma.string('description'),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle } from '@ledgerhq/lumen-ui-react'",
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
    example: ({ title, showInfo, showDescription, description }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showInfo && (
            <Tooltip>
              <TooltipTrigger>
                <SubheaderInfo />
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          )}
        </SubheaderRow>
        {showDescription && (
          <SubheaderDescription>{description}</SubheaderDescription>
        )}
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
      showInfo: figma.boolean('show-info'),
      showDescription: figma.boolean('show-description'),
      description: figma.string('description'),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderAction } from '@ledgerhq/lumen-ui-react'",
      "import { Link } from '@ledgerhq/lumen-ui-react'",
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
    example: ({ title, showInfo, showDescription, description }) => (
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showInfo && (
            <Tooltip>
              <TooltipTrigger>
                <SubheaderInfo />
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          )}
          <SubheaderAction onClick={() => console.log('Action clicked')}>
            <Link href='#' appearance='accent' size='sm'>
              Action
            </Link>
          </SubheaderAction>
        </SubheaderRow>
        {showDescription && (
          <SubheaderDescription>{description}</SubheaderDescription>
        )}
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
      showInfo: figma.boolean('show-info'),
      showNumber: figma.boolean('show-number'),
      showDescription: figma.boolean('show-description'),
      description: figma.string('description'),
    },
    imports: [
      "import { Subheader, SubheaderRow, SubheaderTitle, SubheaderShowMore } from '@ledgerhq/lumen-ui-react'",
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
    example: ({
      title,
      showInfo,
      showNumber,
      showDescription,
      description,
    }) => (
      <Subheader>
        <SubheaderRow onClick={() => console.log('Row clicked')}>
          <SubheaderTitle>{title}</SubheaderTitle>
          {showNumber && <SubheaderCount value={5} />}
          {showInfo && (
            <Tooltip>
              <TooltipTrigger>
                <SubheaderInfo />
              </TooltipTrigger>
              <TooltipContent>Additional information</TooltipContent>
            </Tooltip>
          )}
          <SubheaderShowMore />
        </SubheaderRow>
        {showDescription && (
          <SubheaderDescription>{description}</SubheaderDescription>
        )}
      </Subheader>
    ),
  },
);
