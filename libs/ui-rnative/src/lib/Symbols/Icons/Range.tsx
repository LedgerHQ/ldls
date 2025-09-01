import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Range icon component for React Native.
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
 * import { Range } from '@ldls/ui-rnative/symbols';
 *
 * <Range />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Range size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Range} size="md">
 *   Click me
 * </Button>
 */
export const Range = createIcon(
  "Range",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 10h4m-4-2h3m-3-2h4m-4-2h3m-3-2h4M9 10V2m0 8 1.25-1.25M9 10 7.75 8.75M9 2 7.75 3.25M9 2l1.25 1.25"
    />
  </Svg>
);
