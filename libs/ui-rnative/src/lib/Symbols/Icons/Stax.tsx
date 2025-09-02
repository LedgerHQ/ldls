import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Stax icon component for React Native.
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
 * import { Stax } from '@ledgerhq/ui-rnative/symbols';
 *
 * <Stax />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Stax size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={Stax} size="md">
 *   Click me
 * </Button>
 */
export const Stax = createIcon(
  "Stax",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeWidth={1.3}
      d="M12 4.667h.467c.073 0 .133.06.133.133v1.733c0 .074-.06.134-.133.134H12M4.333 14h6.334c.736 0 1.333-.597 1.333-1.333V3.333C12 2.597 11.403 2 10.667 2H4.333A.333.333 0 0 0 4 2.333v11.334c0 .184.15.333.333.333Z"
    />
  </Svg>
);
