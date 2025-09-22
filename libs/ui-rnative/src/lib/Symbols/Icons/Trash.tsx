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
 * import { Trash } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Trash />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Trash size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Trash} size="md">
 *   Click me
 * </Button>
 */
export const Trash = createIcon(
  "Trash",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.25 3.25V9.5a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1V3.25m7.25 0H2M7 8.5v-3m-2 3v-3m-.75-2.25v-1A.75.75 0 0 1 5 1.5h2a.75.75 0 0 1 .75.75V3"
    />
  </Svg>
);
