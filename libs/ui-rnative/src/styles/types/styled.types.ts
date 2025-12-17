import type {
  ViewStyle,
  TextStyle,
  PressableStateCallbackType,
} from 'react-native';

import type { LumenStyleSheetTheme } from './theme.types';

/**
 * Extract token keys from theme
 */
type SpacingToken = keyof LumenStyleSheetTheme['spacings'];
type BorderWidthToken = keyof LumenStyleSheetTheme['borderWidth'];
type SizeToken = keyof LumenStyleSheetTheme['sizes'];
type BackgroundColorToken = keyof LumenStyleSheetTheme['colors']['bg'];
type TextColorToken = keyof LumenStyleSheetTheme['colors']['text'];
type BorderColorToken = keyof LumenStyleSheetTheme['colors']['border'];
type BorderRadiusToken = keyof LumenStyleSheetTheme['borderRadius'];
type ShadowToken = keyof LumenStyleSheetTheme['shadows'];
type TypographyToken = keyof LumenStyleSheetTheme['typographies'];

/**
 * Main public types - combine token props with RN props
 */
export type LumenViewStyle = {
  /**
   * Flex layout
   */
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  flexWrap?: ViewStyle['flexWrap'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  alignContent?: ViewStyle['alignContent'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  flexBasis?: ViewStyle['flexBasis'];
  position?: ViewStyle['position'];
  zIndex?: ViewStyle['zIndex'];
  overflow?: ViewStyle['overflow'];
  display?: ViewStyle['display'];
  aspectRatio?: ViewStyle['aspectRatio'];
  /**
   * Padding
   */
  padding?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingStart?: SpacingToken;
  paddingEnd?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingVertical?: SpacingToken;
  /**
   * Margin
   */
  margin?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginStart?: SpacingToken;
  marginEnd?: SpacingToken;
  marginHorizontal?: SpacingToken;
  marginVertical?: SpacingToken;
  /**
   * Position
   */
  top?: SpacingToken;
  bottom?: SpacingToken;
  left?: SpacingToken;
  right?: SpacingToken;
  start?: SpacingToken;
  end?: SpacingToken;
  /**
   * Gap
   */
  gap?: SpacingToken;
  rowGap?: SpacingToken;
  columnGap?: SpacingToken;
  /**
   * Size
   */
  width?: SizeToken;
  height?: SizeToken;
  minWidth?: SizeToken;
  minHeight?: SizeToken;
  maxWidth?: SizeToken;
  maxHeight?: SizeToken;
  /**
   * Background color
   */
  backgroundColor?: BackgroundColorToken;
  /**
   * Shadow
   */
  boxShadow?: ShadowToken;
  /**
   * Border width
   */
  borderWidth?: BorderWidthToken;
  borderLeftWidth?: BorderWidthToken;
  borderRightWidth?: BorderWidthToken;
  borderTopWidth?: BorderWidthToken;
  borderBottomWidth?: BorderWidthToken;
  borderStartWidth?: BorderWidthToken;
  borderEndWidth?: BorderWidthToken;
  /**
   * Border Color
   */
  borderColor?: BorderColorToken;
  borderTopColor?: BorderColorToken;
  borderBottomColor?: BorderColorToken;
  borderLeftColor?: BorderColorToken;
  borderRightColor?: BorderColorToken;
  borderStartColor?: BorderColorToken;
  borderEndColor?: BorderColorToken;
  /**
   * Border Radius
   */
  borderRadius?: BorderRadiusToken;
  borderTopLeftRadius?: BorderRadiusToken;
  borderTopRightRadius?: BorderRadiusToken;
  borderBottomLeftRadius?: BorderRadiusToken;
  borderBottomRightRadius?: BorderRadiusToken;
  /**
   * Other styles
   */
  opacity?: ViewStyle['opacity'];
  borderStyle?: ViewStyle['borderStyle'];
  transform?: ViewStyle['transform'];
};

export type LumenTextStyle = LumenViewStyle & {
  color?: TextColorToken;
  typography?: TypographyToken;
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  textDecorationLine?: TextStyle['textDecorationLine'];
};

/**
 * Derived style-only types (for internal resolver use)
 */
export type LumenViewStyleLX = {
  /**
   * Support LX property - [see documentation](/?path=/docs/getting-started-lx--docs).
   */
  lx?: LumenViewStyle;
};
export type LumenPressableStyleLX = {
  /**
   * Support LX property - [see documentation](/?path=/docs/getting-started-lx--docs).
   * Can be a static object or a function that receives pressed state.
   */
  lx?: LumenViewStyle | ((state: PressableStateCallbackType) => LumenViewStyle);
};
export type LumenTextStyleLX = {
  /**
   * Support LX property - [see documentation](/?path=/docs/getting-started-lx--docs).
   */
  lx?: LumenTextStyle;
};
