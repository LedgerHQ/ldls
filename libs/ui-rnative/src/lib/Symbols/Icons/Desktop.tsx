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
 * import { Desktop } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Desktop />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Desktop size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Desktop} size="md">
 *   Click me
 * </Button>
 */
export const Desktop = createIcon(
  "Desktop",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 8.5.25 2M5 8.5l-.25 2m-1.15 0h4.8m2.1-3.75h-9m8 1.75h-7c-.552 0-1-.45-1-1v-5a1 1 0 0 1 1-1h7c.55 0 1 .448 1 1v5c0 .55-.45 1-1 1"
    />
  </Svg>
);
