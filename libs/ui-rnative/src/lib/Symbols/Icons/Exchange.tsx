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
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8.667 12.667h-2a3.334 3.334 0 0 1-3.334-3.334v-6m0 0L5 5M3.333 3.333 1.667 5m5.666-1.667h2a3.334 3.334 0 0 1 3.334 3.334v6m0 0-2-2m2 2 2-2"
    />
  </Svg>
);
