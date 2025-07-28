import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Expand icon component for React Native.
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
 * import { Expand } from '@ldls/ui-rnative/symbols';
 *
 * <Expand />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Expand size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Expand} size="md">
 *   Click me
 * </Button>
 */
export const Expand = createIcon(
  "Expand",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.3333 2H14M14 2V4.66667M14 2L10 6M2.66667 7.33333V4C2.66667 3.26333 3.26333 2.66667 4 2.66667H7.33333M4.66667 14H2M2 14V11.3333M2 14L6 10M13.3333 8.66667V12C13.3333 12.7367 12.7367 13.3333 12 13.3333H8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
