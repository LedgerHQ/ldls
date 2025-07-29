import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Nano icon component for React Native.
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
 * import { Nano } from '@ldls/ui-rnative/symbols';
 *
 * <Nano />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Nano size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Nano} size="md">
 *   Click me
 * </Button>
 */
export const Nano = createIcon(
  "Nano",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.3333 11.9444C11.3333 12.1 11.4556 12.2222 11.6111 12.2222C11.7611 12.2222 11.8889 12.1 11.8889 11.9444C11.8889 11.7944 11.7611 11.6667 11.6111 11.6667C11.4556 11.6667 11.3333 11.7944 11.3333 11.95M6.1716 7.99999L3.23573 5.06412C3.10555 4.93394 3.10555 4.72289 3.23573 4.59272L5.59275 2.23569C5.72292 2.10552 5.93398 2.10552 6.06415 2.23569L11.8285 7.99999M2.29268 14H12C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 9.99999 12 9.99999H2.29268C2.13104 9.99999 2 10.131 2 10.2927V13.7073C2 13.869 2.13104 14 2.29268 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
