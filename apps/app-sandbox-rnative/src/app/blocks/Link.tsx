import { Link as LdlsLink } from '@ledgerhq/ldls-ui-rnative';
import { Information } from '@ledgerhq/ldls-ui-rnative/symbols';
import { Alert, Text, View } from 'react-native';

export function Link() {
  return (
    <View className='gap-8'>
      <LdlsLink href={'https://www.ledger.com/'} isExternal>
        <Text className='text-base'>Open Ledger store</Text>
      </LdlsLink>
      <LdlsLink
        appearance='accent'
        href={'https://www.ledger.com/'}
        isExternal
        underline={false}
      >
        <Text>Open Ledger store</Text>
      </LdlsLink>
      <LdlsLink
        icon={Information}
        onPress={() =>
          Alert.alert(
            'Use your router here',
            'Our design system cannot assume a router (e.g., Expo Router, React Navigation).',
            [{ text: 'Okay' }],
          )
        }
      >
        <Text>Custom navigation</Text>
      </LdlsLink>
      <Text className='flex-row items-center justify-center text-base'>
        If you require assistance, please contact us via our{' '}
        <LdlsLink size='sm' isExternal>
          support page
        </LdlsLink>{' '}
        during business hours (9am-5pm).
      </Text>
    </View>
  );
}
