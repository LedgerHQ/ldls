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
 * import { AlarmClock } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <AlarmClock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <AlarmClock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={AlarmClock} size="md">
 *   Click me
 * </Button>
 */
export const AlarmClock = createIcon(
  "AlarmClock",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.335 8.605c.292.41.65.768 1.06 1.06M1.568 5.25A4.5 4.5 0 0 0 1.5 6c0 .256.026.505.067.75m.768-3.354c.292-.411.65-.769 1.06-1.061m1.855 8.097c.245.041.494.068.75.068a4.5 4.5 0 1 0 0-9c-.256 0-.505.026-.75.067M8 5 5.5 7.5 4 6"
    />
  </Svg>
);
