import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Share2 icon component for React Native.
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
 * import { Share2 } from '@ldls/ui-rnative/symbols';
 *
 * <Share2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Share2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Share2} size="md">
 *   Click me
 * </Button>
 */
export const Share2 = createIcon(
  "Share2",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.52 5.405 2.96-1.48m-2.96 2.67 2.96 1.48M4.276 5.057A1.334 1.334 0 1 1 2.39 6.943a1.334 1.334 0 0 1 1.886-1.886M9.61 2.391a1.334 1.334 0 1 1-1.886 1.885A1.334 1.334 0 0 1 9.61 2.391m0 5.333a1.334 1.334 0 1 1-1.886 1.885A1.334 1.334 0 0 1 9.61 7.724"
    />
  </Svg>
);
