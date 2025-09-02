import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MenuBurger icon component for React Native.
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
 * import { MenuBurger } from '@ledgerhq/ui-rnative/symbols';
 *
 * <MenuBurger />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MenuBurger size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={MenuBurger} size="md">
 *   Click me
 * </Button>
 */
export const MenuBurger = createIcon(
  "MenuBurger",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M3.667 8h8.666m-8.666 3.667h8.666M3.667 4.333h8.666"
    />
  </Svg>
);
