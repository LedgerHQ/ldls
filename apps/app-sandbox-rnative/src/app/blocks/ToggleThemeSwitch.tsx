import { Switch } from '@ledgerhq/ldls-ui-rnative';
import { ColorSchemeName, Text, View } from 'react-native';

export const ToggleThemeSwitch = ({
  colorScheme,
  setColorScheme,
}: {
  colorScheme: ColorSchemeName;
  setColorScheme: (colorScheme: ColorSchemeName) => void;
}) => {
  return (
    <View className='flex flex-row gap-8 text-muted'>
      <Text className='text-base'>Dark mode</Text>
      <Switch
        checked={colorScheme === 'dark'}
        onCheckedChange={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      />
    </View>
  );
};
