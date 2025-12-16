import { Tag } from '@ledgerhq/lumen-ui-rnative';
import { ExternalLink } from '@ledgerhq/lumen-ui-rnative/symbols';
import { View } from 'react-native';

export const Tags = () => {
  return (
    <View className='gap-32'>
      <View className='flex flex-row flex-wrap gap-8'>
        <Tag appearance='accent' label='Accent' icon={ExternalLink} />
        <Tag appearance='base' label='Base' icon={ExternalLink} />
        <Tag appearance='gray' label='Gray' icon={ExternalLink} />
        <Tag appearance='success' label='Success' icon={ExternalLink} />
        <Tag appearance='error' label='Error' icon={ExternalLink} />
        <Tag appearance='warning' label='Warning' icon={ExternalLink} />
        <Tag label='Disabled' icon={ExternalLink} disabled />
      </View>
      <View className='flex flex-row gap-8'>
        <Tag appearance='accent' label='Accent' size='lg' />
        <Tag appearance='accent' label='Accent' size='sm' />
      </View>
    </View>
  );
};
