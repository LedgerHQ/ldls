import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CheckmarkCircleFill icon component for React Native.
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
 * import { CheckmarkCircleFill } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <CheckmarkCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CheckmarkCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={CheckmarkCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const CheckmarkCircleFill = createIcon(
  "CheckmarkCircleFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M6.001 1.012a4.988 4.988 0 1 1-.002 9.975 4.988 4.988 0 0 1 .002-9.975m2.096 3.436a.5.5 0 0 0-.708 0l-2.091 2.09-.723-.722a.5.5 0 0 0-.707.707l1.083 1.083a.5.5 0 0 0 .77-.078l2.376-2.373a.5.5 0 0 0 0-.707"
    />
  </Svg>
);
