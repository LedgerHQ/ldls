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
 * import { WirelessCharging } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <WirelessCharging />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WirelessCharging size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={WirelessCharging} size="md">
 *   Click me
 * </Button>
 */
export const WirelessCharging = createIcon(
  "WirelessCharging",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 8.5v1c0 .275-.225.5-.5.5h-.5c-.28 0-.5-.225-.5-.5v-1M6 11v-1m-.124-6.25L5.246 5h1.5l-.63 1.25M2.5 1.5h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"
    />
  </Svg>
);
