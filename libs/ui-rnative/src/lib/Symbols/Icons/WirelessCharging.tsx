import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WirelessCharging icon component for React Native.
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
 * import { WirelessCharging } from '@ldls/ui-rnative/symbols';
 *
 * <WirelessCharging />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WirelessCharging size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WirelessCharging} size="md">
 *   Click me
 * </Button>
 */
export const WirelessCharging = createIcon(
  "WirelessCharging",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9 11.3333V12.6667C9 13.0333 8.7 13.3333 8.33333 13.3333H7.66667C7.29333 13.3333 7 13.0333 7 12.6667V11.3333M8 14.6667V13.3333M7.83467 5L6.99467 6.66667H8.99467L8.15467 8.33333M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V10C14 10.7364 13.403 11.3333 12.6667 11.3333H3.33333C2.59695 11.3333 2 10.7364 2 10V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
