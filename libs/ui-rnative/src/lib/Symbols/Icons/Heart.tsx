import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Heart icon component for React Native.
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
 * import { Heart } from '@ldls/ui-rnative/symbols';
 *
 * <Heart />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Heart size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Heart} size="md">
 *   Click me
 * </Button>
 */
export const Heart = createIcon(
  "Heart",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.4667 2.66669C12.58 2.66669 14 4.65335 14 6.50669C14 10.26 8.10667 13.3334 8 13.3334C7.89333 13.3334 2 10.26 2 6.50669C2 4.65335 3.42 2.66669 5.53333 2.66669C6.74667 2.66669 7.54 3.27335 8 3.80669C8.46 3.27335 9.25333 2.66669 10.4667 2.66669Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
