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
      d="M6.45333 3.29463C8.17333 1.56797 10.9787 1.56797 12.7053 3.29463C14.432 5.01463 14.432 7.81997 12.7053 9.54663M5.13333 9.56663V7.69997H7.01467C7.528 7.69997 7.94133 8.1133 7.94133 8.62663C7.94133 9.13997 7.52133 9.5533 7.008 9.5533M6.31333 7.1673V7.70063M6.31333 11.9866V11.38M10.8427 9.57863C10.8427 12.0186 8.86267 14 6.42133 14C3.97467 14 2 12.02 2 9.57863C2 7.13197 3.97333 5.1573 6.42133 5.1573C8.86133 5.15663 10.8427 7.13063 10.8427 9.57863ZM7.24667 11.378H5.13333V9.56463H7.24333C7.73667 9.56463 8.14333 9.96463 8.14333 10.4646C8.14333 10.958 7.73667 11.3646 7.23667 11.3646L7.24667 11.378Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
