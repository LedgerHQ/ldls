import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * HandCard icon component for React Native.
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
 * import { HandCard } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <HandCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <HandCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={HandCard} size="md">
 *   Click me
 * </Button>
 */
export const HandCard = createIcon(
  "HandCard",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m.998 7 1.276-2.126a1.5 1.5 0 0 1 .615-.57l.293-.146a1.5 1.5 0 0 1 .671-.159h7.15m-9.005 6.503L4.88 9.46a2 2 0 0 0 .985-.771l1.497-2.245a.823.823 0 0 0-1.267-1.04L5 6.5m0 0H4m1 0V3.7a1.18 1.18 0 0 1 1.158-1.2h3.686a1.18 1.18 0 0 1 1.158 1.2v2.1A1.18 1.18 0 0 1 9.844 7H6.99"
    />
  </Svg>
);
