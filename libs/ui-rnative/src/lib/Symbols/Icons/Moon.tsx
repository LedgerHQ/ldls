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
 * import { Moon } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Moon />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Moon size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Moon} size="md">
 *   Click me
 * </Button>
 */
export const Moon = createIcon(
  "Moon",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.85 7.5c-1.25.4-2.7.15-3.7-.85C4.9 5.4 4.8 3.4 5.8 2c-2.05.2-3.65 1.9-3.65 4 0 2.2 1.8 4 4 4 1.65 0 3.1-1.05 3.7-2.5"
      clipRule="evenodd"
    />
  </Svg>
);
