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
 * import { Grid } from '@ldls/ui-rnative/symbols';
 *
 * <Grid />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Grid size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Grid} size="md">
 *   Click me
 * </Button>
 */
export const Grid = createIcon(
  "Grid",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.16667 6.5H3.33333C2.59667 6.5 2 5.9 2 5.16667V3.33333C2 2.59667 2.59667 2 3.33333 2H5.16667C5.9 2 6.5 2.59667 6.5 3.33333V5.16667C6.5 5.9 5.9 6.5 5.16667 6.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6667 6.5H10.8333C10.0933 6.5 9.5 5.9 9.5 5.16667V3.33333C9.5 2.59667 10.0933 2 10.8333 2H12.6667C13.4 2 14 2.59667 14 3.33333V5.16667C14 5.9 13.4 6.5 12.6667 6.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.16667 14H3.33333C2.59667 14 2 13.4 2 12.6667V10.8333C2 10.0933 2.59667 9.5 3.33333 9.5H5.16667C5.9 9.5 6.5 10.0933 6.5 10.8333V12.6667C6.5 13.4 5.9 14 5.16667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6667 14H10.8333C10.0933 14 9.5 13.4 9.5 12.6667V10.8333C9.5 10.0933 10.0933 9.5 10.8333 9.5H12.6667C13.4 9.5 14 10.0933 14 10.8333V12.6667C14 13.4 13.4 14 12.6667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
