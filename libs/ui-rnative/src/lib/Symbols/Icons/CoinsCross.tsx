import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCross icon component for React Native.
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
 * import { CoinsCross } from '@ldls/ui-rnative/symbols';
 *
 * <CoinsCross />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsCross size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinsCross} size="md">
 *   Click me
 * </Button>
 */
export const CoinsCross = createIcon(
  "CoinsCross",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.00001 5.33331C2.00001 6.06665 3.48668 6.66665 5.33335 6.66665M2.00001 5.33331V10.6666C2.00001 11.4 3.49268 12 5.33335 12M2.00001 5.33331C2.00001 4.97969 2.3512 4.64055 2.97632 4.3905C3.60145 4.14046 4.44929 3.99998 5.33335 3.99998C6.2174 3.99998 7.06525 4.14046 7.69037 4.3905C8.31549 4.64055 8.66668 4.97969 8.66668 5.33331M2.00001 5.33331C2.00001 5.68693 2.3512 6.02607 2.97632 6.27612C3.60145 6.52617 4.44929 6.66665 5.33335 6.66665M5.33335 6.66665C6.2174 6.66665 7.06525 6.52617 7.69037 6.27612C8.31549 6.02607 8.66668 5.68694 8.66668 5.33331M8.66668 5.33331L8.66668 6.99998M11.6667 4.33331L13.6667 2.33331M13.6667 4.33331L11.6667 2.33331M2.00001 7.99998C2.00001 8.73331 3.48668 9.32665 5.33268 9.32665M5.32668 9.33331C3.48001 9.33331 1.99335 8.73331 1.99335 7.99998M7.33335 9.99998C7.33335 10.7333 8.82001 11.3333 10.6667 11.3333C12.5067 11.3333 14 10.7333 14 9.99998L13.9993 12.6666C13.9993 13.4 12.5067 14 10.6667 14C8.82001 14 7.33335 13.4 7.33335 12.6666V9.99998ZM13.998 9.99998C13.998 9.25998 12.5047 8.66665 10.6647 8.66665C8.82468 8.66665 7.33135 9.25998 7.33135 9.99998C7.33135 10.7333 8.81801 11.3333 10.6647 11.3333C12.5047 11.3333 13.998 10.7333 13.998 9.99998Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
