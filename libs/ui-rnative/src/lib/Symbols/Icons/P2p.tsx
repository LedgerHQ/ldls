import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * P2p icon component for React Native.
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
 * import { P2p } from '@ldls/ui-rnative/symbols';
 *
 * <P2p />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <P2p size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={P2p} size="md">
 *   Click me
 * </Button>
 */
export const P2p = createIcon(
  "P2p",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.502 7.5V7a1.474 1.474 0 0 0-1.5-1.5H8M6 7.5V7a1.474 1.474 0 0 0-1.5-1.5H2.998a1.474 1.474 0 0 0-1.5 1.5v.5M9 10.055V8.775H7.705m-4.706 0a3.309 3.309 0 0 0 5.812 0M5 2.75a1.25 1.25 0 1 1-2.501 0 1.25 1.25 0 0 1 2.5 0m4.501.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
