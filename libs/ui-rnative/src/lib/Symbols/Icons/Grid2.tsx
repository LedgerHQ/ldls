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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.16667 6.49999H3.33333C2.59667 6.49999 2 5.89999 2 5.16665V3.33332C2 2.59665 2.59667 1.99999 3.33333 1.99999H5.16667C5.9 1.99999 6.5 2.59665 6.5 3.33332V5.16665C6.5 5.89999 5.9 6.49999 5.16667 6.49999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.16667 14H3.33333C2.59667 14 2 13.4 2 12.6667V10.8333C2 10.0933 2.59667 9.49999 3.33333 9.49999H5.16667C5.9 9.49999 6.5 10.0933 6.5 10.8333V12.6667C6.5 13.4 5.9 14 5.16667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
    <Path
      d="M14.3 4.29999C14.3 5.6807 13.1808 6.79999 11.8 6.79999C10.4193 6.79999 9.30005 5.6807 9.30005 4.29999C9.30005 2.91928 10.4193 1.79999 11.8 1.79999C13.1808 1.79999 14.3 2.91928 14.3 4.29999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
    <Path
      d="M10 14H14.5L10 9.49999V14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </Svg>
);
