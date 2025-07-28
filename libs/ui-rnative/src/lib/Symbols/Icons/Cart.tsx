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
 * import { Cart } from '@ldls/ui-rnative/symbols';
 *
 * <Cart />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Cart size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Cart} size="md">
 *   Click me
 * </Button>
 */
export const Cart = createIcon(
  "Cart",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.33333 11.6667L3.33333 2.33337H2M5.5 11.6667H12.1667M5.5 11.6667C5.19058 11.6667 4.89383 11.7896 4.67504 12.0084C4.45625 12.2272 4.33333 12.524 4.33333 12.8334C4.33333 13.1428 4.45625 13.4395 4.67504 13.6583C4.89383 13.8771 5.19058 14 5.5 14C5.80942 14 6.10617 13.8771 6.32496 13.6583C6.54375 13.4395 6.66667 13.1428 6.66667 12.8334C6.66667 12.524 6.54375 12.2272 6.32496 12.0084C6.10617 11.7896 5.80942 11.6667 5.5 11.6667ZM12.1667 11.6667C11.8572 11.6667 11.5605 11.7896 11.3417 12.0084C11.1229 12.2272 11 12.524 11 12.8334C11 13.1428 11.1229 13.4395 11.3417 13.6583C11.5605 13.8771 11.8572 14 12.1667 14C12.4761 14 12.7728 13.8771 12.9916 13.6583C13.2104 13.4395 13.3333 13.1428 13.3333 12.8334C13.3333 12.524 13.2104 12.2272 12.9916 12.0084C12.7728 11.7896 12.4761 11.6667 12.1667 11.6667ZM3.76 4.33337H13.3267C13.6933 4.32671 13.9933 4.62671 13.9933 4.99337C13.9933 5.04671 13.98 5.10671 13.9667 5.16004L12.9 9.16004C12.82 9.44671 12.5533 9.65337 12.2533 9.65337H4.88667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
