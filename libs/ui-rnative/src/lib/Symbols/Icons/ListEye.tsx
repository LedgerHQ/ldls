import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ListEye icon component for React Native.
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
 * import { ListEye } from '@ldls/ui-rnative/symbols';
 *
 * <ListEye />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ListEye size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ListEye} size="md">
 *   Click me
 * </Button>
 */
export const ListEye = createIcon(
  "ListEye",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 2 .65-.812A.49.49 0 0 1 5.04 1h1.915a.49.49 0 0 1 .39.188L7.99 2v.5c0 .275-.225.5-.5.5h-3c-.28 0-.5-.225-.5-.5V2zm0 0H3c-.555 0-1 .445-1 1v6.5a1 1 0 0 0 1 1h3M10 6V3a1 1 0 0 0-1-1H8m1.19 6.95c.024.026.024.07 0 .1a.08.08 0 0 1-.105 0 .073.073 0 0 1 0-.105c.024-.03.07-.03.1 0M4 6.75h2.5M4 5h4M4 8.5h1m2.38.845a.62.62 0 0 1 0-.69c.42-.645 1.09-1.16 1.757-1.16.665 0 1.33.51 1.755 1.155a.64.64 0 0 1 0 .69c-.425.641-1.095 1.155-1.76 1.155-.67 0-1.335-.515-1.757-1.155z"
    />
  </Svg>
);
