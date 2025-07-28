import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Magnet icon component for React Native.
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
 * import { Magnet } from '@ldls/ui-rnative/symbols';
 *
 * <Magnet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Magnet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Magnet} size="md">
 *   Click me
 * </Button>
 */
export const Magnet = createIcon(
  "Magnet",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.99996 2.66589V5.99923M9.99996 9.99921V13.3325M12.3333 10H7.99996C6.89539 10 5.99996 9.10459 5.99996 8.00002C5.99996 6.89545 6.89539 6.00002 7.99996 6.00002H12.3333C12.8856 6.00002 13.3333 5.55231 13.3333 5.00002V3.66669C13.3333 3.1144 12.8856 2.66669 12.3333 2.66669H7.99996C5.05444 2.66669 2.66663 5.0545 2.66663 8.00002C2.66663 10.9455 5.05444 13.3334 7.99996 13.3334H12.3333C12.8856 13.3334 13.3333 12.8856 13.3333 12.3334V11C13.3333 10.4477 12.8856 10 12.3333 10Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
