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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M13.133 10c-1.666.533-3.6.2-4.933-1.133-1.667-1.667-1.8-4.334-.467-6.2C5 2.933 2.867 5.2 2.867 8c0 2.933 2.4 5.333 5.333 5.333 2.2 0 4.133-1.4 4.933-3.333"
      clipRule="evenodd"
    />
  </Svg>
);
