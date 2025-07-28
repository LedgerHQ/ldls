import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Slideshow icon component for React Native.
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
 * import { Slideshow } from '@ldls/ui-rnative/symbols';
 *
 * <Slideshow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Slideshow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Slideshow} size="md">
 *   Click me
 * </Button>
 */
export const Slideshow = createIcon(
  "Slideshow",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.66671 3.33329L5.33337 2.66663V13.3333L6.66671 12.6666M2.66671 3.33329L1.33337 2.66663V13.3333L2.66671 12.6666M14.6667 11.3333L9.33337 13.3333V2.66663L14.6667 4.66663V11.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
