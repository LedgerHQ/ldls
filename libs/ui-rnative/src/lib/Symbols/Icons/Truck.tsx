import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Truck icon component for React Native.
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
 * import { Truck } from '@ldls/ui-rnative/symbols';
 *
 * <Truck />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Truck size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Truck} size="md">
 *   Click me
 * </Button>
 */
export const Truck = createIcon(
  "Truck",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 2h2c.275 0 .5.22.5.5v5H1m1.5 2.205h-1a.5.5 0 0 1-.5-.5v-2.71M7.5 3.5h2.162c.2 0 .384.12.46.31l.8 2.005q.068.174.07.37v2.974c0 .275-.226.5-.5.5h-.92M8 9.71H4.085M11 7H9V5h1.6M1 2h2.5M1 3.5h1.5M1.5 5H1m8.352 4.145a.8.8 0 0 1 0 1.12.8.8 0 0 1-1.12 0 .79.79 0 0 1 0-1.12.79.79 0 0 1 1.12 0m-5.5 0a.8.8 0 0 1 0 1.12.8.8 0 0 1-1.12 0 .79.79 0 0 1 0-1.12.79.79 0 0 1 1.12 0"
    />
  </Svg>
);
