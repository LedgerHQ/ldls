import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Clip icon component for React Native.
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
 * import { Clip } from '@ldls/ui-rnative/symbols';
 *
 * <Clip />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Clip size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Clip} size="md">
 *   Click me
 * </Button>
 */
export const Clip = createIcon(
  "Clip",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.96663 6.25329L5.27997 9.93929C4.84663 10.366 4.84663 11.0593 5.27997 11.486H5.2733C5.69997 11.9126 6.3933 11.9126 6.81997 11.486L12.5666 5.73529C13.42 4.87529 13.42 3.48862 12.5666 2.63529C12.56 2.62862 12.56 2.62862 12.56 2.62862C11.7 1.76862 10.3133 1.76862 9.45997 2.62196C9.4533 2.62196 9.4533 2.62196 9.4533 2.62196L3.69997 8.36862C2.4133 9.64862 2.4133 11.728 3.6933 13.008C4.9733 14.288 7.0533 14.288 8.3333 13.008C8.3333 13.0013 8.3333 13.0013 8.3333 13.0013L12.5333 8.80129"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
