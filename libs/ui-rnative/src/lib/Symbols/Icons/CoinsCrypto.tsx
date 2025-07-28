import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCrypto icon component for React Native.
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
 * import { CoinsCrypto } from '@ldls/ui-rnative/symbols';
 *
 * <CoinsCrypto />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsCrypto size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinsCrypto} size="md">
 *   Click me
 * </Button>
 */
export const CoinsCrypto = createIcon(
  "CoinsCrypto",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.45333 3.29469C8.17333 1.56803 10.9787 1.56803 12.7053 3.29469C14.432 5.01469 14.432 7.82003 12.7053 9.54669M5.13333 9.56669V7.70003H7.01467C7.528 7.70003 7.94133 8.11336 7.94133 8.62669C7.94133 9.14003 7.52133 9.55336 7.008 9.55336M6.31333 7.16736V7.70069M6.31333 11.9867V11.38M10.8427 9.57869C10.8427 12.0187 8.86267 14 6.42133 14C3.97467 14 2 12.02 2 9.57869C2 7.13203 3.97333 5.15736 6.42133 5.15736C8.86133 5.15669 10.8427 7.1307 10.8427 9.57869ZM7.24667 11.378H5.13333V9.56469H7.24333C7.73667 9.56469 8.14333 9.96469 8.14333 10.4647C8.14333 10.958 7.73667 11.3647 7.23667 11.3647L7.24667 11.378Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
