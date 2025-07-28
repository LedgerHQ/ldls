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
 * import { ExitLogout } from '@ldls/ui-rnative/symbols';
 *
 * <ExitLogout />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ExitLogout size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ExitLogout} size="md">
 *   Click me
 * </Button>
 */
export const ExitLogout = createIcon(
  "ExitLogout",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.33333 8H14M14 8L11.6667 10.3333M14 8L11.6667 5.66667M8 2H4C2.89333 2 2 2.89333 2 4V12C2 13.1 2.89333 14 4 14H8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
