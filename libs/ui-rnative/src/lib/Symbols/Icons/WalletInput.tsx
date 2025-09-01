import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WalletInput icon component for React Native.
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
 * import { WalletInput } from '@ldls/ui-rnative/symbols';
 *
 * <WalletInput />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WalletInput size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WalletInput} size="md">
 *   Click me
 * </Button>
 */
export const WalletInput = createIcon(
  "WalletInput",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.498 3.499h8.003a1 1 0 0 1 1 1v4.752c0 .691-.559 1.25-1.25 1.25h-2.75m2-7.002v-.5a1 1 0 0 0-1-1H2.749c-.691 0-1.25.56-1.25 1.25V7.5m3.5 2H1.5m3.5 0-1 1m1-1-1-1m4.502-1.5H8"
    />
  </Svg>
);
