import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Clip icon component for React Native.
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
 * import { Clip } from '@ldls/ui-rnative/symbols';
 *
 * <Clip />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Clip size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Clip} size="md">
 *   Click me
 * </Button>
 */
export const Clip = createIcon(
  "Clip",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.725 4.69 3.96 7.455a.81.81 0 0 0 0 1.16h-.005c.32.32.84.32 1.16 0l4.31-4.313c.64-.645.64-1.685 0-2.325L9.42 1.97a1.643 1.643 0 0 0-2.325-.005H7.09l-4.315 4.31a2.457 2.457 0 0 0-.005 3.48c.96.96 2.52.96 3.48 0v-.005l3.15-3.15"
    />
  </Svg>
);
