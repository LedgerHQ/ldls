import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Refresh icon component for React Native.
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
 * import { Refresh } from '@ldls/ui-rnative/symbols';
 *
 * <Refresh />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Refresh size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Refresh} size="md">
 *   Click me
 * </Button>
 */
export const Refresh = createIcon(
  "Refresh",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M13.328 8.02132C13.3226 9.37932 12.8073 10.7353 11.7713 11.7713C9.68864 13.854 6.31131 13.854 4.22864 11.7713C3.85798 11.4007 3.55664 10.988 3.31798 10.5507M2.66931 7.91332C2.69064 6.57732 3.20931 5.24799 4.22864 4.22866C6.31131 2.14599 9.68864 2.14599 11.7713 4.22866C12.142 4.59932 12.4433 5.01199 12.682 5.44932M10.6353 5.44999H12.992V3.09266M5.36464 10.55H3.00798V12.9073"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
