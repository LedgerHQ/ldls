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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.11935 13.33L7.50114 11.6542L7.55236 2.89632L6.11335 5.73331L1.99335 6.25331L4.91935 9.24998L4.11935 13.33Z"
      fill="currentColor"
    />
    <Path
      d="M4.11935 13.33L8.00001 11.49L11.866 13.3066L11.066 9.22665L13.9927 6.23998L9.87335 5.72665L7.99335 1.97998L6.11335 5.73331M4.11935 13.33L4.91935 9.24998L1.99335 6.25331L6.11335 5.73331M4.11935 13.33L7.50114 11.6542L7.55236 2.89632L6.11335 5.73331"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
