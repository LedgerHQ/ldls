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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.66667 11.6667V8.33333M6.88667 11.6667V4.33333M9.10667 11.6667V7.6M11.3333 11.6667V5M3.33333 2H12.6667C13.4 2 14 2.59667 14 3.33333V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.59667 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
