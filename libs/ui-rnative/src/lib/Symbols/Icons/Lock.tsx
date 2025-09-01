import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Lock icon component for React Native.
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
 * import { Lock } from '@ldls/ui-rnative/symbols';
 *
 * <Lock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Lock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Lock} size="md">
 *   Click me
 * </Button>
 */
export const Lock = createIcon(
  "Lock",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 5V3.5a2 2 0 1 1 4 0V5m.5 5.5h-5a1 1 0 0 1-1-1V6c0-.555.445-1 1-1h5a1 1 0 0 1 1 1v3.5c0 .55-.45 1-1 1"
    />
  </Svg>
);
