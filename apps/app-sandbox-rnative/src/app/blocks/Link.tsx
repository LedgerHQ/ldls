import { Link as LdlsLink } from '@ledgerhq/ldls-ui-rnative';
import { Github, LedgerLogo, Screens } from '@ledgerhq/ldls-ui-rnative/symbols';
import { Alert, Text, View } from 'react-native';

export function Link() {
  return (
    <View className='gap-8'>
      <LdlsLink
        href={'https://github.com/LedgerHQ/ldls'}
        icon={Github}
        isExternal
      >
        Set up LDLS in your project
      </LdlsLink>
      <LdlsLink
        appearance='accent'
        href={'https://www.ledger.com/'}
        isExternal
        underline={false}
        icon={LedgerLogo}
      >
        Open Ledger store
      </LdlsLink>
      <LdlsLink
        icon={Screens}
        size='sm'
        onPress={() =>
          Alert.alert(
            'Use your router here',
            'Our design system cannot assume a router (e.g., Expo Router, React Navigation).',
            [{ text: 'Okay' }],
          )
        }
      >
        Custom navigation
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
