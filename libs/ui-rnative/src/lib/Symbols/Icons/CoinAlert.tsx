import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinAlert icon component for React Native.
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
 * import { CoinAlert } from '@ldls/ui-rnative/symbols';
 *
 * <CoinAlert />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinAlert size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinAlert} size="md">
 *   Click me
 * </Button>
 */
export const CoinAlert = createIcon(
  "CoinAlert",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M13.4733 8.80662C13.8 8.15995 13.9933 7.43329 13.9933 6.65995C13.9933 4.07995 11.9 1.99329 9.32667 1.99329C8.55333 1.99329 7.82 2.17995 7.18 2.51729M6.66733 9.15995V7.45995M6.666 11.0333C6.61933 11.0333 6.57933 11.0666 6.57933 11.1133C6.57933 11.1533 6.61267 11.1933 6.65934 11.1933C6.69934 11.1933 6.73934 11.1533 6.73934 11.1066C6.73934 11.06 6.69933 11.02 6.65267 11.02M6.66667 14C4.08867 14 2 11.9066 2 9.33329C2 6.75329 4.08867 4.66662 6.66667 4.66662C9.24333 4.66662 11.3333 6.75662 11.3333 9.33329C11.3333 11.9066 9.24 14 6.66667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
