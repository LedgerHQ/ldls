import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Charon icon component for React Native.
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
 * import { Charon } from '@ldls/ui-rnative/symbols';
 *
 * <Charon />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Charon size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Charon} size="md">
 *   Click me
 * </Button>
 */
export const Charon = createIcon(
  "Charon",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.785 7.5H6.5m2.5 2H3A1.5 1.5 0 0 1 1.5 8V4A1.5 1.5 0 0 1 3 2.5h6A1.5 1.5 0 0 1 10.5 4v4A1.5 1.5 0 0 1 9 9.5"
    />
  </Svg>
);
