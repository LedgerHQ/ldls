import { Box, Spot, Tag, Tile } from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';

export const Tiles = () => {
  return (
    <Box lx={{ width: 'full', alignItems: 'center', gap: 's8' }}>
      <Tile
        lx={{ width: 's256' }}
        title='Tile'
        description='Tile description'
        leadingContent={<Spot appearance='icon' icon={Settings} />}
        trailingContent={<Tag label='Tag' appearance='accent' />}
      />
      <Tile
        lx={{ width: 's256' }}
        title='Long Title that should truncate appropriately and not be break off'
        description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        leadingContent={<Spot appearance='icon' icon={Settings} />}
        trailingContent={<Tag label='Tag' appearance='accent' />}
      />
    </Box>
  );
};
