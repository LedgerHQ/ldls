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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 10c0-1.25 1-2.2 2.2-2.2h2.55c1.25 0 2.2 1 2.2 2.2M7.5 2.6c.85.85.85 2.2 0 3s-2.2.85-3 0-.85-2.2 0-3 2.15-.8 3 0"
    />
  </Svg>
);
