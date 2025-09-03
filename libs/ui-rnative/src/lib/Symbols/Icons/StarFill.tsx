import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * StarFill icon component for React Native.
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
 * import { StarFill } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <StarFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <StarFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={StarFill} size="md">
 *   Click me
 * </Button>
 */
export const StarFill = createIcon(
  'StarFill',
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m8 11.49-3.88 1.84.8-4.08-2.927-2.997 4.12-.52 1.88-3.753 1.88 3.747 4.12.513-2.927 2.987.8 4.08z"
    />
  </Svg>,
);
