import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Printer icon component for React Native.
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
 * import { Printer } from '@ldls/ui-rnative/symbols';
 *
 * <Printer />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Printer size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Printer} size="md">
 *   Click me
 * </Button>
 */
export const Printer = createIcon(
  "Printer",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 4V2c0-.276.22-.5.5-.5h4c.275 0 .5.22.5.5v2m-5 4.5h-1c-.552 0-1-.45-1-1V5c0-.555.448-1 1-1h7a1 1 0 0 1 1 1v2.5c0 .55-.45 1-1 1h-1m-5-3H4m-.5 1.4h5V10c0 .275-.225.5-.5.5H4c-.28 0-.5-.225-.5-.5z"
    />
  </Svg>
);
