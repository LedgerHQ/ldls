import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Nft icon component for React Native.
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
 * import { Nft } from '@ldls/ui-rnative/symbols';
 *
 * <Nft />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Nft size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Nft} size="md">
 *   Click me
 * </Button>
 */
export const Nft = createIcon(
  "Nft",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.25 7.25v-2.5l1.25 2.5v-2.5m1.25 2.5v-2.5h1m1.5 2.5v-2.5m0 0h-.5m.5 0h.5M6 6h.25m3.875 1.852V4.147a.92.92 0 0 0-.459-.794L6.458 1.501a.92.92 0 0 0-.917 0L2.334 3.354a.92.92 0 0 0-.458.793v3.705c0 .327.175.63.458.794l3.209 1.852a.92.92 0 0 0 .917 0l3.208-1.852a.92.92 0 0 0 .458-.794"
    />
  </Svg>
);
