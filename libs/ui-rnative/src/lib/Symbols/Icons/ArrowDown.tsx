import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowDown icon component for React Native.
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
 * import { ArrowDown } from '@ledgerhq/ui-rnative/symbols';
 *
 * <ArrowDown />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ArrowDown size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={ArrowDown} size="md">
 *   Click me
 * </Button>
 */
export const ArrowDown = createIcon(
  "ArrowDown",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8 12.667V3.333m3.334 5.994-3.34 3.333-3.34-3.34"
    />
  </Svg>
);
