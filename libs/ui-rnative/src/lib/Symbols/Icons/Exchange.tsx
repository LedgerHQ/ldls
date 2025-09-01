import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Exchange icon component for React Native.
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
 * import { Exchange } from '@ldls/ui-rnative/symbols';
 *
 * <Exchange />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Exchange size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Exchange} size="md">
 *   Click me
 * </Button>
 */
export const Exchange = createIcon(
  "Exchange",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 9.5H5A2.5 2.5 0 0 1 2.5 7V2.5m0 0 1.25 1.25M2.5 2.5 1.25 3.75M5.5 2.5H7A2.5 2.5 0 0 1 9.5 5v4.5m0 0L8 8m1.5 1.5L11 8"
    />
  </Svg>
);
