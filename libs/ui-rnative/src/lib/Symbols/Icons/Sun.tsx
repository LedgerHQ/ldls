import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Sun icon component for React Native.
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
 * import { Sun } from '@ldls/ui-rnative/symbols';
 *
 * <Sun />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Sun size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Sun} size="md">
 *   Click me
 * </Button>
 */
export const Sun = createIcon(
  "Sun",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99998 2.66668V1.33334M7.99998 14.6667V13.3333M12.24 3.76001L12.7133 3.28668M3.28665 12.7133L3.75998 12.24M13.3333 8.00001H14.6666M1.33331 8.00001H2.66665M12.24 12.24L12.7133 12.7133M3.28665 3.28668L3.75998 3.76001M10.357 5.64299C11.6587 6.94474 11.6587 9.05529 10.357 10.357C9.05523 11.6588 6.94468 11.6588 5.64293 10.357C4.34119 9.05529 4.34119 6.94474 5.64293 5.64299C6.94468 4.34124 9.05523 4.34124 10.357 5.64299Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
