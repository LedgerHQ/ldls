// @ts-nocheck
/* eslint-disable */
import { Tile } from './Tile';
import figma from '@figma/code-connect';

figma.connect(
  Tile,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=5783-1328',
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
        title={props.title}
        description={props.description}
        leadingContent={props.leadingContent}
        trailingContent={props.trailingContent}
        secondaryAction={props.secondaryAction}
        disabled={props.disabled}
      />
    ),
  },
);
