import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart1 icon component for React Native.
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
 * import { Chart1 } from '@ldls/ui-rnative/symbols';
 *
 * <Chart1 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Chart1 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Chart1} size="md">
 *   Click me
 * </Button>
 */
export const Chart1 = createIcon(
  "Chart1",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 8.75v-2.5m1.665 2.5v-5.5m1.665 5.5V5.7M8.5 8.75v-5m-6-2.25h7c.55 0 1 .448 1 1v7c0 .55-.45 1-1 1h-7c-.552 0-1-.45-1-1v-7c0-.555.445-1 1-1"
    />
  </Svg>
);
