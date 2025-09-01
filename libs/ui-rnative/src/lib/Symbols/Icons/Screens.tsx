import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Screens icon component for React Native.
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
 * import { Screens } from '@ldls/ui-rnative/symbols';
 *
 * <Screens />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Screens size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Screens} size="md">
 *   Click me
 * </Button>
 */
export const Screens = createIcon(
  "Screens",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 1.498h4M3 3.374H9m.175 7.128H2.824a1 1 0 0 1-.996-.9L1.503 6.35a1 1 0 0 1 .996-1.1H9.5a1 1 0 0 1 .996 1.1l-.325 3.251a1 1 0 0 1-.996.9"
    />
  </Svg>
);
