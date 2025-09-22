import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Repair icon component for React Native.
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
 * import { Repair } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Repair />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Repair size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Repair} size="md">
 *   Click me
 * </Button>
 */
export const Repair = createIcon(
  "Repair",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.63 4.801 1.82 8.606a1.106 1.106 0 0 0-.005 1.565h0c.43.43 1.13.43 1.564 0l3.805-3.81v0a2.49 2.49 0 0 0 3.155-1.55l.015-.06V4.75a2.5 2.5 0 0 0 .11-1 .505.505 0 0 0-.855-.29l-.905.9a.257.257 0 0 1-.355 0l-.005-.005-.765-.765c-.1-.1-.1-.26.09-.45l.805-.81a.51.51 0 0 0 .005-.71.5.5 0 0 0-.29-.145c-.34-.035-.68 0-1 .11V1.58a2.48 2.48 0 0 0-1.63 3.115l.015.055z"
    />
  </Svg>
);
