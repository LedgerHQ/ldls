import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * GroupUsers icon component for React Native.
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
 * import { GroupUsers } from '@ldls/ui-rnative/symbols';
 *
 * <GroupUsers />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <GroupUsers size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={GroupUsers} size="md">
 *   Click me
 * </Button>
 */
export const GroupUsers = createIcon(
  "GroupUsers",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M13.86 6.347c.527.526.527 1.38 0 1.906a1.356 1.356 0 0 1-1.913 0 1.344 1.344 0 0 1 0-1.913 1.337 1.337 0 0 1 1.906 0m-4.386-2.4a2.08 2.08 0 0 1 0 2.933 2.09 2.09 0 0 1-2.94 0 2.076 2.076 0 0 1 0-2.94 2.07 2.07 0 0 1 2.933 0M4.04 6.347c.527.526.527 1.38 0 1.906a1.356 1.356 0 0 1-1.913 0 1.344 1.344 0 0 1 0-1.913 1.337 1.337 0 0 1 1.906 0m11.3 6.327v-.734c0-.926-.746-1.666-1.666-1.666h-.54m-12.46 2.4v-.734c0-.926.74-1.666 1.666-1.666h.534m8.686 2.4v-1.074A2.33 2.33 0 0 0 9.22 9.26H6.767a2.327 2.327 0 0 0-2.334 2.333v1.067"
    />
  </Svg>
);
