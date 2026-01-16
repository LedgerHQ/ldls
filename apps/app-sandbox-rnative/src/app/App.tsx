import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import {
  Box,
  Divider,
  GlobalSelectBottomSheet,
  GlobalTooltipBottomSheet,
  SupportedLocale,
  ThemeProvider,
  useBottomSheetRef,
} from '@ledgerhq/lumen-ui-rnative';
import { useTheme } from '@ledgerhq/lumen-ui-rnative/styles';
import { useState } from 'react';
import {
  ColorSchemeName,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AmountInputs,
  BottomSheetDynamicSize,
  BottomSheetFlatLists,
  BottomSheetsButton,
  Buttons,
  Checkboxes,
  Dividers,
  IconButtons,
  Links,
  Selects,
  Spots,
  Subheaders,
  Switches,
  Tags,
  TextInputs,
  Tiles,
  ToggleLocaleSwitch,
  ToggleThemeSwitch,
  InteractiveIcons,
  Banners,
  CardButtons,
  Tooltips,
  ListItems,
  Gradients,
} from './blocks';
import { SandboxBlock } from './SandboxBlock';

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>('dark');
  const [locale, setLocale] = useState<SupportedLocale>('en');

  return (
    <ThemeProvider
      themes={ledgerLiveThemes}
      colorScheme={colorScheme}
      locale={locale}
    >
      <AppContent
        locale={locale}
        colorScheme={colorScheme}
        setLocale={setLocale}
        setColorScheme={setColorScheme}
      />
    </ThemeProvider>
  );
};

const AppContent = ({
  locale,
  colorScheme,
  setLocale,
  setColorScheme,
}: any) => {
  const { theme } = useTheme();
  const bottomSheetFlatListsRef = useBottomSheetRef();
  const bottomSheetDynamicSizeRef = useBottomSheetRef();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg.canvas,
      }}
    >
      <StatusBar />
      <GestureHandlerRootView
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: theme.colors.bg.accent,
        }}
      >
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={{
            height: '100%',
            backgroundColor: theme.colors.bg.canvas,
            paddingHorizontal: theme.spacings.s16,
          }}
        >
          <Box
            lx={{
              flexDirection: 'column',
              gap: 's32',
              paddingVertical: 's40',
            }}
          >
            <SandboxBlock title='InteractiveIcons'>
              <InteractiveIcons />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Select'>
              <Selects />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Text inputs'>
              <TextInputs />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Amount inputs'>
              <AmountInputs />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='CardButtons'>
              <CardButtons />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Checkboxes'>
              <Checkboxes />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Spots'>
              <Spots />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Tags'>
              <Tags />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Subheaders'>
              <Subheaders />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Switches'>
              <Switches />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Buttons'>
              <Buttons />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='IconButtons'>
              <IconButtons />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Theme Provider toggles'>
              <Box lx={{ gap: 's12' }}>
                <ToggleThemeSwitch
                  colorScheme={colorScheme}
                  setColorScheme={setColorScheme}
                />
                <ToggleLocaleSwitch locale={locale} setLocale={setLocale} />
              </Box>
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Tiles'>
              <Tiles />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='ListItems'>
              <ListItems />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Tooltips'>
              <Tooltips />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Banners'>
              <Banners />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='BottomSheets'>
              <BottomSheetsButton
                onPress={() => bottomSheetFlatListsRef.current?.expand()}
              />
              <BottomSheetsButton
                onPress={() => bottomSheetDynamicSizeRef.current?.expand()}
              />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Link'>
              <Links />
            </SandboxBlock>
            <Divider />
            <SandboxBlock title='Dividers'>
              <Dividers />
            </SandboxBlock>
            <SandboxBlock title='Gradients'>
              <Gradients />
            </SandboxBlock>
          </Box>
        </ScrollView>
        <BottomSheetFlatLists ref={bottomSheetFlatListsRef} />
        <BottomSheetDynamicSize ref={bottomSheetDynamicSizeRef} />
        <GlobalTooltipBottomSheet />
        <GlobalSelectBottomSheet />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
