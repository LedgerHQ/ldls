import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedLow icon component for React Native.
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
 * import { SpeedLow } from '@ldls/ui-rnative/symbols';
 *
 * <SpeedLow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SpeedLow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SpeedLow} size="md">
 *   Click me
 * </Button>
 */
export const SpeedLow = createIcon(
  "SpeedLow",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.03845 7.72665L3.64512 4.33331M2.52512 6.20665C1.39179 8.68665 2.08512 11.62 4.21845 13.3266M5.52512 3.20665C6.29845 2.84665 7.13845 2.66665 7.98512 2.65998L7.98579 2.65931C11.2991 2.65265 13.9858 5.33931 13.9925 8.65265C13.9991 10.466 13.1725 12.1793 11.7658 13.3193M7.97845 7.32665C8.33208 7.32665 8.67121 7.46712 8.92126 7.71717C9.17131 7.96722 9.31179 8.30636 9.31179 8.65998C9.31179 9.0136 9.17131 9.35274 8.92126 9.60279C8.67121 9.85284 8.33208 9.99331 7.97845 9.99331C7.62483 9.99331 7.28569 9.85284 7.03564 9.60279C6.7856 9.35274 6.64512 9.0136 6.64512 8.65998C6.64512 8.30636 6.7856 7.96722 7.03564 7.71717C7.28569 7.46712 7.62483 7.32665 7.97845 7.32665Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
