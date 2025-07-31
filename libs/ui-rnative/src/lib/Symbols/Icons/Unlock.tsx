import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Unlock icon component for React Native.
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
 * import { Unlock } from '@ldls/ui-rnative/symbols';
 *
 * <Unlock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Unlock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Unlock} size="md">
 *   Click me
 * </Button>
 */
export const Unlock = createIcon(
  "Unlock",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M14.667 4.013A2.66 2.66 0 0 0 12.087 2 2.67 2.67 0 0 0 9.42 4.667v2M10.667 14H4c-.74 0-1.333-.6-1.333-1.333V8c0-.74.593-1.333 1.333-1.333h6.667C11.4 6.667 12 7.26 12 8v4.667C12 13.4 11.4 14 10.667 14"
    />
  </Svg>
);
