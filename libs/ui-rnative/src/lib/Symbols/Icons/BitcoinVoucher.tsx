import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * BitcoinVoucher icon component for React Native.
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
 * import { BitcoinVoucher } from '@ldls/ui-rnative/symbols';
 *
 * <BitcoinVoucher />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <BitcoinVoucher size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={BitcoinVoucher} size="md">
 *   Click me
 * </Button>
 */
export const BitcoinVoucher = createIcon(
  "BitcoinVoucher",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 2.288v7.425a.5.5 0 0 1-.249.432l-.495.287a.5.5 0 0 1-.5.002L7.998 10l-.744.432a.5.5 0 0 1-.5.001L6 10l-.753.433a.5.5 0 0 1-.5-.001L4.003 10l-.76.434a.5.5 0 0 1-.499-.002l-.495-.287A.5.5 0 0 1 2 9.713V2.288a.5.5 0 0 1 .249-.433l.495-.287a.5.5 0 0 1 .5-.002L4.002 2l.744-.432a.5.5 0 0 1 .5-.001L6 2l.753-.433a.5.5 0 0 1 .5.001L7.997 2l.76-.434a.5.5 0 0 1 .499.002l.495.287a.5.5 0 0 1 .249.433"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M7.764 5.56c.073-.474-.298-.728-.805-.898l.165-.64-.401-.097-.16.624q-.16-.038-.322-.074l.161-.628-.401-.097-.165.64q-.131-.028-.256-.058V4.33l-.553-.134-.107.416s.298.066.292.07c.162.04.192.144.187.227l-.187.73.041.013-.042-.01-.263 1.022c-.02.048-.07.12-.184.092.004.006-.291-.07-.291-.07l-.2.446.523.127q.145.035.286.071l-.166.648.4.097.165-.64.32.08-.164.638.401.097.167-.646c.684.125 1.199.075 1.415-.527.175-.484-.008-.763-.368-.945.262-.059.46-.227.512-.573m-.917 1.248c-.124.485-.963.223-1.236.157l.221-.858c.272.066 1.145.197 1.015.701m.124-1.256c-.113.44-.812.217-1.038.162l.2-.778c.226.054.956.157.838.616"
    />
  </Svg>
);
