import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * At icon component for React Native.
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
 * import { At } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <At />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <At size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={At} size="md">
 *   Click me
 * </Button>
 */
export const At = createIcon(
  "At",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 10.5H6A4.5 4.5 0 1 1 10.5 6v.75a1.25 1.25 0 0 1-2.5 0V6m0 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </Svg>
);
