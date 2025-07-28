import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinPercent icon component for React Native.
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
 * import { CoinPercent } from '@ldls/ui-rnative/symbols';
 *
 * <CoinPercent />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinPercent size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinPercent} size="md">
 *   Click me
 * </Button>
 */
export const CoinPercent = createIcon(
  "CoinPercent",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.86001 6.13337L10.1333 3.85337M7.71335 3.76671C7.71335 3.73337 7.73335 3.70604 7.76668 3.70604C7.79335 3.70604 7.82001 3.72604 7.82001 3.75937C7.81335 3.78604 7.79335 3.81271 7.76001 3.81271C7.72668 3.80604 7.70001 3.78604 7.70001 3.75271V3.74604M5.33335 4.66671V3.53337C5.33335 2.31337 6.31335 1.33337 7.53335 1.33337H10.4667C11.68 1.33337 12.6667 2.31337 12.6667 3.53337V6.46671C12.6667 7.68004 11.68 8.66671 10.4667 8.66671H10M10.2833 6.22671C10.2767 6.25337 10.2567 6.28004 10.2233 6.28004C10.19 6.27337 10.1633 6.25337 10.1633 6.22004C10.1633 6.18671 10.1833 6.16004 10.2167 6.16004C10.2433 6.16004 10.27 6.18004 10.27 6.21337M2.00001 8.40004V12.9334C2.00001 13.52 3.19335 14 4.66668 14C6.13335 14 7.32668 13.52 7.33335 12.9334V8.40004M2.00001 10.6667C2.00001 11.2534 3.18668 11.7334 4.66001 11.7334C6.12668 11.7334 7.32668 11.2534 7.32668 10.6667M7.32668 8.40004C7.32668 8.98671 6.12668 9.46671 4.66001 9.46671C3.18668 9.46671 1.99335 8.98671 1.99335 8.40004C1.99335 7.80671 3.18668 7.33337 4.66001 7.33337C6.13201 7.33337 7.32001 7.80671 7.32668 8.40004Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
