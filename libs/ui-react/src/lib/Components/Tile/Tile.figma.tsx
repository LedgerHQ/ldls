import React from 'react';
import {
  Tile,
  TileSpot,
  TileContent,
  TileTitle,
  TileDescription,
  TileSecondaryAction,
} from './Tile';
import { Settings, MoreVertical } from '../../Symbols';

import figma from '@figma/code-connect';

figma.connect(
  Tile,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5783-1328',
  {
    imports: [
      "import { Tile, TileSpot, TileContent, TileTitle, TileDescription, TileSecondaryAction } from '@ledgerhq/lumen-ui-react'",
    ],
    props: {
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      showTag: figma.boolean('show-tag'),
      tag: figma.instance('tag'),
      showSecondaryAction: figma.enum('state', {
        hovered: figma.boolean('show-secondary-action'),
      }),
      appearance: figma.enum('appearance', {
        'no-background': 'no-background',
        card: 'card',
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-Tile-overview--docs',
      },
    ],
    example: (props) => (
      <Tile
        appearance={props.appearance}
        disabled={props.disabled}
        onClick={() => console.log('Tile clicked')}
      >
        {props.showSecondaryAction && (
          <TileSecondaryAction
            icon={MoreVertical as React.ComponentType<{ size?: number }>}
            onClick={() => console.log('Secondary action clicked')}
          />
        )}
        <TileSpot appearance='icon' icon={Settings} />
        <TileContent>
          <TileTitle>{props.title}</TileTitle>
          {props.description && (
            <TileDescription>{props.description}</TileDescription>
          )}
        </TileContent>
        {props.showTag && props.tag}
      </Tile>
    ),
  },
);
