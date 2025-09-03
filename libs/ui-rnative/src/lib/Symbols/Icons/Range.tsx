import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * Range icon component for React Native.
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
 * import { Range } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Range />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Range size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Range} size="md">
 *   Click me
 * </Button>
 */
export const Range = createIcon(
  'Range',
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M2 13.333h5.333M2 10.667h4M2 8h5.333M2 5.333h4M2 2.667h5.333M12 13.333V2.667m0 10.666 1.667-1.666M12 13.333l-1.667-1.666m1.667-9-1.667 1.666M12 2.667l1.667 1.666"
    />
  </Svg>,
);
