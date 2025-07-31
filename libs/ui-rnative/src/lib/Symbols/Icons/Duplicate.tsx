import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Duplicate icon component for React Native.
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
 * import { Duplicate } from '@ldls/ui-rnative/symbols';
 *
 * <Duplicate />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Duplicate size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Duplicate} size="md">
 *   Click me
 * </Button>
 */
export const Duplicate = createIcon(
  "Duplicate",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M10 4v-.667C10 2.6 9.4 2 8.667 2H3.333C2.593 2 2 2.6 2 3.333v5.334C2 9.407 2.593 10 3.333 10H4m6-1.667v3.334M8.333 10h3.334M6 7.333v5.334C6 13.403 6.597 14 7.333 14h5.334c.736 0 1.333-.597 1.333-1.333V7.333C14 6.597 13.403 6 12.667 6H7.333C6.597 6 6 6.597 6 7.333"
    />
  </Svg>
);
