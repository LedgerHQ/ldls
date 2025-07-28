import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Language icon component for React Native.
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
 * import { Language } from '@ldls/ui-rnative/symbols';
 *
 * <Language />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Language size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Language} size="md">
 *   Click me
 * </Button>
 */
export const Language = createIcon(
  "Language",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.00004 2.66663V4.66663M13.6667 13.3333L11 7.33329L8.33337 13.3333M8.92671 12H13.0734M2.33337 9.99996C5.06337 9.77996 7.45071 7.39329 7.66737 4.66663H2.33404M7.66671 9.99996C5.96004 9.85996 4.46804 8.36663 4.33337 6.66663"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
