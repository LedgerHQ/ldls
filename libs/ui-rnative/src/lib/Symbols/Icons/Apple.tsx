import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Apple icon component for React Native.
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
 * import { Apple } from '@ldls/ui-rnative/symbols';
 *
 * <Apple />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Apple size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Apple} size="md">
 *   Click me
 * </Button>
 */
export const Apple = createIcon(
  "Apple",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M4.5 10.92c.24 0 .588-.108.816-.204.312-.12.624-.192.9-.192.252 0 .54.072.876.192.312.132.576.204.804.204.312 0 .6-.144.876-.396.168-.132.396-.42.672-.816.204-.276.384-.6.54-.948l.168-.456C9.384 7.98 8.808 7.248 8.808 6.3c-.024-.816.348-1.452 1.092-1.896-.432-.6-1.044-.924-1.86-.984-.324-.024-.696.048-1.128.204-.468.168-.756.252-.84.252-.096 0-.36-.072-.732-.228-.408-.132-.708-.204-.948-.204a2.35 2.35 0 0 0-1.2.336 2.35 2.35 0 0 0-.9.912c-.288.468-.444 1.044-.444 1.704 0 .564.108 1.164.336 1.788.192.564.444 1.056.744 1.488.3.42.528.696.72.852.276.264.564.396.852.396m1.512-7.692c0 .06 0 .12.012.18 1.044.096 2.052-1.044 2.052-2.136V1.08a1.95 1.95 0 0 0-.804.228c-.768.384-1.26 1.152-1.26 1.92"
    />
  </Svg>
);
