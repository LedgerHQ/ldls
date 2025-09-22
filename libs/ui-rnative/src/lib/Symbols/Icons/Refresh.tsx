import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Refresh icon component for React Native.
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
 * import { Refresh } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Refresh />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Refresh size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Refresh} size="md">
 *   Click me
 * </Button>
 */
export const Refresh = createIcon(
  "Refresh",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.996 6.016a3.98 3.98 0 0 1-1.167 2.813 4 4 0 0 1-6.34-.916m-.487-1.978a4 4 0 0 1 7.51-1.848m-1.535 0h1.767V2.32m-5.72 5.593H2.256V9.68"
    />
  </Svg>
);
