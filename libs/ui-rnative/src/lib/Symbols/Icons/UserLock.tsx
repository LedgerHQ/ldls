import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserLock icon component for React Native.
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
 * import { UserLock } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <UserLock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserLock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={UserLock} size="md">
 *   Click me
 * </Button>
 */
export const UserLock = createIcon(
  "UserLock",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.785 8.21v-.715a1 1 0 1 1 2 0v.71M5.5 7.5h-2a2 2 0 0 0-2 2v.5m6.285-1.786h2c.395 0 .714.32.714.714v.857c0 .395-.32.714-.713.714H7.785a.714.714 0 0 1-.714-.713v-.858c0-.394.32-.714.714-.714M5.5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </Svg>
);
