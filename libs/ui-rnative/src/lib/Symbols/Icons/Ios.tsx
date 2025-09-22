import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Ios icon component for React Native.
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
 * import { Ios } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Ios />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Ios size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Ios} size="md">
 *   Click me
 * </Button>
 */
export const Ios = createIcon(
  "Ios",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M6.016 6.005c0-.728-.347-1.189-.891-1.189-.547 0-.892.461-.892 1.189 0 .725.345 1.185.892 1.185.544 0 .89-.46.89-1.186"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.375 1.125a2.25 2.25 0 0 0-2.25 2.25v5.25a2.25 2.25 0 0 0 2.25 2.25h5.25a2.25 2.25 0 0 0 2.25-2.25v-5.25a2.25 2.25 0 0 0-2.25-2.25zm-.006 6.508h-.527V5.24h.527zM3.4 4.62c0 .17-.13.305-.294.305a.297.297 0 0 1-.292-.305c0-.172.129-.308.292-.308.165 0 .294.136.294.308m.275 1.385c0-1.037.56-1.686 1.45-1.686s1.449.649 1.449 1.686-.56 1.683-1.448 1.683c-.892 0-1.45-.647-1.45-1.683m4.309 1.682c-.703 0-1.165-.37-1.188-.97h.53c.033.3.315.496.687.496.369 0 .625-.194.625-.465 0-.235-.157-.37-.542-.468l-.396-.1c-.563-.137-.83-.426-.83-.892 0-.578.472-.969 1.137-.969.673 0 1.118.389 1.13.963h-.52c-.026-.305-.265-.488-.614-.488-.345 0-.578.18-.578.452 0 .216.154.343.53.438l.35.086c.621.15.883.424.883.91 0 .619-.465 1.007-1.204 1.007"
      clipRule="evenodd"
    />
  </Svg>
);
