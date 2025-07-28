import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Mail icon component for React Native.
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
 * import { Mail } from '@ldls/ui-rnative/symbols';
 *
 * <Mail />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Mail size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Mail} size="md">
 *   Click me
 * </Button>
 */
export const Mail = createIcon(
  "Mail",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2 4.66671V11.3334C2 12.0667 2.6 12.6667 3.33333 12.6667H12.6667C13.4 12.6667 14 12.0667 14 11.3334V4.66671M2 4.53337C2 4.93337 2.2 5.26671 2.53333 5.53337L6.53333 8.26671C7.46667 8.86671 8.6 8.86671 9.53333 8.26671L13.5333 5.60004C13.8 5.26671 14 4.93337 14 4.53337C14 3.86671 13.4667 3.33337 12.8 3.33337H3.2C2.53333 3.33337 2 3.86671 2 4.53337Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
