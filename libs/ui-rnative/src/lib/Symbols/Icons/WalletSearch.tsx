import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WalletSearch icon component for React Native.
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
 * import { WalletSearch } from '@ldls/ui-rnative/symbols';
 *
 * <WalletSearch />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WalletSearch size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WalletSearch} size="md">
 *   Click me
 * </Button>
 */
export const WalletSearch = createIcon(
  "WalletSearch",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.69 9.06-.94.94M1.5 5.5V3.25C1.5 2.555 2.055 2 2.75 2h6C9.44 2 10 2.555 10 3.25v1.5m0 0h-.75C8.555 4.75 8 5.305 8 6c0 .69.555 1.25 1.25 1.25H10m0-2.5c.275 0 .5.22.5.5v1.5c0 .275-.225.5-.5.5m0 0v1.5C10 9.44 9.44 10 8.75 10H6.5M3.75 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </Svg>
);
