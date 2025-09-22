import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Clear icon component for React Native.
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
 * import { Clear } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Clear />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Clear size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Clear} size="md">
 *   Click me
 * </Button>
 */
export const Clear = createIcon(
  "Clear",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.25 11v-1m3.5 1v-1M6 11v-1m2.38 1H3.615c-.555 0-1.005-.45-1.005-1-.005-.04 0-.075.005-.115l.175-1.61a1.99 1.99 0 0 1 1.985-1.78h2.42a2 2 0 0 1 1.99 1.78l.175 1.61a1 1 0 0 1-.885 1.1c-.04 0-.08.005-.115.005zM6 1c.41 0 .75.335.75.75v3c0 .135-.115.25-.25.25h-1a.25.25 0 0 1-.25-.25v-3c0-.415.335-.75.75-.75m1.125 5.5h-2.25A.503.503 0 0 1 4.37 6a.4.4 0 0 1 .035-.195l.205-.5a.49.49 0 0 1 .46-.31H6.9c.2-.005.38.12.46.305l.205.5a.5.5 0 0 1-.27.65.5.5 0 0 1-.195.035z"
    />
  </Svg>
);
