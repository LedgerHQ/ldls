import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * FileDownload icon component for React Native.
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
 * import { FileDownload } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <FileDownload />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <FileDownload size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={FileDownload} size="md">
 *   Click me
 * </Button>
 */
export const FileDownload = createIcon(
  "FileDownload",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 10.5h2c.825 0 1.5-.675 1.5-1.5V4.25m0 0a1.54 1.54 0 0 0-.44-1.065L8.305 1.93a1.5 1.5 0 0 0-1.065-.44H3.49c-.83 0-1.5.67-1.5 1.5v3.5M10 4.25H8.25a1 1 0 0 1-1-1V1.5M3.5 8v2.5m0 0 1-1m-1 1-1-1"
    />
  </Svg>
);
