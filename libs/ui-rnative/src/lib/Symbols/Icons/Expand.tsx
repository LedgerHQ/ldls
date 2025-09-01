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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 1.5h2m0 0v2m0-2-3 3M2 5.5V3a1 1 0 0 1 1-1h2.5m-2 8.5h-2m0 0v-2m0 2 3-3m5.5-1V9a1 1 0 0 1-1 1H6"
    />
  </Svg>
);
