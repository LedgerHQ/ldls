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
 * import { Magnet } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Magnet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Magnet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Magnet} size="md">
 *   Click me
 * </Button>
 */
export const Magnet = createIcon(
  "Magnet",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 2v2.5m0 3V10m1.75-2.5H6a1.5 1.5 0 1 1 0-3h3.25a.75.75 0 0 0 .75-.75v-1A.75.75 0 0 0 9.25 2H6a4 4 0 0 0 0 8h3.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
