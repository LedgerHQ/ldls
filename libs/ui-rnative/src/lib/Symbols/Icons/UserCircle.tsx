import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserCircle icon component for React Native.
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
 * import { UserCircle } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <UserCircle />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserCircle size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={UserCircle} size="md">
 *   Click me
 * </Button>
 */
export const UserCircle = createIcon(
  "UserCircle",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9a4.994 4.994 0 0 1 6 0M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </Svg>
);
