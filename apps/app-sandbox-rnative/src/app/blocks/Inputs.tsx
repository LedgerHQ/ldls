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
        label='tiny'
        containerClassName='min-w-full'
        errorMessage='Please enter a valid email address'
      />
      <TextInput
        label='super huge label goes here'
        containerClassName='min-w-full'
      />
    </View>
  );
}
