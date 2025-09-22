import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserCheck icon component for React Native.
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
 * import { UserCheck } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <UserCheck />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserCheck size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={UserCheck} size="md">
 *   Click me
 * </Button>
 */
export const UserCheck = createIcon(
  "UserCheck",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 10a2.247 2.247 0 0 1 2.25-2.25h1.292m3.958.719L8 9.969l-.9-.9M6 2a2.125 2.125 0 1 0 0 4.25A2.125 2.125 0 0 0 6 2"
    />
  </Svg>
);
