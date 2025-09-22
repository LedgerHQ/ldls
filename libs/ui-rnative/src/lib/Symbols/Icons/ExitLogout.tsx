import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ExitLogout icon component for React Native.
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
 * import { ExitLogout } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ExitLogout />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ExitLogout size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={ExitLogout} size="md">
 *   Click me
 * </Button>
 */
export const ExitLogout = createIcon(
  "ExitLogout",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 6h5m0 0L8.75 7.75M10.5 6 8.75 4.25M6 1.5H3c-.83 0-1.5.67-1.5 1.5v6c0 .825.67 1.5 1.5 1.5h3"
    />
  </Svg>
);
