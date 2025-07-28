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
 * import { MoreHorizontal } from '@ldls/ui-rnative/symbols';
 *
 * <MoreHorizontal />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MoreHorizontal size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MoreHorizontal} size="md">
 *   Click me
 * </Button>
 */
export const MoreHorizontal = createIcon(
  "MoreHorizontal",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.6602 8.00002C11.6602 8.18669 11.8068 8.33335 11.9935 8.33335C12.1735 8.33335 12.3268 8.18669 12.3268 8.00002C12.3268 7.82002 12.1735 7.66669 11.9935 7.66669C11.8068 7.66669 11.6602 7.82002 11.6602 8.00669M7.66016 8.00002C7.66016 8.18669 7.80682 8.33335 7.99349 8.33335C8.17349 8.33335 8.32682 8.18669 8.32682 8.00002C8.32682 7.82002 8.17349 7.66669 7.99349 7.66669C7.80682 7.66669 7.66016 7.82002 7.66016 8.00669M3.66016 8.00002C3.66016 8.18669 3.80682 8.33335 3.99349 8.33335C4.17349 8.33335 4.32682 8.18669 4.32682 8.00002C4.32682 7.82002 4.17349 7.66669 3.99349 7.66669C3.80682 7.66669 3.66016 7.82002 3.66016 8.00669"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
