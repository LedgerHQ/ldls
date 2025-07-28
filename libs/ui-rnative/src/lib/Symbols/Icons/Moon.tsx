import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Moon icon component for React Native.
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
 * import { Moon } from '@ldls/ui-rnative/symbols';
 *
 * <Moon />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Moon size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Moon} size="md">
 *   Click me
 * </Button>
 */
export const Moon = createIcon(
  "Moon",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1333 10C11.4666 10.5334 9.5333 10.2 8.19997 8.86669C6.5333 7.20002 6.39997 4.53335 7.7333 2.66669C4.99997 2.93335 2.86664 5.20002 2.86664 8.00002C2.86664 10.9334 5.26664 13.3334 8.19997 13.3334C10.4 13.3334 12.3333 11.9334 13.1333 10Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
