import { CardButton } from '@ledgerhq/lumen-ui-rnative';
import { Settings } from '@ledgerhq/lumen-ui-rnative/symbols';
import { View } from 'react-native';

export const CardButtons = () => {
  return (
    <View className='flex flex-row flex-wrap gap-8'>
      <CardButton
        appearance='base'
        title='Info'
        icon={Settings}
        description='Info description'
      />
    </View>
  );
};
