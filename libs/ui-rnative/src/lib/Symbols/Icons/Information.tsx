import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Information icon component for React Native.
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
 * import { Information } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Information />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Information size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Information} size="md">
 *   Click me
 * </Button>
 */
export const Information = createIcon(
  "Information",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.995 4a.124.124 0 0 0-.125.125c0 .065.055.125.125.125a.13.13 0 0 0 .125-.125c0-.07-.06-.125-.13-.125M6 6v2.5m0 2c-2.49 0-4.5-2.014-4.5-4.5A4.5 4.5 0 1 1 6 10.5"
    />
  </Svg>
);
