import { TextInput } from '@ledgerhq/ldls-ui-rnative';
import { View } from 'react-native';

export function Inputs() {
  return (
    <View className='gap-8'>
      <TextInput label='Label' containerClassName='min-w-full' />
      <TextInput label='Label' containerClassName='min-w-full' />
    </View>
  );
}
