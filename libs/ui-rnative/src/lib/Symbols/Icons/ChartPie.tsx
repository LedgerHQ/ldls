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
 * import { ChartPie } from '@ldls/ui-rnative/symbols';
 *
 * <ChartPie />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ChartPie size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ChartPie} size="md">
 *   Click me
 * </Button>
 */
export const ChartPie = createIcon(
  "ChartPie",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7 4C4.233 4 2 6.233 2 9c0 2.76 2.233 5 5 5 2.76 0 5-2.24 5-5H7z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M14 6.667A4.667 4.667 0 0 0 9.333 2v4.667z"
    />
  </Svg>
);
