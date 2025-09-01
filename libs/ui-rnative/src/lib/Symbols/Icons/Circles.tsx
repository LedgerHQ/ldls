import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Circles icon component for React Native.
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
 * import { Circles } from '@ldls/ui-rnative/symbols';
 *
 * <Circles />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Circles size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Circles} size="md">
 *   Click me
 * </Button>
 */
export const Circles = createIcon(
  "Circles",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 1.883a4.5 4.5 0 0 0-5 0M7.99 9.66a4.5 4.5 0 0 0 2.5-4.33M4.01 9.66a4.5 4.5 0 0 1-2.5-4.33m8.917-2.486a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06m-7.79 0a.75.75 0 1 1-1.061 1.06.75.75 0 0 1 1.06-1.06m3.895 6.75a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06m.705-5.207a1.75 1.75 0 1 1-2.474 2.475 1.75 1.75 0 0 1 2.474-2.475"
    />
  </Svg>
);
