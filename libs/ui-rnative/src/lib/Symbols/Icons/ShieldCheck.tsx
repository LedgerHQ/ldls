import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldCheck icon component for React Native.
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
 * import { ShieldCheck } from '@ldls/ui-rnative/symbols';
 *
 * <ShieldCheck />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldCheck size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ShieldCheck} size="md">
 *   Click me
 * </Button>
 */
export const ShieldCheck = createIcon(
  "ShieldCheck",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.1666 6.74999L7.66663 9.24999L6.16663 7.74999M13.3333 7.45465C13.3333 10.482 11.0533 13.3127 7.99996 14C4.94196 13.3067 2.66663 10.48 2.66663 7.45465V5.07665C2.66663 4.52999 2.99329 4.04332 3.49329 3.83665L6.82663 2.46999C7.57329 2.15665 8.41863 2.15665 9.16663 2.46999L12.5 3.82999C13 4.02999 13.3266 4.51665 13.3266 5.06332V7.44132L13.3333 7.45465Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
