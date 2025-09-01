import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * QrCode icon component for React Native.
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
 * import { QrCode } from '@ldls/ui-rnative/symbols';
 *
 * <QrCode />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <QrCode size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={QrCode} size="md">
 *   Click me
 * </Button>
 */
export const QrCode = createIcon(
  "QrCode",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10.5h1c.825 0 1.5-.675 1.5-1.5V8M8 1.5h1c.825 0 1.5.67 1.5 1.5v1m-9 4v1c0 .825.67 1.5 1.5 1.5h1M1.5 4V3c0-.83.67-1.5 1.5-1.5h1m2.775 5.25H6.77l-.005-.005V6.74m1.712.01h-.005l-.005-.005V6.74M6.775 8.5H6.77l-.005-.005V8.49m1.71.01H8.47l-.005-.005V8.49m-.837-.865h-.006l-.005-.005v-.005M7 3.5h1.25a.25.25 0 0 1 .25.25V5a.25.25 0 0 1-.25.25H7A.25.25 0 0 1 6.75 5V3.75A.25.25 0 0 1 7 3.5m-3.25 0H5a.25.25 0 0 1 .25.25V5a.25.25 0 0 1-.25.25H3.75A.25.25 0 0 1 3.5 5V3.75a.25.25 0 0 1 .25-.25m0 3.25H5a.25.25 0 0 1 .25.25v1.25A.25.25 0 0 1 5 8.5H3.75a.25.25 0 0 1-.25-.25V7a.25.25 0 0 1 .25-.25"
    />
  </Svg>
);
