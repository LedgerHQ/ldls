import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Mobile icon component for React Native.
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
 * import { Mobile } from '@ldls/ui-rnative/symbols';
 *
 * <Mobile />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Mobile size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Mobile} size="md">
 *   Click me
 * </Button>
 */
export const Mobile = createIcon(
  "Mobile",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.33333 2V3.2C6.31333 3.4 6.46 3.57333 6.66667 3.6H9.33333C9.53333 3.57333 9.67933 3.4 9.666 3.2V2M6.66667 12H9.33333M10.6667 14H5.33333C4.59333 14 4 13.4 4 12.6667V3.33333C4 2.59333 4.59333 2 5.33333 2H10.6667C11.4 2 12 2.59333 12 3.33333V12.6667C12 13.4 11.4 14 10.6667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
