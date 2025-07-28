import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Desktop icon component for React Native.
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
 * import { Desktop } from '@ldls/ui-rnative/symbols';
 *
 * <Desktop />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Desktop size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Desktop} size="md">
 *   Click me
 * </Button>
 */
export const Desktop = createIcon(
  "Desktop",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.33333 11.3333L9.66667 14M6.66667 11.3333L6.33333 14M4.8 14H11.2M14 9H2M12.6667 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4 2 14 2.59667 14 3.33333V10C14 10.7333 13.4 11.3333 12.6667 11.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
