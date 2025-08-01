import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Search icon component for React Native.
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
 * import { Search } from '@ldls/ui-rnative/symbols';
 *
 * <Search />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Search size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Search} size="md">
 *   Click me
 * </Button>
 */
export const Search = createIcon(
  "Search",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="m14 14-3.334-3.333m1.2-3.734a4.933 4.933 0 1 1-9.866 0 4.933 4.933 0 0 1 9.867 0Z"
    />
  </Svg>
);
