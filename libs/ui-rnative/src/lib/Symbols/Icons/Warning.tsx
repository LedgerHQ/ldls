import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Warning icon component for React Native.
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
 * import { Warning } from '@ldls/ui-rnative/symbols';
 *
 * <Warning />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Warning size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Warning} size="md">
 *   Click me
 * </Button>
 */
export const Warning = createIcon(
  "Warning",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_232)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.56V4.69m-.005 3.372a.124.124 0 0 0-.125.126c0 .064.055.124.125.124a.13.13 0 0 0 .125-.124c0-.07-.06-.126-.13-.126m1.025-5.997 3.824 6.702a1.17 1.17 0 0 1-1.014 1.749h-7.66c-.897 0-1.46-.97-1.014-1.749l3.824-6.702c.445-.79 1.58-.79 2.029 0z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_232">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
