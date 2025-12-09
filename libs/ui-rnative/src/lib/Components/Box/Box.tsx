import { View } from 'react-native';
import type { LumenViewInputProps } from '../../../styles';
import { createStyledView } from '../../../styles/styled';

/**
 * Box - A layout primitive component with token-constrained style props.
 *
 * Box is a View wrapper that accepts design token-based style props directly,
 * providing type-safe styling with autocomplete for spacing, sizes, colors, etc.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/layout-box--docs Storybook}
 *
 * @example
 * ```tsx
 * import { Box } from '@ledgerhq/ldls-ui-rnative';
 *
 * // Basic usage with token props
 * <Box width='s400' marginTop='s4' gap='s12' alignItems='center'>
 *   <Text>Content</Text>
 * </Box>
 *
 * // With background and border
 * <Box
 *   padding='s16'
 *   backgroundColor='surface'
 *   borderRadius='md'
 *   borderColor='muted'
 *   borderWidth={1}
 * >
 *   <Text>Card content</Text>
 * </Box>
 *
 * // Raw numbers allowed as escape hatch
 * <Box width={127} marginTop='s4' />
 *
 * // style prop for complete override
 * <Box marginTop='s4' style={{ width: 127 }} />
 * ```
 */
export const Box = createStyledView(View);

export type BoxProps = LumenViewInputProps;
