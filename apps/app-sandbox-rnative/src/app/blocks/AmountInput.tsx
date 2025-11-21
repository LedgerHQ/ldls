import { AmountInput, IconButton } from '@ledgerhq/ldls-ui-rnative';
import { TransferVertical } from '@ledgerhq/ldls-ui-rnative/symbols';
import { useState } from 'react';
import { View, Text } from 'react-native';

export function AmountInputs() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [isXrp, setIsXrp] = useState(false);

  return (
    <View className='w-full'>
      <View className='w-full items-center justify-center'>
        <View className='items-center'>
          <AmountInput
            value={value1}
            onChangeText={setValue1}
            currencyText='€'
            maxDecimalLength={2}
            maxIntegerLength={6}
          />
          <Text className='text-muted body-2'>Default</Text>
        </View>
        <View className='my-24 h-2 w-1/2 bg-surface' />
        <View className='items-center'>
          <AmountInput
            value={value2}
            onChangeText={setValue2}
            placeholder='0'
            currencyText='BTC'
            currencyPosition='right'
          />
          <Text className='text-muted body-2'>Right-aligned currency</Text>
        </View>
        <View className='my-24 h-2 w-1/2 bg-surface' />
        <View className='items-center'>
          <AmountInput
            value={value3}
            onChangeText={setValue3}
            placeholder='0'
            currencyText='$'
            isInvalid={Number(value3.replace(/\s/g, '')) > 10}
            maxDecimalLength={2}
          />
          <Text className='text-muted body-2'>With error if above $10</Text>
        </View>
        <View className='my-24 h-2 w-1/2 bg-surface' />
        <View className='flex-row items-center'>
          <View className='relative items-center'>
            <AmountInput
              className='relative'
              value={`${isXrp ? '0' : value4}`}
              onChangeText={setValue4}
              placeholder='0'
              currencyText='$'
              maxDecimalLength={2}
            />
            <Text className='text-base body-2'>{`${isXrp ? value4 : '0'} XRP`}</Text>
          </View>
          <IconButton
            accessibilityLabel='Flip'
            icon={TransferVertical}
            size='xs'
            appearance='gray'
            className='absolute -right-40 top-12'
            onPress={() => setIsXrp(!isXrp)}
          />
        </View>
        <Text className='mt-8 text-muted body-2'>Currency converter</Text>
      </View>
    </View>
  );
}
