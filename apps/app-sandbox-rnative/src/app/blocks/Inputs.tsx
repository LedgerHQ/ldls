import { TextInput } from '@ledgerhq/ldls-ui-rnative';
import { View } from 'react-native';

export function Inputs() {
  return (
    <View className='gap-8'>
      <TextInput label='Default input' containerClassName='min-w-full' />
      <TextInput
        label='Disabled input'
        containerClassName='min-w-full'
        defaultValue="You can't edit this!"
        editable={false}
      />
      <TextInput
        label='Error input'
        containerClassName='min-w-full'
        defaultValue='invalid.email'
        errorMessage='Please enter a valid email address'
      />
    </View>
  );
}
