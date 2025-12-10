import { Text as RNText } from 'react-native';
import { createStyledText, type LumenTextStyleProps } from '../../../styles';

/**
 * Text - A typography component with typo support and token-constrained style props.
 *
 * Text is a wrapper around React Native's Text that accepts a `typo` prop for
 * typography presets, plus design token-based style props for colors, spacing, etc.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/typography-text--docs Storybook}
 *
 * @example
 * ```tsx
 * import { Text } from '@ledgerhq/ldls-ui-rnative';
 *
 * // Basic usage with typography typo
 * <Text typo='body1'>Hello World</Text>
 *
 * // With custom color
 * <Text typo='heading2SemiBold' color='muted'>
 *   Subtitle
 * </Text>
 *
 * // With spacing
 * <Text typo='body2' marginTop='s8' color='base'>
 *   Description text
 * </Text>
 *
 * // style prop for complete override
 * <Text typo='body1' style={{ letterSpacing: 127 }} />
 * ```
 */
export const Text = createStyledText(RNText);

export type TextProps = LumenTextStyleProps;
