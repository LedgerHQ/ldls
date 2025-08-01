import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Percentage icon component for React Native.
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
 * import { Percentage } from '@ldls/ui-rnative/symbols';
 *
 * <Percentage />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Percentage size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Percentage} size="md">
 *   Click me
 * </Button>
 */
export const Percentage = createIcon(
  "Percentage",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M14 2 2 14m11.6-2.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6.4 4.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
);
