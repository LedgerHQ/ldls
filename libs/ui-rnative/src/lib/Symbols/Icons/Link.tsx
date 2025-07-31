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
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m9.417 11.508-.971.971a3.58 3.58 0 0 1-5.067 0 3.58 3.58 0 0 1 0-5.066l.974-.969M5.93 9.931l4.14-4.14M6.583 4.215l.971-.972a3.58 3.58 0 0 1 5.844 1.163 3.58 3.58 0 0 1-.777 3.904l-.974.969"
    />
  </Svg>
);
