import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCrypto icon component for React Native.
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
 * import { CoinsCrypto } from '@ldls/ui-rnative/symbols';
 *
 * <CoinsCrypto />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsCrypto size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinsCrypto} size="md">
 *   Click me
 * </Button>
 */
export const CoinsCrypto = createIcon(
  "CoinsCrypto",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.84 2.471A3.315 3.315 0 1 1 9.529 7.16m-5.679.015v-1.4h1.411c.385 0 .695.31.695.695a.7.7 0 0 1-.7.695m-.521-1.79v.4m0 3.215v-.455m3.397-1.351a3.317 3.317 0 1 1-6.634-.002 3.317 3.317 0 0 1 6.634.002m-2.697 1.35H3.85v-1.36h1.583a.675.675 0 1 1-.005 1.35z"
    />
  </Svg>
);
