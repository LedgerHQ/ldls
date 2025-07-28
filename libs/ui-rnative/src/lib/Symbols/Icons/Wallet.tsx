import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Wallet icon component for React Native.
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
 * import { Wallet } from '@ldls/ui-rnative/symbols';
 *
 * <Wallet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Wallet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Wallet} size="md">
 *   Click me
 * </Button>
 */
export const Wallet = createIcon(
  "Wallet",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.0633 8.74995C10.9233 8.74995 10.81 8.85662 10.81 8.99662C10.81 9.12995 10.9167 9.24662 11.06 9.24328C11.1933 9.24328 11.31 9.12995 11.31 8.99328C11.31 8.85328 11.1967 8.74328 11.0567 8.74328M2 3.33328V12.3333C2 13.0666 2.59667 13.6666 3.33333 13.6666H12.6667C13.4 13.6666 14 13.0666 14 12.3333V5.66662C14 4.92662 13.4 4.33328 12.6667 4.33328H3C2.44667 4.33328 2 3.87995 2 3.33328ZM2 3.33328C2 2.77995 2.44667 2.33328 3 2.33328H11.3333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
