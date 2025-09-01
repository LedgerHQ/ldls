import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Usb icon component for React Native.
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
 * import { Usb } from '@ldls/ui-rnative/symbols';
 *
 * <Usb />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Usb size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Usb} size="md">
 *   Click me
 * </Button>
 */
export const Usb = createIcon(
  "Usb",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8.5A1.25 1.25 0 1 0 6 11a1.25 1.25 0 0 0 0-2.5m0 0V1m0 0 1.125 1.125M6 1 4.875 2.125M6 7.61l-1.97-.44a1.005 1.005 0 0 1-.785-.98v-.7M6 6.825l2.035-.615c.42-.13.71-.52.71-.96v-.51M8.375 3h.75a.5.5 0 0 1 .5.5v.75a.5.5 0 0 1-.5.5h-.75a.5.5 0 0 1-.5-.5V3.5a.5.5 0 0 1 .5-.5m-5.125.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75"
    />
  </Svg>
);
