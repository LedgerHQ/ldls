import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedMedium icon component for React Native.
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
 * import { SpeedMedium } from '@ldls/ui-rnative/symbols';
 *
 * <SpeedMedium />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SpeedMedium size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SpeedMedium} size="md">
 *   Click me
 * </Button>
 */
export const SpeedMedium = createIcon(
  "SpeedMedium",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.52512 6.20665C1.39179 8.68665 2.08512 11.62 4.21845 13.3267M11.7661 13.3191C13.1727 12.1791 13.9994 10.4658 13.9927 8.65247C13.9875 6.04579 12.3235 3.82697 10.0006 3.00235M4.21297 13.3191C2.80631 12.1791 1.97964 10.4658 1.98631 8.65247C1.99155 6.04579 3.65554 3.82697 5.97845 3.00235M8.00059 7.33308V2.66641M7.97845 7.32665C8.33208 7.32665 8.67121 7.46713 8.92126 7.71718C9.17131 7.96723 9.31179 8.30636 9.31179 8.65999C9.31179 9.01361 9.17131 9.35275 8.92126 9.6028C8.67121 9.85284 8.33208 9.99332 7.97845 9.99332C7.62483 9.99332 7.28569 9.85284 7.03564 9.6028C6.7856 9.35275 6.64512 9.01361 6.64512 8.65999C6.64512 8.30636 6.7856 7.96723 7.03564 7.71718C7.28569 7.46713 7.62483 7.32665 7.97845 7.32665Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
