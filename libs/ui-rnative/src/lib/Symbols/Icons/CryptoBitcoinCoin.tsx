import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CryptoBitcoinCoin icon component for React Native.
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
 * import { CryptoBitcoinCoin } from '@ldls/ui-rnative/symbols';
 *
 * <CryptoBitcoinCoin />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CryptoBitcoinCoin size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CryptoBitcoinCoin} size="md">
 *   Click me
 * </Button>
 */
export const CryptoBitcoinCoin = createIcon(
  "CryptoBitcoinCoin",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      d="M14.65 8a.65.65 0 1 0-1.3 0zM8 2.65a.65.65 0 0 0 0-1.3zM11.033.683a.65.65 0 1 0 0 1.3zM14.01 4.96a.65.65 0 1 0 1.3 0zm-2.977-2.277a.65.65 0 1 0 0 1.3zm.977 2.277a.65.65 0 1 0 1.3 0zM6.667 10h-.65c0 .359.29.65.65.65zm.65-4a.65.65 0 0 0-1.3 0zm1.373-.667a.65.65 0 0 0-1.3 0zM7.39 6a.65.65 0 0 0 1.3 0zm1.3 4a.65.65 0 0 0-1.3 0zm-1.3.667a.65.65 0 1 0 1.3 0zM6.667 8v-.65a.65.65 0 0 0-.65.65zM6.66 6v-.65a.65.65 0 0 0-.65.65zm0 2h-.65c0 .359.291.65.65.65zM14 8h-.65A5.35 5.35 0 0 1 8 13.35v1.3A6.65 6.65 0 0 0 14.65 8zm-6 6v-.65A5.35 5.35 0 0 1 2.65 8h-1.3A6.65 6.65 0 0 0 8 14.65zM2 8h.65A5.35 5.35 0 0 1 8 2.65v-1.3A6.65 6.65 0 0 0 1.35 8zm9.033-6.667v.65A2.976 2.976 0 0 1 14.01 4.96h1.3A4.276 4.276 0 0 0 11.033.683zm0 2v.65c.541 0 .977.436.977.977h1.3a2.275 2.275 0 0 0-2.277-2.277zM6.667 10h.65V6h-1.3v4zM8.04 5.333h-.65V6h1.3v-.667zm0 4.667h-.65v.667h1.3V10zM6.667 8v.65H9v-1.3H6.667zM9 8v.65c.19 0 .35.158.35.35h1.3c0-.915-.747-1.65-1.65-1.65zm1 1h-.65c0 .188-.162.35-.35.35v1.3c.906 0 1.65-.744 1.65-1.65zm-1 1v-.65H6.667v1.3H9zm-2.333 0h.65V8h-1.3v2zM6.66 6v.65h2.1v-1.3h-2.1zm2.1 0v.65c.19 0 .35.158.35.35h1.3c0-.915-.747-1.65-1.65-1.65zm1 1h-.65c0 .188-.162.35-.35.35v1.3c.906 0 1.65-.744 1.65-1.65zm-1 1v-.65h-2.1v1.3h2.1zm-2.1 0h.65V6h-1.3v2z"
    />
  </Svg>
);
