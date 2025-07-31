import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart3 icon component for React Native.
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
 * import { Chart3 } from '@ldls/ui-rnative/symbols';
 *
 * <Chart3 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Chart3 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Chart3} size="md">
 *   Click me
 * </Button>
 */
export const Chart3 = createIcon(
  "Chart3",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M9 7.673v2.994M7 5.333v5.334M5 8.84v1.827M11 6.5v4.167M5.333 2h5.334A3.333 3.333 0 0 1 14 5.333v5.334A3.333 3.333 0 0 1 10.667 14H5.333A3.333 3.333 0 0 1 2 10.667V5.333A3.333 3.333 0 0 1 5.333 2"
    />
  </Svg>
);
