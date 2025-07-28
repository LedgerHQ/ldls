import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Screens icon component for React Native.
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
 * import { Screens } from '@ldls/ui-rnative/symbols';
 *
 * <Screens />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Screens size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Screens} size="md">
 *   Click me
 * </Button>
 */
export const Screens = createIcon(
  "Screens",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.33224 1.99756H10.6678M3.99835 4.4986H12.0017M12.2351 14.0026H3.76492C3.07988 14.0026 2.50621 13.4837 2.4377 12.8021L2.00419 8.46692C1.96649 8.09183 2.08927 7.7183 2.34216 7.43873C2.59505 7.15915 2.95443 6.99964 3.33141 6.99964H12.6686C13.0456 6.99964 13.405 7.15915 13.6579 7.43873C13.9108 7.7183 14.0335 8.09183 13.9959 8.46692L13.5623 12.8021C13.4938 13.4837 12.9202 14.0026 12.2351 14.0026Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
