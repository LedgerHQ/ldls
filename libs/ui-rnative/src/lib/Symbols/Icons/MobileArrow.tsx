import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MobileArrow icon component for React Native.
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
 * import { MobileArrow } from '@ldls/ui-rnative/symbols';
 *
 * <MobileArrow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MobileArrow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MobileArrow} size="md">
 *   Click me
 * </Button>
 */
export const MobileArrow = createIcon(
  "MobileArrow",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.33337 2V3.33333C6.33337 3.51333 6.48671 3.66667 6.66671 3.66667H9.33337C9.52004 3.66667 9.66671 3.51333 9.66671 3.33333V2M4.00004 11.3333V12.6667C4.00004 13.4 4.60004 14 5.33337 14H10.6667C11.4067 14 12 13.4 12 12.6667V3.33333C12 2.59333 11.4067 2 10.6667 2H5.33337C4.60004 2 4.00004 2.59333 4.00004 3.33333V4.66667M1.33337 8H4.66671M4.66671 8L3.33337 6.66667M4.66671 8L3.33337 9.33333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
