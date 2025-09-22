import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MonitorPassword icon component for React Native.
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
 * import { MonitorPassword } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <MonitorPassword />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MonitorPassword size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={MonitorPassword} size="md">
 *   Click me
 * </Button>
 */
export const MonitorPassword = createIcon(
  "MonitorPassword",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6v1.21c0 .705-.58 1.285-1.29 1.285H2.775c-.71 0-1.29-.58-1.29-1.29q-.007-.006 0-.005V2.77A1.286 1.286 0 0 1 2.77 1.48m0 0q0-.007 0 0m0 0h.21M7 8.5l.25 2M5 8.5l-.25 2m-.68 0h3.86M6.248 2.75v-.005l-.005-.005h-.005m1.51.01v-.005l-.005-.005h-.005m1.507.01v-.005L9.24 2.74h-.005M10.5 6.75h-9M5.5 1H10a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
    />
  </Svg>
);
