import { Switch, SupportedLocale } from '@ledgerhq/ldls-ui-rnative';
import { Text, View } from 'react-native';

export const ToggleLocaleSwitch = ({
  locale,
  setLocale,
}: {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}) => {
  return (
    <View className='flex flex-row gap-8 text-muted'>
      <Text className='text-base'>FR</Text>
      <Switch
        checked={locale === 'en'}
        onCheckedChange={() => setLocale(locale === 'en' ? 'fr' : 'en')}
      />
      <Text className='text-base'>EN</Text>
    </View>
  );
};
