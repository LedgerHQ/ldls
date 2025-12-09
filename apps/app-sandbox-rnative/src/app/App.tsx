import {
  ledgerLiveDarkTheme,
  ledgerLiveLightTheme,
} from '@ledgerhq/ldls-design-core';
import {
  GlobalSelectBottomSheet,
  GlobalTooltipBottomSheet,
  SupportedLocale,
  ThemeProvider,
  useBottomSheetRef,
} from '@ledgerhq/ldls-ui-rnative';
import { ToRemove } from '@ledgerhq/ldls-ui-rnative/ToRemove';
import { useState } from 'react';
import {
  ColorSchemeName,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AmountInputs,
  BottomSheetDynamicSize,
  BottomSheetFlatLists,
  BottomSheetsButton,
  Buttons,
  Checkboxes,
  IconButtons,
  Links,
  Selects,
  Spots,
  Switches,
  Tags,
  TextInputs,
  Tiles,
  ToggleLocaleSwitch,
  ToggleThemeSwitch,
} from './blocks';
import { Banners } from './blocks/Banners';
import { CardButtons } from './blocks/CardButtons';
import { Tooltips } from './blocks/Tooltips';
import { SandboxBlock } from './SandboxBlock';

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>('dark');
  const bottomSheetFlatListsRef = useBottomSheetRef();
  const bottomSheetDynamicSizeRef = useBottomSheetRef();
  const [locale, setLocale] = useState<SupportedLocale>('en');

  return (
    <SafeAreaView className={`${colorScheme} flex flex-1 bg-canvas`}>
      <StatusBar />
      <ThemeProvider
        themes={{
          dark: ledgerLiveDarkTheme,
          light: ledgerLiveLightTheme,
        }}
        colorScheme={colorScheme}
        locale={locale}
      >
        <GestureHandlerRootView className='flex w-full flex-1 bg-accent'>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            className='h-screen bg-canvas px-16 '
          >
            <View className='flex flex-col gap-32 py-40'>
              <SandboxBlock title='To Remove'>
                <ToRemove variant='primary' />
                <ToRemove variant='secondary' />
                <ToRemove variant='error' />
                <ToRemove />
              </SandboxBlock>
              <SandboxBlock title='Select'>
                <Selects />
              </SandboxBlock>
              <SandboxBlock title='Text inputs'>
                <TextInputs />
              </SandboxBlock>
              <SandboxBlock title='Amount inputs'>
                <AmountInputs />
              </SandboxBlock>
              <SandboxBlock title='CardButtons'>
                <CardButtons />
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
                  <ToggleThemeSwitch
                    colorScheme={colorScheme}
                    setColorScheme={setColorScheme}
                  />
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
              <SandboxBlock title='Link'>
                <Links />
              </SandboxBlock>
            </View>
          </ScrollView>
          <BottomSheetFlatLists ref={bottomSheetFlatListsRef} />
          <BottomSheetDynamicSize ref={bottomSheetDynamicSizeRef} />
          <GlobalTooltipBottomSheet />
          <GlobalSelectBottomSheet />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
