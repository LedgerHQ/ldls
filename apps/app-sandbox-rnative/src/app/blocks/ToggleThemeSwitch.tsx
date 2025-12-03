import { Switch, useColorScheme } from '@ledgerhq/ldls-ui-rnative';
import { Text, View } from 'react-native';

export const ToggleThemeSwitch = () => {
  const { mode, toggleMode } = useColorScheme();
  return (
    <View className='flex flex-row gap-8 text-muted'>
      <Text className='text-base'>Dark mode</Text>
      <Switch checked={mode === 'dark'} onCheckedChange={toggleMode} />
    </View>
  );
};
