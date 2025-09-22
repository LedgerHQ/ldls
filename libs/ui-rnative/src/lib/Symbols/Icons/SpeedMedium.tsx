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
 * import { SpeedMedium } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <SpeedMedium />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SpeedMedium size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={SpeedMedium} size="md">
 *   Click me
 * </Button>
 */
export const SpeedMedium = createIcon(
  "SpeedMedium",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.894 4.655a4.46 4.46 0 0 0 1.27 5.34m5.66-.006a4.49 4.49 0 0 0 1.67-3.5A4.51 4.51 0 0 0 7.5 2.252M3.16 9.989a4.49 4.49 0 0 1-1.67-3.5 4.51 4.51 0 0 1 2.994-4.237M6 5.5V2m-.016 3.495a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </Svg>
);
