import { Banner } from '@ledgerhq/ldls-ui-rnative';
import { View } from 'react-native';

export const Banners = () => {
  return (
    <View className='flex flex-row flex-wrap gap-8'>
      <Banner appearance='info' title='Info' />
      <Banner appearance='success' title='Success' />
      <Banner appearance='warning' title='Warning' />
      <Banner appearance='error' title='Error' />
    </View>
  );
};
