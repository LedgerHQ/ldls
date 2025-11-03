import { ThemeProvider } from '@ledgerhq/ldls-ui-rnative';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Buttons } from './blocks/Buttons';
import { Checkboxes } from './blocks/Checkboxes';
import { IconButtons } from './blocks/IconButtons';
import { Switches } from './blocks/Switches';
import { ToggleThemeSwitch } from './blocks/ToggleThemeSwitch';
import { SandboxBlock } from './SandboxBlock';

export const App = () => {
  return (
    <SafeAreaView className='flex flex-1'>
      <StatusBar />
      <ThemeProvider defaultMode='dark' className='flex flex-1'>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          className='h-screen bg-canvas-sheet px-16 '
        >
          <View className='flex flex-col gap-32 py-40'>
            <SandboxBlock title='Checkboxes'>
              <Checkboxes />
            </SandboxBlock>
            <SandboxBlock title='Switches'>
              <Switches />
            </SandboxBlock>
            <SandboxBlock title='Buttons'>
              <Buttons />
            </SandboxBlock>
            <SandboxBlock title='IconButtons'>
              <IconButtons />
            </SandboxBlock>
            <SandboxBlock title='ToggleThemeSwitch'>
              <ToggleThemeSwitch />
            </SandboxBlock>
          </View>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
