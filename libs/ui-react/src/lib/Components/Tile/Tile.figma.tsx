import React from 'react';
import { Tile } from './Tile';
import { Spot } from '../Spot/Spot';
import { InteractiveIcon } from '../InteractiveIcon/InteractiveIcon';
import { Settings, MoreVertical } from '../../Symbols';
// @ts-expect-error - @figma/code-connect does not have type declarations
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
      secondaryAction: (
        <InteractiveIcon
          iconType='stroked'
          aria-label='More actions'
          onClick={() => console.log('secondary action clicked')}
        >
          <MoreVertical />
        </InteractiveIcon>
      ),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-TileItem-overview--docs',
      },
    ],
    example: (props: TileProps) => (
      <Tile
        title={props.title}
        description={props.description}
        leadingContent={props.leadingContent}
        trailingContent={props.trailingContent}
        secondaryAction={props.secondaryAction}
      />
    ),
  },
);
