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
 * import { User } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <User />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <User size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={User} size="md">
 *   Click me
 * </Button>
 */
export const User = createIcon(
  "User",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M3.333 13.333A2.916 2.916 0 0 1 6.267 10.4h3.4a2.916 2.916 0 0 1 2.933 2.933M10 3.467c1.133 1.133 1.133 2.933 0 4-1.133 1.066-2.933 1.133-4 0s-1.133-2.934 0-4a2.9 2.9 0 0 1 4 0"
    />
  </Svg>
);
