import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bug icon component for React Native.
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
 * import { Bug } from '@ldls/ui-rnative/symbols';
 *
 * <Bug />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bug size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Bug} size="md">
 *   Click me
 * </Button>
 */
export const Bug = createIcon(
  "Bug",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.5 4.25-.5-.5m1.5.5.5-.5m1.5 1a3.537 3.537 0 0 1-5 0m.925 2.585c-.345.165-.66.39-.93.66M8.5 8a3.4 3.4 0 0 0-.93-.665m-3.445-.96H3.25m5.5 0h-.875M6 4.25c-.497 0-.974.21-1.326.586a2.07 2.07 0 0 0-.549 1.414c0 .53.198 1.04.55 1.414.35.375.828.586 1.325.586s.974-.21 1.326-.586a2.07 2.07 0 0 0 .549-1.414c0-.53-.198-1.04-.55-1.414A1.82 1.82 0 0 0 6 4.25M4 1.5h4A2.5 2.5 0 0 1 10.5 4v4A2.5 2.5 0 0 1 8 10.5H4A2.5 2.5 0 0 1 1.5 8V4A2.5 2.5 0 0 1 4 1.5"
    />
  </Svg>
);
