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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10.5S2.5 7.625 2.5 5a3.5 3.5 0 0 1 7 0c0 2.625-3.5 5.5-3.5 5.5"
    />
  </Svg>
);
