import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Shapes icon component for React Native.
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
 * import { Shapes } from '@ldls/ui-rnative/symbols';
 *
 * <Shapes />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Shapes size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Shapes} size="md">
 *   Click me
 * </Button>
 */
export const Shapes = createIcon(
  "Shapes",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M4.377 9.623c0-.427.346-.773.773-.773h.988c.427 0 .773.346.773.773v.988a.773.773 0 0 1-.773.773H5.15a.773.773 0 0 1-.773-.773zM11.713 10.118a1.417 1.417 0 1 1-2.833 0 1.417 1.417 0 0 1 2.833 0"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m7.737 4.562-1.085 1.88a.367.367 0 0 0 .317.55h2.17a.367.367 0 0 0 .318-.55l-1.085-1.88a.367.367 0 0 0-.635 0"
      clipRule="evenodd"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M1.998 5.33A3.333 3.333 0 0 1 5.33 1.999h5.338a3.333 3.333 0 0 1 3.334 3.333v5.338a3.333 3.333 0 0 1-3.334 3.333H5.331a3.333 3.333 0 0 1-3.333-3.333z"
    />
  </Svg>
);
