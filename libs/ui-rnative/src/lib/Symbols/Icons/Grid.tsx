import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Grid icon component for React Native.
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
 * import { Grid } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Grid />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Grid size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Grid} size="md">
 *   Click me
 * </Button>
 */
export const Grid = createIcon(
  "Grid",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.875 4.875H2.5c-.552 0-1-.45-1-1V2.5a1 1 0 0 1 1-1h1.375c.55 0 1 .448 1 1v1.375c0 .55-.45 1-1 1M9.5 4.875H8.125a1 1 0 0 1-1-1V2.5c0-.552.445-1 1-1H9.5c.55 0 1 .448 1 1v1.375c0 .55-.45 1-1 1M3.875 10.5H2.5c-.552 0-1-.45-1-1V8.125c0-.555.448-1 1-1h1.375a1 1 0 0 1 1 1V9.5c0 .55-.45 1-1 1M9.5 10.5H8.125a1 1 0 0 1-1-1V8.125c0-.555.445-1 1-1H9.5a1 1 0 0 1 1 1V9.5c0 .55-.45 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
