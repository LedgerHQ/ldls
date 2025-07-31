import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Magnet icon component for React Native.
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
 * import { Magnet } from '@ldls/ui-rnative/symbols';
 *
 * <Magnet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Magnet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Magnet} size="md">
 *   Click me
 * </Button>
 */
export const Magnet = createIcon(
  "Magnet",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M10 2.666v3.333m0 4v3.333M12.333 10H8a2 2 0 1 1 0-4h4.333a1 1 0 0 0 1-1V3.667a1 1 0 0 0-1-1H8a5.333 5.333 0 1 0 0 10.666h4.333a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1"
    />
  </Svg>
);
