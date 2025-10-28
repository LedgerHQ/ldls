import { Switch, useTheme } from '@ledgerhq/ldls-ui-rnative';
import { Text, View } from 'react-native';

export const ToggleThemeSwitch = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <View className='text-muted flex flex-row gap-8'>
      <Text className='text-base'>Dark mode</Text>
      <Switch checked={mode === 'dark'} onCheckedChange={toggleMode} />
    </View>
  );
};
