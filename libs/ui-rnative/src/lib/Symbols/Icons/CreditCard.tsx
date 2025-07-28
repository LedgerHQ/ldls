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
 * import { CreditCard } from '@ldls/ui-rnative/symbols';
 *
 * <CreditCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CreditCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CreditCard} size="md">
 *   Click me
 * </Button>
 */
export const CreditCard = createIcon(
  "CreditCard",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2 6.00004H14M6.38 8.66671H4.66667M12 12.6667H4C2.89533 12.6667 2 11.7714 2 10.6667V5.33337C2 4.22871 2.89533 3.33337 4 3.33337H12C13.1047 3.33337 14 4.22871 14 5.33337V10.6667C14 11.7714 13.1047 12.6667 12 12.6667Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
