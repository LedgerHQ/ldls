import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldMore icon component for React Native.
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
 * import { ShieldMore } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ShieldMore />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldMore size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={ShieldMore} size="md">
 *   Click me
 * </Button>
 */
export const ShieldMore = createIcon(
  "ShieldMore",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.089 5.662c.044.045.044.125 0 .175a.14.14 0 0 1-.18 0 .127.127 0 0 1 0-.18.12.12 0 0 1 .175 0m2.001.005c.045.045.045.125 0 .175a.14.14 0 0 1-.18 0 .127.127 0 0 1 0-.18.12.12 0 0 1 .175 0m-3.992.005c.045.045.045.125 0 .175a.14.14 0 0 1-.18 0 .127.127 0 0 1 0-.18.12.12 0 0 1 .176 0M10 5.59c0 2.27-1.71 4.394-4 4.909-2.293-.52-4-2.64-4-4.909V3.616c0-.41.245-.775.575-.91l2.5-1.023a2.34 2.34 0 0 1 1.8-.02l2.5 1.02c.375.15.62.515.62.926v1.97z"
    />
  </Svg>
);
