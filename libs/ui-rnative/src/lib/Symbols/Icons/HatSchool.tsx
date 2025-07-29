import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * HatSchool icon component for React Native.
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
 * import { HatSchool } from '@ldls/ui-rnative/symbols';
 *
 * <HatSchool />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <HatSchool size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={HatSchool} size="md">
 *   Click me
 * </Button>
 */
export const HatSchool = createIcon(
  "HatSchool",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14.2739 6.00006V10.5001M3.99336 8.13335V10.7467C3.99336 11.3734 4.30669 11.9667 4.83336 12.3134L5.90003 13.02C7.16669 13.86 8.81669 13.86 10.0834 13.02L11.15 12.3067C11.6767 11.9534 11.99 11.36 11.99 10.7334V8.11335M6.46869 2.72668L2.34669 5.01335C1.48136 5.49335 1.48136 6.73335 2.34669 7.21335L6.46003 9.50002C7.40669 10.0267 8.56669 10.0267 9.52003 9.50002L13.6334 7.21335C14.4934 6.72668 14.4934 5.48668 13.6334 5.00802L9.51336 2.72135C8.56003 2.18802 7.40003 2.18802 6.44669 2.72135L6.46869 2.72668Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
