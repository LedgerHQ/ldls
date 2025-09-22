import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Medal1 icon component for React Native.
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
 * import { Medal1 } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Medal1 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Medal1 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Medal1} size="md">
 *   Click me
 * </Button>
 */
export const Medal1 = createIcon(
  "Medal1",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 7v3.495c0 .135.11.245.25.245.035-.005.07-.01.1-.025l2.145-.98 2.145.975c.125.055.27 0 .33-.125.01-.035.02-.07.02-.105V6.925M6 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
    />
  </Svg>
);
