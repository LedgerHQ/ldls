import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Telegram icon component for React Native.
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
 * import { Telegram } from '@ldls/ui-rnative/symbols';
 *
 * <Telegram />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Telegram size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Telegram} size="md">
 *   Click me
 * </Button>
 */
export const Telegram = createIcon(
  "Telegram",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.472 5.4A462 462 0 0 1 7.11 2.994c2.685-1.107 3.243-1.3 3.607-1.305a.64.64 0 0 1 .374.111.4.4 0 0 1 .138.26c.013.074.029.244.016.377-.145 1.515-.775 5.192-1.095 6.89-.136.718-.403.959-.66.982-.562.051-.989-.368-1.533-.72-.85-.554-1.331-.898-2.157-1.437-.955-.624-.336-.967.208-1.527.142-.146 2.616-2.377 2.664-2.579.006-.025.012-.12-.045-.17s-.14-.032-.2-.019q-.128.03-4.078 2.672-.58.394-1.049.384c-.345-.007-1.01-.193-1.503-.352C1.192 6.364.711 6.26.752 5.93q.033-.26.72-.53"
      clipRule="evenodd"
    />
  </Svg>
);
