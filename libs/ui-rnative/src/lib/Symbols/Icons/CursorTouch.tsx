import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CursorTouch icon component for React Native.
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
 * import { CursorTouch } from '@ldls/ui-rnative/symbols';
 *
 * <CursorTouch />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CursorTouch size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CursorTouch} size="md">
 *   Click me
 * </Button>
 */
export const CursorTouch = createIcon(
  "CursorTouch",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.47339 5.33337H4.14006M11.4734 5.33337H10.8067M10.3001 2.50671L9.82672 2.97337M4.64006 2.50671L5.11339 2.97337M7.47339 1.33337V2.00004M8.47072 8.66671V5.66671C8.47072 5.11337 8.01739 4.66671 7.47072 4.66671C6.91739 4.66671 6.47072 5.11337 6.47072 5.66671V10.6667L5.11072 10.2134C4.71539 10.08 4.27739 10.18 3.98406 10.4734C3.52406 10.9267 3.55739 11.6827 4.05739 12.0974L6.75739 14.344C6.99739 14.5374 7.29739 14.6507 7.61072 14.6507H10.6174C11.2841 14.6507 11.8567 14.144 11.9374 13.4774L12.2974 10.582C12.3841 9.86871 11.8974 9.21537 11.1907 9.10137L8.45072 8.64137L8.47072 8.66671Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
