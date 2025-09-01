import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MinusCircle icon component for React Native.
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
 * import { MinusCircle } from '@ldls/ui-rnative/symbols';
 *
 * <MinusCircle />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MinusCircle size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MinusCircle} size="md">
 *   Click me
 * </Button>
 */
export const MinusCircle = createIcon(
  "MinusCircle",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 6H4m2 4.5c-2.49 0-4.5-2.014-4.5-4.5A4.5 4.5 0 1 1 6 10.5"
    />
  </Svg>
);
