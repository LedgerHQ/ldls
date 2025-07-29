import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Lock icon component for React Native.
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
 * import { Lock } from '@ldls/ui-rnative/symbols';
 *
 * <Lock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Lock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Lock} size="md">
 *   Click me
 * </Button>
 */
export const Lock = createIcon(
  "Lock",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.33331 6.66667V4.66667C5.33331 3.19333 6.52665 2 7.99998 2C9.46665 2 10.6666 3.19333 10.6666 4.66667V6.66667M11.3333 14H4.66665C3.92665 14 3.33331 13.4 3.33331 12.6667V8C3.33331 7.26 3.92665 6.66667 4.66665 6.66667H11.3333C12.0666 6.66667 12.6666 7.26 12.6666 8V12.6667C12.6666 13.4 12.0666 14 11.3333 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
