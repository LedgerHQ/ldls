import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CreditCard icon component for React Native.
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
 * import { CreditCard } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <CreditCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CreditCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={CreditCard} size="md">
 *   Click me
 * </Button>
 */
export const CreditCard = createIcon(
  "CreditCard",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 4.5h9m-5.715 2H3.5m5.5 3H3A1.5 1.5 0 0 1 1.5 8V4A1.5 1.5 0 0 1 3 2.5h6A1.5 1.5 0 0 1 10.5 4v4A1.5 1.5 0 0 1 9 9.5"
    />
  </Svg>
);
