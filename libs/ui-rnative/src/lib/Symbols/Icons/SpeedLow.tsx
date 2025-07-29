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
      d="M7.03845 7.72668L3.64512 4.33334M2.52512 6.20668C1.39179 8.68668 2.08512 11.62 4.21845 13.3267M5.52512 3.20668C6.29845 2.84668 7.13845 2.66668 7.98512 2.66001L7.98579 2.65934C11.2991 2.65268 13.9858 5.33935 13.9925 8.65268C13.9991 10.466 13.1725 12.1793 11.7658 13.3193M7.97845 7.32668C8.33208 7.32668 8.67121 7.46715 8.92126 7.7172C9.17131 7.96725 9.31179 8.30639 9.31179 8.66001C9.31179 9.01363 9.17131 9.35277 8.92126 9.60282C8.67121 9.85287 8.33208 9.99334 7.97845 9.99334C7.62483 9.99334 7.28569 9.85287 7.03564 9.60282C6.7856 9.35277 6.64512 9.01363 6.64512 8.66001C6.64512 8.30639 6.7856 7.96725 7.03564 7.7172C7.28569 7.46715 7.62483 7.32668 7.97845 7.32668Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
