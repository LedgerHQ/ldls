import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Mobile icon component for React Native.
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
 * import { Mobile } from '@ldls/ui-rnative/symbols';
 *
 * <Mobile />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Mobile size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Mobile} size="md">
 *   Click me
 * </Button>
 */
export const Mobile = createIcon(
  "Mobile",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.75 1.5v.9c-.015.15.095.28.25.3h2c.15-.02.26-.15.25-.3v-.9M5 9h2m1 1.5H4a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h4a1 1 0 0 1 1 1v7c0 .55-.45 1-1 1"
    />
  </Svg>
);
