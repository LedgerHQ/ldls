import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ChartPie icon component for React Native.
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
 * import { ChartPie } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ChartPie />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ChartPie size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={ChartPie} size="md">
 *   Click me
 * </Button>
 */
export const ChartPie = createIcon(
  "ChartPie",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 3A3.745 3.745 0 0 0 1.5 6.75c0 2.07 1.675 3.75 3.75 3.75C7.32 10.5 9 8.82 9 6.75H5.25z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 5A3.5 3.5 0 0 0 7 1.5V5z"
    />
  </Svg>
);
