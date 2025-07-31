import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Trash icon component for React Native.
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
 * import { Trash } from '@ldls/ui-rnative/symbols';
 *
 * <Trash />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Trash size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Trash} size="md">
 *   Click me
 * </Button>
 */
export const Trash = createIcon(
  "Trash",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12.333 4.333v8.334A1.334 1.334 0 0 1 11 14H5a1.334 1.334 0 0 1-1.333-1.333V4.333m9.666 0H2.667m6.666 7v-4m-2.666 4v-4m-1-3V3a1 1 0 0 1 1-1h2.666a1 1 0 0 1 1 1v1"
    />
  </Svg>
);
