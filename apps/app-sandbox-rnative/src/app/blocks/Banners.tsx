import { Banner } from '@ledgerhq/lumen-ui-rnative';
import { View } from 'react-native';

export const Banners = () => {
  return (
    <View className='flex flex-row flex-wrap gap-8'>
      <Banner appearance='info' title='Info' description='Info description' />
      <Banner
        appearance='success'
        title='Success'
        description='Success description'
      />
      <Banner
        appearance='warning'
        title='Warning'
        description='Warning description'
      />
      <Banner
        appearance='error'
        title='Error'
        description='Error description'
      />
    </View>
  );
};
