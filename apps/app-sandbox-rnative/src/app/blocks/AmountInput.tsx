import { AmountInput } from '@ledgerhq/ldls-ui-rnative';
import { useState } from 'react';

export function AmountInputs() {
  const [value, setValue] = useState(0);

  return (
    <AmountInput
      value={value}
      onChangeText={(text) => setValue(parseInt(text))}
    />
  );
}
