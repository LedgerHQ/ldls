import {
  Box,
  Tag,
  ListItem,
  ListItemLeading,
  ListItemSpot,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemTrailing,
} from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';

export const ListItems = () => {
  return (
    <Box lx={{ width: 'full', alignItems: 'center', gap: 's8' }}>
      <ListItem lx={{ width: 's256' }}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Settings} />
          <ListItemContent>
            <ListItemTitle>Tile</ListItemTitle>
            <ListItemDescription>Tile description</ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <Tag label='Tag' appearance='accent' />
        </ListItemTrailing>
      </ListItem>

      <ListItem lx={{ width: 's256' }}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Settings} />
          <ListItemContent>
            <ListItemTitle>
              Long Title that should truncate appropriately and not be break off
            </ListItemTitle>
            <ListItemDescription>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <Tag label='Tag' appearance='accent' />
        </ListItemTrailing>
      </ListItem>
    </Box>
  );
};
