import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MinusCircleFill icon component for React Native.
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
 * import { MinusCircleFill } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <MinusCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MinusCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={MinusCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const MinusCircleFill = createIcon(
  "MinusCircleFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M6 1.012A4.988 4.988 0 1 1 6 10.988 4.988 4.988 0 0 1 6 1.012M4 5.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1z"
    />
  </Svg>
);
