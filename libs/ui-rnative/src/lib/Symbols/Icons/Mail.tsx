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
      d="M2 4.66665V11.3333C2 12.0666 2.6 12.6666 3.33333 12.6666H12.6667C13.4 12.6666 14 12.0666 14 11.3333V4.66665M2 4.53331C2 4.93331 2.2 5.26665 2.53333 5.53331L6.53333 8.26665C7.46667 8.86665 8.6 8.86665 9.53333 8.26665L13.5333 5.59998C13.8 5.26665 14 4.93331 14 4.53331C14 3.86665 13.4667 3.33331 12.8 3.33331H3.2C2.53333 3.33331 2 3.86665 2 4.53331Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
