import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * User icon component for React Native.
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
 * import { User } from '@ldls/ui-rnative/symbols';
 *
 * <User />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <User size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={User} size="md">
 *   Click me
 * </Button>
 */
export const User = createIcon(
  "User",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.33331 13.3333C3.33331 11.6667 4.66665 10.4 6.26665 10.4H9.66665C11.3333 10.4 12.6 11.7333 12.6 13.3333M9.99998 3.46666C11.1333 4.59999 11.1333 6.39999 9.99998 7.46666C8.86665 8.53332 7.06665 8.59999 5.99998 7.46666C4.93331 6.33332 4.86665 4.53332 5.99998 3.46666C7.13331 2.39999 8.86665 2.39999 9.99998 3.46666Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
