import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldLock icon component for React Native.
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
 * import { ShieldLock } from '@ldls/ui-rnative/symbols';
 *
 * <ShieldLock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldLock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ShieldLock} size="md">
 *   Click me
 * </Button>
 */
export const ShieldLock = createIcon(
  "ShieldLock",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.764 5.563v-.675a.767.767 0 0 0-.766-.766.763.763 0 0 0-.764.76v.67m1.641.008h-1.75c-.28 0-.5.22-.5.5v1.06c0 .275.22.5.5.5h1.75c.275 0 .5-.225.5-.5V6.055c0-.28-.225-.5-.5-.5zM10 5.62c0 2.184-1.578 4.23-3.74 4.84-.17.045-.351.045-.52 0C3.575 9.845 2 7.8 2 5.615V3.6c0-.41.245-.775.62-.925l2.43-.995a2.48 2.48 0 0 1 1.89 0l2.43.995c.375.15.62.515.62.925v2.014z"
    />
  </Svg>
);
