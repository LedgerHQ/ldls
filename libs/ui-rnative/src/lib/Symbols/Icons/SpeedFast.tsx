import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedFast icon component for React Native.
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
 * import { SpeedFast } from '@ldls/ui-rnative/symbols';
 *
 * <SpeedFast />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SpeedFast size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SpeedFast} size="md">
 *   Click me
 * </Button>
 */
export const SpeedFast = createIcon(
  "SpeedFast",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.94 7.72668L12.3333 4.33334M13.4533 6.20668C14.5867 8.68668 13.8933 11.62 11.76 13.3267M10.4533 3.20668C9.68 2.84668 8.84 2.66668 7.99333 2.66001L7.99267 2.65934C4.67934 2.65268 1.99267 5.33935 1.986 8.65268C1.97934 10.466 2.806 12.1793 4.21267 13.3193M8 7.32668C7.64638 7.32668 7.30724 7.46715 7.05719 7.7172C6.80714 7.96725 6.66667 8.30639 6.66667 8.66001C6.66667 9.01363 6.80714 9.35277 7.05719 9.60282C7.30724 9.85287 7.64638 9.99334 8 9.99334C8.35362 9.99334 8.69276 9.85287 8.94281 9.60282C9.19286 9.35277 9.33333 9.01363 9.33333 8.66001C9.33333 8.30639 9.19286 7.96725 8.94281 7.7172C8.69276 7.46715 8.35362 7.32668 8 7.32668Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
