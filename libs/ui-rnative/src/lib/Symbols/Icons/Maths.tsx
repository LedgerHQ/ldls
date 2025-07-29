import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Maths icon component for React Native.
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
 * import { Maths } from '@ldls/ui-rnative/symbols';
 *
 * <Maths />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Maths size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Maths} size="md">
 *   Click me
 * </Button>
 */
export const Maths = createIcon(
  "Maths",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.86662 12H11.8666M9.86662 10H11.8666M1.99995 8.00003H14M9.99995 5.00003H12M3.99995 5.00003H5.99995M4.99995 6.00003V4.00003M4.29329 10.2934L5.70662 11.7067M4.29329 11.7067L5.70662 10.2934M7.99995 2.00003V14M14 12.4347C14 13.2947 13.2933 13.9947 12.4333 13.9947H3.55995C2.69329 13.9947 1.99329 13.288 1.99329 12.428V3.55336C1.99329 2.68669 2.69329 1.98669 3.55862 1.98669H12.4253C13.2853 1.98669 13.9853 2.68669 13.9853 3.55203V12.4187L14 12.4347Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
