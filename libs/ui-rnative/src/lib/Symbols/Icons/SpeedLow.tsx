import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedLow icon component for React Native.
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
 * import { SpeedLow } from '@ldls/ui-rnative/symbols';
 *
 * <SpeedLow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SpeedLow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SpeedLow} size="md">
 *   Click me
 * </Button>
 */
export const SpeedLow = createIcon(
  "SpeedLow",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.279 5.795 2.734 3.25m-.84 1.405a4.46 4.46 0 0 0 1.27 5.34m.98-7.59a4.45 4.45 0 0 1 1.845-.41h0a4.5 4.5 0 0 1 4.505 4.495 4.49 4.49 0 0 1-1.67 3.5m-2.84-4.495a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </Svg>
);
