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
  ListItemIcon,
  ListItemTruncate,
} from '@ledgerhq/lumen-ui-rnative';
import {
  ChevronRight,
  Settings,
  Wallet,
} from '@ledgerhq/lumen-ui-rnative/symbols';

export const ListItems = () => {
  return (
    <Box lx={{ width: 'full', gap: 's8' }}>
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

      <ListItem lx={{ width: 's256' }}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Settings} />
          <ListItemContent>
            <ListItemTitle>Tile</ListItemTitle>
            <ListItemDescription>Tile description</ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <ListItemContent>
            <ListItemTitle>USD</ListItemTitle>
            <ListItemDescription>+7.52%</ListItemDescription>
          </ListItemContent>
        </ListItemTrailing>
      </ListItem>

      <ListItem lx={{ width: 's256' }}>
        <ListItemLeading>
          <ListItemSpot appearance='icon' icon={Wallet} />
          <ListItemContent>
            <ListItemTitle>
              <ListItemTruncate variant='title'>Complex 1</ListItemTruncate>
              <Tag size='sm' label='New' appearance='success' />
            </ListItemTitle>
            <ListItemDescription>
              <ListItemTruncate>With description</ListItemTruncate>
              <Tag size='sm' label='Custom Tag' appearance='warning' />
            </ListItemDescription>
          </ListItemContent>
        </ListItemLeading>
        <ListItemTrailing>
          <ListItemContent>
            <ListItemTitle>42.10</ListItemTitle>
            <ListItemDescription>USD</ListItemDescription>
          </ListItemContent>
        </ListItemTrailing>
      </ListItem>

      <ListItem lx={{ width: 's256' }}>
        <ListItemLeading>
          <ListItemIcon icon={Wallet} />
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
          <ListItemIcon icon={ChevronRight} />
        </ListItemTrailing>
      </ListItem>
    </Box>
  );
};
