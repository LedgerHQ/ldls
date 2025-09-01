import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Snow icon component for React Native.
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
 * import { Snow } from '@ldls/ui-rnative/symbols';
 *
 * <Snow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Snow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Snow} size="md">
 *   Click me
 * </Button>
 */
export const Snow = createIcon(
  "Snow",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 1.5v9m1.084-8.29L5.999 3.29 4.914 2.206M10 3.69 2 8.31m7.82-3.266-1.485-.4.395-1.485M2.176 6.955l1.48.395-.4 1.48M2 3.69l8 4.62M2.177 5.044l1.48-.4-.4-1.485M9.82 6.955l-1.485.395.395 1.48m-3.814.955L5.996 8.7l1.08 1.08"
    />
  </Svg>
);
