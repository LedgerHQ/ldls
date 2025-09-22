import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Sun icon component for React Native.
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
 * import { Sun } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Sun />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Sun size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Sun} size="md">
 *   Click me
 * </Button>
 */
export const Sun = createIcon(
  "Sun",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 2V1m0 10v-1m3.18-7.18.355-.355m-7.07 7.07.355-.355M10 6h1M1 6h1m7.18 3.18.355.355m-7.07-7.07.355.355m4.948 1.412a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536"
    />
  </Svg>
);
