import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Copy icon component for React Native.
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
 * import { Copy } from '@ldls/ui-rnative/symbols';
 *
 * <Copy />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Copy size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Copy} size="md">
 *   Click me
 * </Button>
 */
export const Copy = createIcon(
  "Copy",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10 4V3.33333C10 2.6 9.4 2 8.66667 2H3.33333C2.59333 2 2 2.6 2 3.33333V8.66667C2 9.40667 2.59333 10 3.33333 10H4M6 7.33333V12.6667C6 13.403 6.59695 14 7.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V7.33333C14 6.59695 13.403 6 12.6667 6H7.33333C6.59695 6 6 6.59695 6 7.33333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
