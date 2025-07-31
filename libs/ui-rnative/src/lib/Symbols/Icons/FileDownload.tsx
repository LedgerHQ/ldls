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
 * import { FileDownload } from '@ldls/ui-rnative/symbols';
 *
 * <FileDownload />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <FileDownload size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={FileDownload} size="md">
 *   Click me
 * </Button>
 */
export const FileDownload = createIcon(
  "FileDownload",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8.667 14h2.666c1.1 0 2-.9 2-2V5.667m0 0a2.05 2.05 0 0 0-.586-1.42l-1.674-1.674a2 2 0 0 0-1.42-.586h-5c-1.106 0-2 .893-2 2v4.666m10.68-2.986H11c-.74 0-1.333-.6-1.333-1.334V2m-5 8.667V14m0 0L6 12.667M4.667 14l-1.334-1.333"
    />
  </Svg>
);
