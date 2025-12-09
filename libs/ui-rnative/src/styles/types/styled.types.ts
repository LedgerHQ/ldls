import type { ViewStyle, FlexStyle, ViewProps, TextProps } from 'react-native';
import type { LumenStyleSheetTheme } from './theme.types';

/**
 * Extract token keys from theme
 */
export type SpacingToken = keyof LumenStyleSheetTheme['spacings'];
export type SizeToken = keyof LumenStyleSheetTheme['sizes'];
export type BackgroundColorToken = keyof LumenStyleSheetTheme['colors']['bg'];
export type TextColorToken = keyof LumenStyleSheetTheme['colors']['text'];
export type BorderColorToken = keyof LumenStyleSheetTheme['colors']['border'];
export type BorderRadiusToken = keyof LumenStyleSheetTheme['borderRadius'];
export type ShadowToken = keyof LumenStyleSheetTheme['shadows'];
export type TypographyVariant = keyof LumenStyleSheetTheme['typographies'];

/**
 * Spacing props - use spacing tokens only
 */
type SpacingProps = {
  padding?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingVertical?: SpacingToken;
  margin?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginHorizontal?: SpacingToken;
  marginVertical?: SpacingToken;
  gap?: SpacingToken;
  rowGap?: SpacingToken;
  columnGap?: SpacingToken;
};

/**
 * Size props - use size tokens only
 */
type SizeProps = {
  width?: SizeToken;
  height?: SizeToken;
  minWidth?: SizeToken;
  minHeight?: SizeToken;
  maxWidth?: SizeToken;
  maxHeight?: SizeToken;
};

/**
 * Background color props - use background color tokens only
 */
type BackgroundColorProps = {
  backgroundColor?: BackgroundColorToken;
};

/**
 * Border props - use border color tokens and border radius tokens only
 */
type BorderProps = {
  borderColor?: BorderColorToken;
  borderTopColor?: BorderColorToken;
  borderBottomColor?: BorderColorToken;
  borderLeftColor?: BorderColorToken;
  borderRightColor?: BorderColorToken;
  borderRadius?: BorderRadiusToken;
  borderTopLeftRadius?: BorderRadiusToken;
  borderTopRightRadius?: BorderRadiusToken;
  borderBottomLeftRadius?: BorderRadiusToken;
  borderBottomRightRadius?: BorderRadiusToken;
};

/**
 * Shadow props - use shadow tokens
 */
type ShadowProps = {
  boxShadow?: ShadowToken;
};

/**
 * Flex layout props - passthrough from React Native
 */
type FlexLayoutProps = Pick<
  FlexStyle,
  | 'flex'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignSelf'
  | 'alignContent'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'position'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'zIndex'
  | 'overflow'
  | 'display'
>;

/**
 * Other view style props - passthrough from React Native
 */
type OtherViewStyleProps = Pick<
  ViewStyle,
  'opacity' | 'borderWidth' | 'borderStyle'
>;

/**
 * Text color props - use text color tokens only
 */
type TextColorProps = {
  color?: TextColorToken;
};

/**
 * Typography variant prop
 */
type TypographyVariantProps = {
  variant?: TypographyVariant;
};

/**
 * Main public types - combine token props with RN props
 */
export type LumenViewProps = SpacingProps &
  SizeProps &
  BackgroundColorProps &
  BorderProps &
  ShadowProps &
  FlexLayoutProps &
  OtherViewStyleProps &
  ViewProps;

export type LumenTextProps = SpacingProps &
  SizeProps &
  BackgroundColorProps &
  BorderProps &
  ShadowProps &
  FlexLayoutProps &
  OtherViewStyleProps &
  TextColorProps &
  TypographyVariantProps &
  TextProps;

/**
 * Derived style-only types (for internal resolver use)
 */
export type LumenViewStyleProps = Omit<LumenViewProps, keyof ViewProps>;
export type LumenTextStyleProps = Omit<LumenTextProps, keyof TextProps>;
