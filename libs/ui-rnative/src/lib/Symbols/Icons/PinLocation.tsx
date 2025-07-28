import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * PinLocation icon component for React Native.
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
 * import { PinLocation } from '@ldls/ui-rnative/symbols';
 *
 * <PinLocation />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PinLocation size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={PinLocation} size="md">
 *   Click me
 * </Button>
 */
export const PinLocation = createIcon(
  "PinLocation",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00004 8.66667C6.89537 8.66667 6.00004 7.77133 6.00004 6.66667C6.00004 5.562 6.89537 4.66667 8.00004 4.66667C9.10471 4.66667 10 5.562 10 6.66667C10 7.77133 9.10471 8.66667 8.00004 8.66667Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.00004 14C8.00004 14 3.33337 10.1667 3.33337 6.66667C3.33337 4.08667 5.42004 2 8.00004 2C10.5734 2 12.6667 4.08667 12.6667 6.66667C12.6667 10.1667 8.00004 14 8.00004 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
