import {
  Box,
  Tag,
  Tile,
  TileContent,
  TileDescription,
  TileSpot,
  TileTitle,
} from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';

export const Tiles = () => {
  return (
    <Box lx={{ width: 'full', alignItems: 'center', gap: 's8' }}>
      <Box lx={{ flexDirection: 'row', gap: 's8' }}>
        <Tile lx={{ width: 's112' }}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Tile 1</TileTitle>
            <TileDescription>Tile description</TileDescription>
          </TileContent>
        </Tile>
        <Tile lx={{ width: 's112' }}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Tile 2</TileTitle>
            <TileDescription>Tile description</TileDescription>
          </TileContent>
        </Tile>
        <Tile lx={{ width: 's112' }}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Tile 3</TileTitle>
            <TileDescription>Tile description</TileDescription>
          </TileContent>
          <Tag label='Tag' appearance='accent' />
        </Tile>
      </Box>

      <Tile>
        <TileSpot appearance='icon' icon={Settings} />
        <TileContent>
          <TileTitle>
            Long Title that should truncate appropriately and not be break off
          </TileTitle>
          <TileDescription>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </TileDescription>
        </TileContent>
      </Tile>
    </Box>
  );
};
