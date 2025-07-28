import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Experiment2 icon component for React Native.
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
 * import { Experiment2 } from '@ldls/ui-rnative/symbols';
 *
 * <Experiment2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Experiment2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Experiment2} size="md">
 *   Click me
 * </Button>
 */
export const Experiment2 = createIcon(
  "Experiment2",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M13.6666 6.81998L9.17995 2.33331M12.9193 6.06665L5.93929 13.04C5.11262 13.86 3.77262 13.86 2.94595 13.04C2.93929 13.0333 2.93929 13.0333 2.93929 13.0333C2.11262 12.2066 2.11195 10.8666 2.93195 10.04C2.93195 10.0333 2.93195 10.0333 2.93195 10.0333L9.90529 3.05331M4.67329 8.33331H10.6533"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
