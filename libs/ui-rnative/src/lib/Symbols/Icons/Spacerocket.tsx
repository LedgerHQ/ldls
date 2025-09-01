import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Spacerocket icon component for React Native.
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
 * import { Spacerocket } from '@ldls/ui-rnative/symbols';
 *
 * <Spacerocket />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Spacerocket size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Spacerocket} size="md">
 *   Click me
 * </Button>
 */
export const Spacerocket = createIcon(
  "Spacerocket",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 6.5v2.192a.5.5 0 0 1-.276.448l-1.208.604a.5.5 0 0 1-.698-.29L5.5 8.502m-2.001-2-.954-.319a.5.5 0 0 1-.289-.698l.605-1.208a.5.5 0 0 1 .447-.277H5.5m3.049 2.063-2.7 2.16a.5.5 0 0 1-.666-.038L3.816 6.817a.5.5 0 0 1-.037-.666l2.16-2.7a5.2 5.2 0 0 1 4.063-1.953.5.5 0 0 1 .5.5c0 1.581-.719 3.076-1.953 4.064m-5.675 4.233-1.376.207.207-1.376a1.028 1.028 0 1 1 1.169 1.17"
    />
  </Svg>
);
