import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CloudDownload icon component for React Native.
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
 * import { CloudDownload } from '@ldls/ui-rnative/symbols';
 *
 * <CloudDownload />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CloudDownload size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CloudDownload} size="md">
 *   Click me
 * </Button>
 */
export const CloudDownload = createIcon(
  "CloudDownload",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8v2.5m0 0-1-1m1 1 1-1m-3.3-1h-.205a2.498 2.498 0 0 1-.34-4.97v-.005A2.985 2.985 0 0 1 5.99 1.49a3 3 0 0 1 3 3c1.1 0 2 .895 2 2 0 1.1-.9 2-2 2h-.706"
    />
  </Svg>
);
