import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Windows icon component for React Native.
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
 * import { Windows } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Windows />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Windows size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Windows} size="md">
 *   Click me
 * </Button>
 */
export const Windows = createIcon(
  "Windows",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M5.628 5.82H10.2V1.8l-4.572.636zM1.8 9.048l3.456.468V6.228H1.8zm0-3.228h3.456V2.484L1.8 2.952zm3.828 3.744 4.572.636V6.228H5.628z"
    />
  </Svg>
);
