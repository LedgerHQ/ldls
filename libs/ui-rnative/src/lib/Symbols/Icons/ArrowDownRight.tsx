import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowDownRight icon component for React Native.
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
 * import { ArrowDownRight } from '@ldls/ui-rnative/symbols';
 *
 * <ArrowDownRight />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ArrowDownRight size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ArrowDownRight} size="md">
 *   Click me
 * </Button>
 */
export const ArrowDownRight = createIcon(
  "ArrowDownRight",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.3 11.3 4.7 4.7m6.6 1.88v4.715l-4.72-.006"
    />
  </Svg>
);
