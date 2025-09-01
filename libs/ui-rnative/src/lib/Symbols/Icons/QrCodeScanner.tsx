import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * QrCodeScanner icon component for React Native.
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
 * import { QrCodeScanner } from '@ldls/ui-rnative/symbols';
 *
 * <QrCodeScanner />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <QrCodeScanner size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={QrCodeScanner} size="md">
 *   Click me
 * </Button>
 */
export const QrCodeScanner = createIcon(
  "QrCodeScanner",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 4V2.5c0-.552-.45-1-1-1H8m-4 0H2.5a1 1 0 0 0-1 1V4m0 4v1.5c0 .55.448 1 1 1H4m4 0h1.5c.55 0 1-.45 1-1V8m-9-2h9"
    />
  </Svg>
);
