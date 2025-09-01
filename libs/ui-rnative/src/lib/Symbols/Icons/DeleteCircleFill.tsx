import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * DeleteCircleFill icon component for React Native.
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
 * import { DeleteCircleFill } from '@ldls/ui-rnative/symbols';
 *
 * <DeleteCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DeleteCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={DeleteCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const DeleteCircleFill = createIcon(
  "DeleteCircleFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.125 6A4.87 4.87 0 0 1 6 1.125a4.875 4.875 0 1 1 0 9.75A4.87 4.87 0 0 1 1.125 6M4.85 4.32a.375.375 0 1 0-.53.53L5.47 6 4.32 7.15a.375.375 0 1 0 .53.53L6 6.53l1.15 1.15a.375.375 0 0 0 .53-.53L6.53 6l1.15-1.15a.375.375 0 0 0-.53-.53L6 5.47z"
      clipRule="evenodd"
    />
  </Svg>
);
