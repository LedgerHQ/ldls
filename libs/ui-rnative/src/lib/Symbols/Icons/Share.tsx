import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Share icon component for React Native.
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
 * import { Share } from '@ldls/ui-rnative/symbols';
 *
 * <Share />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Share size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Share} size="md">
 *   Click me
 * </Button>
 */
export const Share = createIcon(
  "Share",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.33341 6.66667H4.00008C3.26341 6.66667 2.66675 7.26333 2.66675 8V12.6667C2.66675 13.4033 3.26341 14 4.00008 14H12.0001C12.7367 14 13.3334 13.4033 13.3334 12.6667V8C13.3334 7.26333 12.7367 6.66667 12.0001 6.66667H10.6667M8.00008 2V9.33333M8.00008 2L6.00075 4M8.00008 2L10.0001 4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
