import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * NftHide icon component for React Native.
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
 * import { NftHide } from '@ldls/ui-rnative/symbols';
 *
 * <NftHide />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <NftHide size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={NftHide} size="md">
 *   Click me
 * </Button>
 */
export const NftHide = createIcon(
  "NftHide",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 8.66669V11.3334C14 12.8 12.8 14 11.3333 14H4.66667M4.66667 14C3.19333 14 2 12.8 2 11.3334V4.66669C2 3.19335 3.19333 2.00002 4.66667 2.00002H7.33333M4.66667 14L8.86 9.80002C9.48667 9.16669 10.5 9.16669 11.1267 9.80002L13.7467 12.42M2 8.66669L2.86 7.80002C3.48667 7.16669 4.5 7.16669 5.12667 7.79335L7.98667 10.6534M12.2525 3.93401C12.2859 3.96735 12.2859 4.02735 12.2525 4.06735C12.2125 4.10068 12.1525 4.10068 12.1125 4.06735C12.0725 4.02735 12.0725 3.96735 12.1125 3.92735C12.1459 3.88735 12.2059 3.88735 12.2459 3.92735M9.83987 4.46001C9.6532 4.18001 9.6532 3.81335 9.83987 3.54001C10.3999 2.68001 11.2932 1.99335 12.1819 1.99335C13.0685 1.99335 13.9552 2.67335 14.5219 3.53335C14.7019 3.80668 14.7019 4.17335 14.5219 4.45335C13.9552 5.30801 13.0619 5.99335 12.1752 5.99335C11.2819 5.99335 10.3952 5.30668 9.8332 4.45335L9.83987 4.46001Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
