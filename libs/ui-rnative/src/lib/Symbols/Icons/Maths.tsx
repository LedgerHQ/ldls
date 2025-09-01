import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Maths icon component for React Native.
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
 * import { Maths } from '@ldls/ui-rnative/symbols';
 *
 * <Maths />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Maths size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Maths} size="md">
 *   Click me
 * </Button>
 */
export const Maths = createIcon(
  "Maths",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.4 9h1.5M7.4 7.5h1.5M1.5 6h9m-3-2.25H9m-6 0h1.5m-.75.75V3m-.53 4.72 1.06 1.06m-1.06 0 1.06-1.06M6 1.5v9m4.5-1.174c0 .645-.53 1.17-1.175 1.17H2.67c-.65 0-1.175-.53-1.175-1.175V2.665c0-.65.525-1.175 1.174-1.175h6.65c.645 0 1.17.525 1.17 1.174v6.65z"
    />
  </Svg>
);
