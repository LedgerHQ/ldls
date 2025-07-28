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
 * import { Star } from '@ldls/ui-rnative/symbols';
 *
 * <Star />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Star size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Star} size="md">
 *   Click me
 * </Button>
 */
export const Star = createIcon(
  "Star",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00001 11.49L4.11935 13.33L4.91935 9.24998L1.99335 6.25331L6.11335 5.73331L7.99335 1.97998L9.87335 5.72665L13.9927 6.23998L11.066 9.22665L11.866 13.3066L8.00001 11.49Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
