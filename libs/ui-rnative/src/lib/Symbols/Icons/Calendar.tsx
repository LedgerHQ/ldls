import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Calendar icon component for React Native.
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
 * import { Calendar } from '@ldls/ui-rnative/symbols';
 *
 * <Calendar />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Calendar size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Calendar} size="md">
 *   Click me
 * </Button>
 */
export const Calendar = createIcon(
  "Calendar",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5 2V4M11 2V4M14 6.66667H2M4 2.99933H12C13.1046 2.99933 14 3.89476 14 4.99933V11.9993C14 13.1039 13.1046 13.9993 12 13.9993H4C2.89543 13.9993 2 13.1039 2 11.9993V4.99933C2 3.89476 2.89543 2.99933 4 2.99933Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
