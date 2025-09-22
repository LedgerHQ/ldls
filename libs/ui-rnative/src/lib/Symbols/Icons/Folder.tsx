import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Folder icon component for React Native.
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
 * import { Folder } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Folder />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Folder size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Folder} size="md">
 *   Click me
 * </Button>
 */
export const Folder = createIcon(
  "Folder",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 4.5v-1a1 1 0 0 0-1-1H5.375m.72 1.445-.7-1.395c-.17-.34-.52-.555-.895-.555H2.49V1.99c-.555 0-1 .445-1 1v6a1 1 0 0 0 1 1h7c.55 0 1-.45 1-1v-4.5H6.98a.99.99 0 0 1-.895-.555z"
    />
  </Svg>
);
