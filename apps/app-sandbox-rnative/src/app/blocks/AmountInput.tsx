import { AmountInput } from '@ledgerhq/ldls-ui-rnative';
import { useState } from 'react';
import { View } from 'react-native';

export function AmountInputs() {
  const [value, setValue] = useState('');

  return (
    <View>
      <AmountInput
        value={value}
        onChangeText={setValue}
        placeholder='0'
        currencyText='€'
        currencyPosition='left'
      />
    </View>
  );
}
