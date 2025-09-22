import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UsbC icon component for React Native.
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
 * import { UsbC } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <UsbC />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UsbC size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={UsbC} size="md">
 *   Click me
 * </Button>
 */
export const UsbC = createIcon(
  "UsbC",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 9.5V11M4 4.5V2c0-.28.22-.5.5-.5h3c.275 0 .5.22.5.5v2.5m-1 5V11M3.75 4.5h4.5c.41 0 .75.335.75.75V8c0 .825-.675 1.5-1.5 1.5h-3C3.67 9.5 3 8.825 3 8V5.25c0-.415.335-.75.75-.75"
    />
  </Svg>
);
