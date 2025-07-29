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
      d="M13.1333 9.99999C11.4666 10.5333 9.5333 10.2 8.19997 8.86666C6.5333 7.19999 6.39997 4.53332 7.7333 2.66666C4.99997 2.93332 2.86664 5.19999 2.86664 7.99999C2.86664 10.9333 5.26664 13.3333 8.19997 13.3333C10.4 13.3333 12.3333 11.9333 13.1333 9.99999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
