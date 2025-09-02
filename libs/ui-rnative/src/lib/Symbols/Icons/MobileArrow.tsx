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
 * import { MobileArrow } from '@ledgerhq/ui-rnative/symbols';
 *
 * <MobileArrow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MobileArrow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={MobileArrow} size="md">
 *   Click me
 * </Button>
 */
export const MobileArrow = createIcon(
  "MobileArrow",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M6.333 2v1.333c0 .18.154.334.334.334h2.666a.334.334 0 0 0 .334-.334V2M4 11.333v1.334C4 13.4 4.6 14 5.333 14h5.334c.74 0 1.333-.6 1.333-1.333V3.333C12 2.593 11.407 2 10.667 2H5.333C4.6 2 4 2.593 4 3.333v1.334M1.333 8h3.334m0 0L3.333 6.667M4.667 8 3.333 9.333"
    />
  </Svg>
);
