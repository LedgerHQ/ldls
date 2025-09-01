import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * RefreshBack icon component for React Native.
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
 * import { RefreshBack } from '@ldls/ui-rnative/symbols';
 *
 * <RefreshBack />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <RefreshBack size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={RefreshBack} size="md">
 *   Click me
 * </Button>
 */
export const RefreshBack = createIcon(
  "RefreshBack",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.256 2.32v1.768h1.767m-1.537 0A4 4 0 0 1 10 6a4 4 0 0 1-8 0"
    />
  </Svg>
);
