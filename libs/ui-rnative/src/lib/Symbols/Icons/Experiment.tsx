import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Experiment icon component for React Native.
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
 * import { Experiment } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Experiment />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Experiment size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Experiment} size="md">
 *   Click me
 * </Button>
 */
export const Experiment = createIcon(
  "Experiment",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3v2.085c0 .265.105.515.29.705L9.7 8.2c.187.188.29.44.29.705v.585c0 .55-.45 1-1 1h-6a1 1 0 0 1-1-1V8.9c0-.265.105-.52.29-.71l2.41-2.415c.187-.187.29-.445.29-.71v-2.09M7 3c.275 0 .5-.225.5-.5V2c0-.28-.225-.5-.5-.5H5c-.28 0-.5.224-.5.5v.5c0 .275.22.5.5.5zM2.09 8.5h7.82m-5-3h2.18"
    />
  </Svg>
);
