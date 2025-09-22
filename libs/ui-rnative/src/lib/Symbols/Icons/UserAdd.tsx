import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserAdd icon component for React Native.
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
 * import { UserAdd } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <UserAdd />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserAdd size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={UserAdd} size="md">
 *   Click me
 * </Button>
 */
export const UserAdd = createIcon(
  "UserAdd",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.875H7.75m.625-.625V9.5M5 7.5H3.5a2 2 0 0 0-2 2v.5m6.875-3.25a2.125 2.125 0 1 0 0 4.25 2.125 2.125 0 0 0 0-4.25M5.5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </Svg>
);
