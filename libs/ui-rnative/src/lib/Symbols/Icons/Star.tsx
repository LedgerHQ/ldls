import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Star icon component for React Native.
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
 * import { Star } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Star />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Star size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Star} size="md">
 *   Click me
 * </Button>
 */
export const Star = createIcon(
  "Star",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 8.617-2.91 1.38.6-3.06L1.495 4.69l3.09-.39 1.41-2.815 1.41 2.81 3.09.385L8.3 6.92l.6 3.06z"
    />
  </Svg>
);
