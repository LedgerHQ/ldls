import React from 'react';
import { Tile } from './Tile';
import { Spot } from '../Spot/Spot';
import { InteractiveIcon } from '../InteractiveIcon/InteractiveIcon';
import { Settings, MoreVertical } from '../../Symbols';

import figma from '@figma/code-connect';
import { TileProps } from './types';

figma.connect(
  Tile,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=5783-1328',
  {
    imports: ["import { Tile } from '@ledgerhq/ldls-ui-react'"],
    props: {
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      leadingContent: <Spot appearance='icon' icon={Settings} />,
      trailingContent: figma.boolean('show-tag', {
        true: figma.instance('tag'),
        false: undefined,
      }),
      secondaryAction: figma.enum('state', {
        hovered: figma.boolean('show-secondary-action', {
          true: (
            <InteractiveIcon
              iconType='stroked'
              aria-label='More actions'
              onClick={() => console.log('secondary action clicked')}
            >
              <MoreVertical />
            </InteractiveIcon>
          ),
          false: undefined,
        }),
      }),

      size: figma.enum('size', {
        md: 'md',
        sm: 'sm',
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
    example: (props: TileProps) => (
      <Tile
        title={props.title}
        description={props.description}
        leadingContent={props.leadingContent}
        trailingContent={props.trailingContent}
        secondaryAction={props.secondaryAction}
        size={props.size}
        appearance={props.appearance}
        disabled={props.disabled}
        onClick={() => console.log('Tile clicked')}
      />
    ),
  },
);
