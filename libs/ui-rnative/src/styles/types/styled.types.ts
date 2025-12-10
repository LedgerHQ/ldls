import type {
  ViewStyle,
  FlexStyle,
  TextStyle,
  ViewProps,
  TextProps,
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

type SpacingProps = {
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
   * Gaps
   */
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

type BorderProps = {
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
  | 'start'
  | 'end'
  | 'zIndex'
  | 'overflow'
  | 'display'
  | 'aspectRatio'
>;

/**
 * Other view style props - passthrough from React Native
 */
type OtherViewStyleProps = Pick<
  ViewStyle,
  'opacity' | 'borderStyle' | 'transform'
>;

/**
 * Text color props - use text color tokens only
 */
type TextColorProps = {
  color?: TextColorToken;
};

/**
 * Typography prop
 */
type TypographyProps = {
  typo?: TypographyToken;
};

/**
 * Text style props - passthrough from React Native
 */
type OtherTextStyleProps = Pick<
  TextStyle,
  'textAlign' | 'textTransform' | 'textDecorationLine'
>;

/**
 * Main public types - combine token props with RN props
 */
export type LumenViewInputProps = SpacingProps &
  SizeProps &
  BackgroundColorProps &
  BorderProps &
  ShadowProps &
  FlexLayoutProps &
  OtherViewStyleProps &
  ViewProps;

export type LumenTextInputProps = LumenViewInputProps &
  TextColorProps &
  TypographyProps &
  OtherTextStyleProps &
  TextProps;

/**
 * Derived style-only types (for internal resolver use)
 */
export type LumenViewStyleProps = Omit<LumenViewInputProps, keyof ViewProps>;
export type LumenTextStyleProps = Omit<LumenTextInputProps, keyof TextProps>;
