import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Share2 icon component for React Native.
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
 * import { Share2 } from '@ldls/ui-rnative/symbols';
 *
 * <Share2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Share2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Share2} size="md">
 *   Click me
 * </Button>
 */
export const Share2 = createIcon(
  "Share2",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.02657 7.20671L9.97324 5.23338M6.02657 8.79335L9.97324 10.7667M5.70174 6.74277C6.3961 7.43712 6.3961 8.56289 5.70174 9.25724C5.00739 9.9516 3.88162 9.9516 3.18727 9.25724C2.49292 8.56289 2.49292 7.43712 3.18727 6.74277C3.88162 6.04842 5.00739 6.04842 5.70174 6.74277ZM12.8125 3.18745C13.5068 3.88181 13.5068 5.00757 12.8125 5.70193C12.1181 6.39628 10.9924 6.39628 10.298 5.70193C9.60367 5.00757 9.60367 3.88181 10.298 3.18745C10.9924 2.4931 12.1181 2.4931 12.8125 3.18745ZM12.8125 10.2981C13.5068 10.9924 13.5068 12.1182 12.8125 12.8126C12.1181 13.5069 10.9924 13.5069 10.298 12.8126C9.60367 12.1182 9.60367 10.9924 10.298 10.2981C10.9924 9.60374 12.1181 9.60374 12.8125 10.2981Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
