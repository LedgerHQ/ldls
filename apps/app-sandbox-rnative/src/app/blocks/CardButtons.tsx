import { CardButton } from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';
import { View } from 'react-native';

export const CardButtons = () => {
  return (
    <View className='flex w-full flex-row gap-8'>
      <CardButton
        lx={{ flex: 1 }}
        appearance='base'
        title='Info'
        icon={Settings}
        description='Info description'
      />
    </View>
  );
};
