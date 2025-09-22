import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bank icon component for React Native.
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
 * import { Bank } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Bank />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bank size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Bank} size="md">
 *   Click me
 * </Button>
 */
export const Bank = createIcon(
  "Bank",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.322 5v4M9.5 9V5m-7 0v4m2.178 0V5M10.5 5h-9V3.497L6.076 1.5 10.5 3.43zm-9 5.5h9V10L10 9H2l-.5 1z"
    />
  </Svg>
);
