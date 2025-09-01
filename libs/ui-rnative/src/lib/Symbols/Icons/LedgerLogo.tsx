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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 3.5V2.25a.75.75 0 0 1 .75-.75H4.5m2.5 6H5.75A.75.75 0 0 1 5 6.75V4.5m5.5-1V2.25a.75.75 0 0 0-.75-.75H7.5m-6 7v1.25c0 .414.336.75.75.75H4.5m6-2v1.25a.75.75 0 0 1-.75.75H7.5"
    />
  </Svg>
);
