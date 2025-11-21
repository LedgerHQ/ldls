import {
  ThemeProvider,
  GlobalTooltipBottomSheet,
  useBottomSheetRef,
  SupportedLocale,
} from '@ledgerhq/ldls-ui-rnative';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Banners } from './blocks/Banners';
import {
  BottomSheetDynamicSize,
  BottomSheetFlatLists,
  BottomSheetsButton,
} from './blocks/BottomSheets';
import { Buttons } from './blocks/Buttons';
import { CardButtons } from './blocks/CardButtons';
import { Checkboxes } from './blocks/Checkboxes';
import { IconButtons } from './blocks/IconButtons';
import { Inputs } from './blocks/Inputs';
import { Spots } from './blocks/Spots';
import { Switches } from './blocks/Switches';
import { Tags } from './blocks/Tags';
import { Tiles } from './blocks/Tiles';
import { ToggleLocaleSwitch } from './blocks/ToggleLocaleSwitch';
import { ToggleThemeSwitch } from './blocks/ToggleThemeSwitch';
import { Tooltips } from './blocks/Tooltips';
import { SandboxBlock } from './SandboxBlock';

export const App = () => {
  const bottomSheetFlatListsRef = useBottomSheetRef();
  const bottomSheetDynamicSizeRef = useBottomSheetRef();
  const [locale, setLocale] = useState<SupportedLocale>('en');

  return (
    <SafeAreaView className='flex flex-1 bg-canvas'>
      <StatusBar />
      <ThemeProvider defaultMode='dark' className='flex flex-1' locale={locale}>
        <GestureHandlerRootView className='flex w-full flex-1 bg-accent'>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            className='h-screen bg-canvas px-16 '
          >
            <View className='flex flex-col gap-32 py-40'>
              <SandboxBlock title='CardButtons'>
                <CardButtons />
              </SandboxBlock>
              <SandboxBlock title='Inputs'>
                <Inputs />
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
              <SandboxBlock title='Theme Provider toggles'>
                <View className='gap-12'>
                  <ToggleThemeSwitch />
                  <ToggleLocaleSwitch locale={locale} setLocale={setLocale} />
                </View>
              </SandboxBlock>
              <SandboxBlock title='Tiles'>
                <Tiles />
              </SandboxBlock>
              <SandboxBlock title='Tooltips'>
                <Tooltips />
              </SandboxBlock>
              <SandboxBlock title='Banners'>
                <Banners />
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
          <GlobalTooltipBottomSheet />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
