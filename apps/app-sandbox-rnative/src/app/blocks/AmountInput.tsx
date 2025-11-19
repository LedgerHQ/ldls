import { AmountInput } from '@ledgerhq/ldls-ui-rnative';
import { useState } from 'react';
import { View } from 'react-native';

export function AmountInputs() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <View>
      <AmountInput
        value={value1}
        onChangeText={setValue1}
        placeholder='0'
        currencyText='$'
        currencyPosition='left'
      />
      <AmountInput
        value={value2}
        onChangeText={setValue2}
        placeholder='0'
        currencyText='BTC'
        currencyPosition='right'
        isInvalid
        maxLength={5}
      />
    </View>
  );
}
