import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * LedgerLogo icon component for React Native.
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
 * import { LedgerLogo } from '@ldls/ui-rnative/symbols';
 *
 * <LedgerLogo />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <LedgerLogo size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={LedgerLogo} size="md">
 *   Click me
 * </Button>
 */
export const LedgerLogo = createIcon(
  "LedgerLogo",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2 4.66667V3C2 2.44772 2.44772 2 3 2H6M9.33333 10.0001H7.66667C7.11438 10.0001 6.66667 9.55237 6.66667 9.00008V6.00008M14 4.66667V3C14 2.44772 13.5523 2 13 2H10M2 11.3333V13C2 13.5523 2.44772 14 3 14H6M14 11.3333V13C14 13.5523 13.5523 14 13 14H10"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
