import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * AlarmClock icon component for React Native.
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
 * import { AlarmClock } from '@ldls/ui-rnative/symbols';
 *
 * <AlarmClock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <AlarmClock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={AlarmClock} size="md">
 *   Click me
 * </Button>
 */
export const AlarmClock = createIcon(
  "AlarmClock",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.11333 11.4727C3.50267 12.0193 3.98067 12.4973 4.52733 12.8867M2.09 7C2.03533 7.326 2 7.65867 2 8C2 8.34133 2.03533 8.674 2.09 9M3.11333 4.52733C3.50267 3.98 3.98 3.50267 4.52733 3.11267M7 13.91C7.326 13.9647 7.65867 14 8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C7.65867 2 7.326 2.03533 7 2.09M10.6667 6.66667L7.33333 10L5.33333 8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
