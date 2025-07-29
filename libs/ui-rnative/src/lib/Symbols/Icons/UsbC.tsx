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
 * import { UsbC } from '@ldls/ui-rnative/symbols';
 *
 * <UsbC />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UsbC size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={UsbC} size="md">
 *   Click me
 * </Button>
 */
export const UsbC = createIcon(
  "UsbC",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.66667 12.6667V14.6667M5.33333 6V2.66667C5.33333 2.29333 5.62667 2 6 2H10C10.3667 2 10.6667 2.29333 10.6667 2.66667V6M9.33333 12.6667V14.6667M5 6H11C11.5467 6 12 6.44667 12 7V10.6667C12 11.7667 11.1 12.6667 10 12.6667H6C4.89333 12.6667 4 11.7667 4 10.6667V7C4 6.44667 4.44667 6 5 6Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
