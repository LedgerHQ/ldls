import { Spot, Tag, ListItem } from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';
import { View } from 'react-native';

export const ListItems = () => {
  return (
    <View className='flex w-full items-center gap-8'>
      <ListItem
        className='w-256'
        title='Tile'
        description='Tile description'
        leadingContent={<Spot appearance='icon' icon={Settings} />}
        trailingContent={<Tag label='Tag' appearance='accent' />}
      />
      <ListItem
        className='w-256'
        title='Long Title that should truncate appropriately and not be break off'
        description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        leadingContent={<Spot appearance='icon' icon={Settings} />}
        trailingContent={<Tag label='Tag' appearance='accent' />}
      />
    </View>
  );
};
