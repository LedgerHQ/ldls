import { ThemeProvider, useBottomSheetRef } from '@ledgerhq/ldls-ui-rnative';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetDynamicSize,
  BottomSheetFlatLists,
  BottomSheetsButton,
} from './blocks/BottomSheets';
import { Buttons } from './blocks/Buttons';
import { Checkboxes } from './blocks/Checkboxes';
import { IconButtons } from './blocks/IconButtons';
import { Inputs } from './blocks/Inputs';
import { Switches } from './blocks/Switches';
import { ToggleThemeSwitch } from './blocks/ToggleThemeSwitch';
import { SandboxBlock } from './SandboxBlock';

export const App = () => {
  const bottomSheetFlatListsRef = useBottomSheetRef();
  const bottomSheetDynamicSizeRef = useBottomSheetRef();

  return (
    <SafeAreaView className='flex flex-1 bg-canvas'>
      <StatusBar />
      <ThemeProvider defaultMode='dark' className='flex flex-1'>
        <GestureHandlerRootView className='flex w-full flex-1 bg-accent'>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            className='h-screen bg-canvas px-16 '
          >
            <View className='flex flex-col gap-32 py-40'>
              <SandboxBlock title='Inputs'>
                <Inputs />
              </SandboxBlock>
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
              <SandboxBlock title='BottomSheets'>
                <BottomSheetsButton
                  onPress={() => bottomSheetFlatListsRef.current?.expand()}
                />
                <BottomSheetsButton
                  onPress={() => bottomSheetDynamicSizeRef.current?.expand()}
                />
              </SandboxBlock>
            </View>
          </ScrollView>
          <BottomSheetFlatLists ref={bottomSheetFlatListsRef} />
          <BottomSheetDynamicSize ref={bottomSheetDynamicSizeRef} />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
