import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MonitorPassword icon component for React Native.
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
 * import { MonitorPassword } from '@ldls/ui-rnative/symbols';
 *
 * <MonitorPassword />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MonitorPassword size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MonitorPassword} size="md">
 *   Click me
 * </Button>
 */
export const MonitorPassword = createIcon(
  "MonitorPassword",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 7.99998V9.61331C14 10.5533 13.2266 11.3266 12.28 11.3266C12.2733 11.3266 12.2733 11.3266 12.2733 11.3266H3.69998C2.75331 11.3266 1.97998 10.5533 1.97998 9.60665C1.97331 9.59998 1.97331 9.59998 1.97998 9.59998V3.69331C1.97331 2.74665 2.74664 1.97331 3.69331 1.97331M3.69331 1.97331C3.69331 1.96665 3.69331 1.96665 3.69331 1.97331ZM3.69331 1.97331H3.97331M9.33331 11.3333L9.66664 14M6.66664 11.3333L6.33331 14M5.42664 14H10.5733M8.32998 3.66665V3.65998L8.32331 3.65331H8.31664M10.33 3.66665V3.65998L10.3233 3.65331H10.3166M12.3266 3.66665V3.65998L12.32 3.65331H12.3133M14 8.99998H1.99998M7.33331 1.33331H13.3333C14.0697 1.33331 14.6666 1.93027 14.6666 2.66665V4.66665C14.6666 5.40303 14.0697 5.99998 13.3333 5.99998H7.33331C6.59693 5.99998 5.99998 5.40303 5.99998 4.66665V2.66665C5.99998 1.93027 6.59693 1.33331 7.33331 1.33331Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
