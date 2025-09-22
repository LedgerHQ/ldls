import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Cart icon component for React Native.
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
 * import { Cart } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Cart />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Cart size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Cart} size="md">
 *   Click me
 * </Button>
 */
export const Cart = createIcon(
  "Cart",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 8.75-1.5-7h-1m2.625 7h5m-5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75M2.82 3.25h7.175c.275-.005.5.22.5.495 0 .04-.01.085-.02.125l-.8 3a.51.51 0 0 1-.485.37H3.665"
    />
  </Svg>
);
