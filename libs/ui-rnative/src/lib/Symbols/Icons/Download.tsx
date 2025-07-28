import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Download icon component for React Native.
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
 * import { Download } from '@ldls/ui-rnative/symbols';
 *
 * <Download />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Download size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Download} size="md">
 *   Click me
 * </Button>
 */
export const Download = createIcon(
  "Download",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.3707 7.40729L8.00002 9.77796M8.00002 9.77796L5.62935 7.40729M8.00002 9.77796V2.66663M13.3334 10.9626C13.3334 11.5914 13.0836 12.1944 12.639 12.6389C12.1944 13.0835 11.5914 13.3333 10.9627 13.3333H5.03735C4.40861 13.3333 3.80563 13.0835 3.36104 12.6389C2.91645 12.1944 2.66669 11.5914 2.66669 10.9626"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
