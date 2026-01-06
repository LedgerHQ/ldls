import figma from '@figma/code-connect';
import { Settings } from '../../Symbols';
import {
  Tile,
  TileSpot,
  TileContent,
  TileTitle,
  TileDescription,
} from './Tile';

figma.connect(
  Tile,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=5783-1328',
  {
    imports: [
      "import { Tile, TileSpot, TileContent, TileTitle, TileDescription } from '@ledgerhq/lumen-ui-rnative'",
    ],
    props: {
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      showTag: figma.boolean('show-tag'),
      tag: figma.instance('tag'),
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
        disabled={props.disabled}
        onPress={() => console.log('Tile pressed')}
        onLongPress={() => console.log('Long press - secondary action')}
      >
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
