import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * StarHalf icon component for React Native.
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
 * import { StarHalf } from '@ldls/ui-rnative/symbols';
 *
 * <StarHalf />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <StarHalf size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={StarHalf} size="md">
 *   Click me
 * </Button>
 */
export const StarHalf = createIcon(
  "StarHalf",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="m3.09 9.997 2.536-1.256.038-6.569L4.585 4.3l-3.09.39 2.194 2.247z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.09 9.997 6 8.617 8.9 9.98l-.6-3.06 2.194-2.24-3.089-.385-1.41-2.81L4.585 4.3M3.09 9.997l.6-3.06L1.495 4.69l3.09-.39M3.09 9.997l2.536-1.256.038-6.569L4.585 4.3"
    />
  </Svg>
);
