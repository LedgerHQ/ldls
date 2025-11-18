import { ThemeProvider, useBottomSheetRef } from '@ledgerhq/ldls-ui-rnative';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AmountInputs,
  BottomSheetDynamicSize,
  BottomSheetFlatLists,
  BottomSheetsButton,
  Buttons,
  Checkboxes,
  IconButtons,
  Spots,
  Switches,
  Tags,
  TextInputs,
  Tiles,
  ToggleThemeSwitch,
} from './blocks';
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
              <SandboxBlock title='Text inputs'>
                <TextInputs />
              </SandboxBlock>
              <SandboxBlock title='Amount inputs'>
                <AmountInputs />
              </SandboxBlock>
              <SandboxBlock title='Checkboxes'>
                <Checkboxes />
              </SandboxBlock>
              <SandboxBlock title='Spots'>
                <Spots />
              </SandboxBlock>
              <SandboxBlock title='Tags'>
                <Tags />
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
              <SandboxBlock title='Tiles'>
                <Tiles />
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
