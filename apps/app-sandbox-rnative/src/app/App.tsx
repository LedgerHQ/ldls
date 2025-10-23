import {
  Button,
  IconButton,
  Switch,
  ThemeProvider,
  useTheme,
} from '@ledgerhq/ldls-ui-rnative';
import {
  ExternalLink,
  Link,
  Plus,
  Settings,
} from '@ledgerhq/ldls-ui-rnative/symbols';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

const ToggleThemeButton = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <View className='text-muted flex flex-row gap-8'>
      <Text className='text-base'>Dark mode</Text>
      <Switch checked={mode === 'dark'} onCheckedChange={toggleMode} />
    </View>
  );
};

export const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView className='flex-1'>
        <ThemeProvider defaultMode='system'>
          <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View className='bg-muted size-full p-16'>
              <ToggleThemeButton />
              <Text
                testID='heading'
                role='heading'
                className='mb-24 text-base uppercase'
              >
                Welcome to React Native 👋
              </Text>
              <View className='mt-12 w-full flex-row items-center gap-8'>
                <Button appearance='accent'>Text Only</Button>
                <Button appearance='accent' icon={Plus}>
                  With Icon
                </Button>
              </View>
              <Button
                appearance='accent'
                onPress={() => {
                  console.log('Button pressed');
                }}
              >
                Click me
              </Button>
              <IconButton
                accessibilityLabel='Settings'
                appearance='accent'
                icon={Settings}
              />
            </View>
            <View className='my-12 gap-8'>
              <Text>IconButton</Text>
              <View className='flex-row gap-8'>
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='accent'
                  icon={ExternalLink}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='base'
                  icon={Link}
                />
              </View>
            </View>
          </ScrollView>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
