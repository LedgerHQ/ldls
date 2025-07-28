import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CloudUpload icon component for React Native.
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
 * import { CloudUpload } from '@ldls/ui-rnative/symbols';
 *
 * <CloudUpload />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CloudUpload size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CloudUpload} size="md">
 *   Click me
 * </Button>
 */
export const CloudUpload = createIcon(
  "CloudUpload",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.93333 11.3334H4.65999C2.81333 11.3334 1.32666 9.84003 1.32666 8.00003C1.32666 6.33336 2.55933 4.92669 4.20599 4.70669V4.70003C4.75266 3.07336 6.27266 1.98669 7.98599 1.98669C10.1927 1.98669 11.986 3.77336 11.986 5.98669C13.4527 5.98669 14.6527 7.18003 14.6527 8.65336C14.6527 10.12 13.4527 11.32 11.986 11.32H11.046M9.33333 12L7.99999 10.6667M7.99999 10.6667L6.66666 12M7.99999 10.6667V14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
