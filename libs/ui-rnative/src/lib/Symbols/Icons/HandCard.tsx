import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * HandCard icon component for React Native.
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
 * import { HandCard } from '@ldls/ui-rnative/symbols';
 *
 * <HandCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <HandCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={HandCard} size="md">
 *   Click me
 * </Button>
 */
export const HandCard = createIcon(
  "HandCard",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M1.33057 9.33391L3.03163 6.4988C3.22741 6.17251 3.51218 5.9088 3.85253 5.73862L4.24282 5.54348C4.52065 5.40457 4.827 5.33225 5.13762 5.33225H14.6695M2.66447 14.0025L6.50732 12.6139C7.04368 12.4201 7.50381 12.0595 7.82022 11.585L9.8163 8.59182C10.1066 8.15647 10.0493 7.57672 9.67925 7.20671C9.25066 6.77812 8.55581 6.77805 8.12714 7.20655L6.66614 8.66693M6.66614 8.66693H5.33225M6.66614 8.66693L6.6661 4.93206C6.65086 4.06365 7.3422 3.34717 8.2106 3.33139H13.1249C13.9933 3.34717 14.6847 4.06365 14.6694 4.93206V7.73322C14.6847 8.60163 13.9933 9.31811 13.1249 9.33389H9.32141"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
