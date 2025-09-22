import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MoreHorizontal icon component for React Native.
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
 * import { MoreHorizontal } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <MoreHorizontal />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MoreHorizontal size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={MoreHorizontal} size="md">
 *   Click me
 * </Button>
 */
export const MoreHorizontal = createIcon(
  "MoreHorizontal",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.745 6c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255m-3-.005c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255m-3-.005c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255"
    />
  </Svg>
);
