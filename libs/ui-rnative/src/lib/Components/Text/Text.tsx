import { Text as RNText } from 'react-native';
import type { LumenTextProps } from '../../../styles';
import { createStyledText } from '../../../styles/styled';

/**
 * Text - A typography component with variant support and token-constrained style props.
 *
 * Text is a wrapper around React Native's Text that accepts a `variant` prop for
 * typography presets, plus design token-based style props for colors, spacing, etc.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/typography-text--docs Storybook}
 *
 * @example
 * ```tsx
 * import { Text } from '@ledgerhq/ldls-ui-rnative';
 *
 * // Basic usage with typography variant
 * <Text variant='body1'>Hello World</Text>
 *
 * // With custom color
 * <Text variant='heading2SemiBold' color='muted'>
 *   Subtitle
 * </Text>
 *
 * // With spacing
 * <Text variant='body2' marginTop='s8' color='base'>
 *   Description text
 * </Text>
 *
 * // style prop for complete override
 * <Text variant='body1' style={{ letterSpacing: 127 }} />
 * ```
 */
export const Text = createStyledText(RNText);

export type TextProps = LumenTextProps;
