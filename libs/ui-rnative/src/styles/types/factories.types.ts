import {
  PressableProps,
  PressableStateCallbackType,
  TextProps as RNTextProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { LumenTextStyle, LumenViewStyle } from './lx.types';
import { LumenStyleSheetTheme } from './theme.types';

type StyleFn = (state: PressableStateCallbackType) => ViewStyle;
export type PressableStyleItem =
  | ViewStyle
  | StyleFn
  | PressableStyleItem[]
  | null
  | undefined;

export type ExtendRNPressableProps = Omit<PressableProps, 'style'> & {
  style?: PressableStyleItem;
};

/**
 * View API that extends lx style property
 */
export type StyledViewProps = {
  /**
   * Support LX property - [see documentation](/?path=/docs/style-system-lx--docs).
   */
  lx?: LumenViewStyle;
} & ViewProps;

/**
 * Text API that extends lx style property
 */
export type StyledTextProps = {
  /**
   * Support LX property - [see documentation](/?path=/docs/style-system-lx--docs).
   */
  lx?: LumenTextStyle;
  /**
   * Typography preset
   */
  typography?: keyof LumenStyleSheetTheme['typographies'];
} & RNTextProps;

/**
 * Pressable API that extends lx style property
 */
export type StyledPressableProps = {
  /**
   * Support LX property - [see documentation](/?path=/docs/style-system-lx--docs).
   */
  lx?: LumenViewStyle;
} & ExtendRNPressableProps;
