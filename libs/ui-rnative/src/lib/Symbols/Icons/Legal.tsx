import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Legal icon component for React Native.
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
 * import { Legal } from '@ldls/ui-rnative/symbols';
 *
 * <Legal />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Legal size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Legal} size="md">
 *   Click me
 * </Button>
 */
export const Legal = createIcon(
  "Legal",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6 14H3.33333C2.59333 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2H11.3333C12.0667 2 12.6667 2.59333 12.6667 3.33333V6M4.66667 5.33333H8.66667M4.66667 8H6M8.66667 14H14M9.33333 14V10.9467M11.3333 14V10.9467M13.3333 14V10.9467M8.66667 10.9467H14V9.75333L11.3333 8.66L8.66667 9.74667V10.9467Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
