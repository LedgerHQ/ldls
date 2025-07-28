import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Exchange icon component for React Native.
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
 * import { Exchange } from '@ldls/ui-rnative/symbols';
 *
 * <Exchange />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Exchange size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Exchange} size="md">
 *   Click me
 * </Button>
 */
export const Exchange = createIcon(
  "Exchange",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.66669 12.6667H6.66669C4.82602 12.6667 3.33335 11.174 3.33335 9.33337V3.33337M3.33335 3.33337L5.00002 5.00004M3.33335 3.33337L1.66669 5.00004M7.33335 3.33337H9.33335C11.174 3.33337 12.6667 4.82604 12.6667 6.66671V12.6667M12.6667 12.6667L10.6667 10.6667M12.6667 12.6667L14.6667 10.6667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
