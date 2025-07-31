import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserDelete icon component for React Native.
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
 * import { UserDelete } from '@ldls/ui-rnative/symbols';
 *
 * <UserDelete />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserDelete size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={UserDelete} size="md">
 *   Click me
 * </Button>
 */
export const UserDelete = createIcon(
  "UserDelete",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M2.667 13.333c0-1.66 1.34-3 3-3h1.722m3.098 2.847 2.36-2.36m-2.36 0 2.36 2.36M8 2.667a2.833 2.833 0 1 0 0 5.666 2.833 2.833 0 0 0 0-5.666"
    />
  </Svg>
);
