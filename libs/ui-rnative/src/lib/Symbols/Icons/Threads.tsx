import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Threads icon component for React Native.
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
 * import { Threads } from '@ldls/ui-rnative/symbols';
 *
 * <Threads />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Threads size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Threads} size="md">
 *   Click me
 * </Button>
 */
export const Threads = createIcon(
  "Threads",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="m8.503 5.617-.137-.063c-.08-1.493-.894-2.348-2.259-2.357H6.09c-.817 0-1.496.35-1.914.986l.751.517c.312-.475.802-.577 1.163-.577h.013q.676.005 1.008.39.24.28.32.769a5.7 5.7 0 0 0-1.29-.063c-1.299.075-2.133.835-2.077 1.89.028.536.294.997.748 1.298.384.254.879.379 1.393.35.679-.037 1.211-.297 1.583-.772.282-.361.46-.829.539-1.418.323.196.563.454.695.764.226.527.239 1.392-.465 2.098-.617.619-1.358.886-2.479.894-1.242-.009-2.182-.409-2.793-1.188-.573-.73-.868-1.785-.88-3.135.012-1.35.307-2.404.88-3.135.61-.78 1.55-1.18 2.793-1.189 1.252.01 2.208.412 2.843 1.195.311.384.546.868.7 1.431l.88-.236q-.28-1.04-.884-1.786C8.803 1.275 7.613.76 6.081.75h-.007c-1.53.01-2.706.527-3.496 1.536-.703.897-1.066 2.145-1.078 3.71v.008c.012 1.565.375 2.813 1.078 3.71.79 1.009 1.967 1.525 3.496 1.536h.006c1.36-.01 2.32-.367 3.109-1.159 1.033-1.036 1.002-2.334.661-3.132-.244-.571-.71-1.036-1.347-1.342M6.155 7.832c-.569.033-1.16-.224-1.189-.773-.021-.407.289-.86 1.224-.915q.16-.009.316-.009.511 0 .946.096c-.108 1.351-.74 1.57-1.297 1.601"
    />
  </Svg>
);
