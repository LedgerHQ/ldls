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
 * import { CryptoBitcoinCoin } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <CryptoBitcoinCoin />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CryptoBitcoinCoin size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={CryptoBitcoinCoin} size="md">
 *   Click me
 * </Button>
 */
export const CryptoBitcoinCoin = createIcon(
  "CryptoBitcoinCoin",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M11 6a.5.5 0 0 0-1 0h1M6 2a.5.5 0 0 0 0-1v1M8.275.5a.5.5 0 0 0 0 1v-1m2.22 3.22a.5.5 0 0 0 1 0h-1M8.275 2a.5.5 0 0 0 0 1V2m.72 1.72a.5.5 0 0 0 1 0h-1M5 7.5h-.5A.5.5 0 0 0 5 8zm.5-3a.5.5 0 0 0-1 0h1M6.53 4a.5.5 0 0 0-1 0h1m-1 .5a.5.5 0 0 0 1 0h-1m1 3a.5.5 0 0 0-1 0h1m-1 .5a.5.5 0 0 0 1 0h-1M5 6v-.5a.5.5 0 0 0-.5.5zm-.005-1.5V4a.5.5 0 0 0-.5.5zm0 1.5h-.5a.5.5 0 0 0 .5.5zM10.5 6H10a4 4 0 0 1-4 4v1a5 5 0 0 0 5-5zM6 10.5V10a4 4 0 0 1-4-4H1a5 5 0 0 0 5 5zM1.5 6H2a4 4 0 0 1 4-4V1a5 5 0 0 0-5 5zm6.775-5v.5a2.22 2.22 0 0 1 2.22 2.22h1A3.22 3.22 0 0 0 8.275.5zm0 1.5V3c.399 0 .72.321.72.72h1c0-.951-.769-1.72-1.72-1.72zM5 7.5h.5v-3h-1v3zM6.03 4h-.5v.5h1V4zm0 3.5h-.5V8h1v-.5zM5 6v.5h1.75v-1H5zm1.75 0v.5c.136 0 .25.113.25.25h1c0-.693-.566-1.25-1.25-1.25zm.75.75H7c0 .134-.116.25-.25.25v1C7.436 8 8 7.436 8 6.75zm-.75.75V7H5v1h1.75zM5 7.5h.5V6h-1v1.5zm-.005-3V5H6.57V4H4.995zm1.575 0V5c.136 0 .25.113.25.25h1C7.82 4.557 7.254 4 6.57 4zm.75.75h-.5c0 .134-.116.25-.25.25v1c.686 0 1.25-.564 1.25-1.25zM6.57 6v-.5H4.995v1H6.57zM4.995 6h.5V4.5h-1V6z"
    />
  </Svg>
);
