import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Grid2 icon component for React Native.
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
 * import { Grid2 } from '@ldls/ui-rnative/symbols';
 *
 * <Grid2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Grid2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Grid2} size="md">
 *   Click me
 * </Button>
 */
export const Grid2 = createIcon(
  "Grid2",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M5.167 6.5H3.333C2.597 6.5 2 5.9 2 5.167V3.333C2 2.597 2.597 2 3.333 2h1.834C5.9 2 6.5 2.597 6.5 3.333v1.834C6.5 5.9 5.9 6.5 5.167 6.5ZM5.167 14H3.333C2.597 14 2 13.4 2 12.667v-1.834c0-.74.597-1.333 1.333-1.333h1.834c.733 0 1.333.593 1.333 1.333v1.834C6.5 13.4 5.9 14 5.167 14Z"
      clipRule="evenodd"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M14.3 4.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 14h4.5L10 9.5z"
    />
  </Svg>
);
