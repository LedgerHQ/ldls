import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart4 icon component for React Native.
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
 * import { Chart4 } from '@ldls/ui-rnative/symbols';
 *
 * <Chart4 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Chart4 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Chart4} size="md">
 *   Click me
 * </Button>
 */
export const Chart4 = createIcon(
  "Chart4",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12 6V6.66667M8 7.33333V9.33333M6 7.33333V10.6667M4 9.33333V10M10 5.33333V9.33333M10.6667 14H5.33333C3.49238 14 2 12.5076 2 10.6667V5.33333C2 3.49238 3.49238 2 5.33333 2H10.6667C12.5076 2 14 3.49238 14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
