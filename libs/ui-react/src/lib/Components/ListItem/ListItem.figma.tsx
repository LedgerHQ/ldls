import React from 'react';
import {
  ListItem,
  ListItemLeading,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
  ListItemSpot,
} from './ListItem';

import figma from '@figma/code-connect';

figma.connect(
  ListItem,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=2255%3A4155',
  {
    imports: [
      "import { ListItem, ListItemLeading, ListItemContent, ListItemTitle, ListItemDescription, ListItemTrailing, ListItemSpot } from '@ledgerhq/lumen-ui-react'",
    ],
    props: {
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      leadingIcon: figma.boolean('show-leading-icon', {
        true: figma.instance('leading-icon'),
        false: undefined,
      }),
      descriptionTag: figma.boolean('show-description-tag', {
        true: figma.instance('description'),
        false: undefined,
      }),
      trailingContent: figma.enum('trailing-content', {
        none: undefined,
        chevron: '{<ChevronRight size={24} />}',
        value: figma.boolean('show-subvalue', {
          true: (
            <ListItemContent align='end'>
              <ListItemTitle>42.00</ListItemTitle>
              <ListItemDescription>USD</ListItemDescription>
            </ListItemContent>
          ),
          false: <ListItemTitle>42.00</ListItemTitle>,
        }),
        icon: figma.instance('trailing-icon'),
        tag: '{<Tag label="New" appearance="accent" />}',
        toggle: '{<Switch selected={selected} />}',
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-listitem-overview--docs',
      },
    ],
    example: (props) => (
      <ListItem disabled={props.disabled}>
        <ListItemLeading>
          {props.leadingIcon && <ListItemSpot appearance='icon' icon={props.leadingIcon} />}
          <ListItemContent>
            <ListItemTitle>{props.title}</ListItemTitle>
            {props.description && (
              <ListItemDescription>
                {props.description}
                {props.descriptionTag}
              </ListItemDescription>
            )}
          </ListItemContent>
        </ListItemLeading>
        {props.trailingContent && (
          <ListItemTrailing>{props.trailingContent}</ListItemTrailing>
        )}
      </ListItem>
    ),
  },
);
