import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * Signature icon component for React Native.
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
 * import { Signature } from '@ledgerhq/lumen-ui-rnative/symbols';
 *
 * <Signature />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Signature size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/lumen-ui-rnative';
 *
 * <Button icon={Signature} size="md">
 *   Click me
 * </Button>
 */
export const Signature = createIcon(
  'Signature',
  <Svg width={24} height={24} fill='currentColor' viewBox='0 0 16 16'>
    <Path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.3}
      d='M9.006 12.667h4m-10.65-7.3A2.5 2.5 0 0 1 2 4.053 1.89 1.89 0 0 1 3.667 2C5.507 2 7 4.686 7 8s-1.343 6-3 6h.001c-.92 0-1.668-1.194-1.668-2.667A5.336 5.336 0 0 1 7.671 6h-.004A2.517 2.517 0 0 1 10 8.668a6.5 6.5 0 0 1-.334 1.999c1.2-3.61 2.335-4 3.001-4A1.333 1.333 0 0 1 14 8'
    />
  </Svg>,
);
