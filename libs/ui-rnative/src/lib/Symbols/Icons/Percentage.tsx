import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Percentage icon component for React Native.
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
 * import { Percentage } from '@ldls/ui-rnative/symbols';
 *
 * <Percentage />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Percentage size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Percentage} size="md">
 *   Click me
 * </Button>
 */
export const Percentage = createIcon(
  "Percentage",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14.0001 2L2.00005 14M13.6 11.6C13.6 12.7046 12.7046 13.6 11.6 13.6C10.4955 13.6 9.60003 12.7046 9.60003 11.6C9.60003 10.4955 10.4955 9.60003 11.6 9.60003C12.7046 9.60003 13.6 10.4955 13.6 11.6ZM6.40002 4.40002C6.40002 5.50459 5.50459 6.40002 4.40002 6.40002C3.29545 6.40002 2.40002 5.50459 2.40002 4.40002C2.40002 3.29545 3.29545 2.40002 4.40002 2.40002C5.50459 2.40002 6.40002 3.29545 6.40002 4.40002Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </Svg>
);
