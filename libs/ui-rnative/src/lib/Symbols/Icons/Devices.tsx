import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Devices icon component for React Native.
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
 * import { Devices } from '@ldls/ui-rnative/symbols';
 *
 * <Devices />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Devices size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Devices} size="md">
 *   Click me
 * </Button>
 */
export const Devices = createIcon(
  "Devices",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10.5H2.5a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h5a1 1 0 0 1 1 1v1M8 9.245h1m.6 1.255H7.4a.9.9 0 0 1-.9-.9V5.9c0-.5.4-.9.9-.9h2.2c.495 0 .9.4.9.9v3.7c0 .495-.405.9-.9.9"
    />
  </Svg>
);
