import { cn, createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { forwardRef, useEffect, useMemo, useState } from 'react';

import {
  Appearance,
  ColorSchemeName,
  useColorScheme,
  View,
} from 'react-native';

import { ThemeProviderProps } from './ThemeProvider.types';

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const SYSTEM_MODE = 'system';

const [ThemeProviderProvider, useThemeProviderContext] = createSafeContext<{
  mode: ColorSchemeName;
  setMode: (mode: ColorSchemeName) => void;
}>('ThemeProvider');

const ThemeProvider = forwardRef<View, ThemeProviderProps>(
  ({ defaultMode = SYSTEM_MODE, className, children, ...props }, ref) => {
    const colorScheme = useColorScheme();
    const initialMode = defaultMode === SYSTEM_MODE ? colorScheme : defaultMode;
    const [mode, setMode] = useState<ColorSchemeName>(initialMode);

    useEffect(() => {
      Appearance.setColorScheme(mode as ColorSchemeName);
    }, [mode]);

    const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);

    return (
      <ThemeProviderProvider value={value}>
        <View className={cn(className, mode)} {...props} ref={ref}>
          {children}
        </View>
      </ThemeProviderProvider>
    );
  },
);

const useTheme = () => {
  const context = useThemeProviderContext({
    consumerName: 'useTheme',
    contextRequired: true,
  });

  return {
    mode: context.mode,
    setMode(mode: ColorSchemeName) {
      context.setMode(mode);
      Appearance.setColorScheme(mode as ColorSchemeName);
    },
    toggleMode() {
      const newMode = context.mode === DARK_MODE ? LIGHT_MODE : DARK_MODE;
      context.setMode(newMode);
      Appearance.setColorScheme(newMode);
    },
  };
};

export { ThemeProvider, useTheme };
