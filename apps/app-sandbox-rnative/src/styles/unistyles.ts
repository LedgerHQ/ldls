import { StyleSheet } from 'react-native-unistyles';
import { darkTheme, lightTheme } from './theme';

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  settings: {
    adaptiveThemes: true,
  },
});
