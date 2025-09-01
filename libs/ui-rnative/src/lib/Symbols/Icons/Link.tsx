import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Link icon component for React Native.
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
 * import { Link } from '@ldls/ui-rnative/symbols';
 *
 * <Link />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Link size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Link} size="md">
 *   Click me
 * </Button>
 */
export const Link = createIcon(
  "Link",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.063 8.631-.728.728a2.686 2.686 0 1 1-3.8-3.8l.73-.726m1.183 2.615 3.105-3.105M4.937 3.161l.729-.729a2.685 2.685 0 0 1 4.587 1.9 2.69 2.69 0 0 1-.787 1.9l-.731.727"
    />
  </Svg>
);
