import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * Expand icon component for React Native.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props (from react-native-svg)
 * and additional size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon (via NativeWind).
 * @param {SVGProps} [...props] - All standard SVG element props (from react-native-svg).
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Expand } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Expand />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Expand size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Expand} size="md">
 *   Click me
 * </Button>
 */
export const Expand = createIcon(
  'Expand',
  <Svg width={24} height={24} fill='currentColor' viewBox='0 0 16 16'>
    <Path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.3}
      d='M11.333 2H14m0 0v2.667M14 2l-4 4M2.667 7.333V4c0-.737.596-1.333 1.333-1.333h3.333M4.667 14H2m0 0v-2.667M2 14l4-4m7.333-1.333V12c0 .737-.596 1.333-1.333 1.333H8'
    />
  </Svg>,
);
