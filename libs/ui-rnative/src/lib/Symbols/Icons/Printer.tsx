import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Printer icon component for React Native.
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
 * import { Printer } from '@ldls/ui-rnative/symbols';
 *
 * <Printer />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Printer size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Printer} size="md">
 *   Click me
 * </Button>
 */
export const Printer = createIcon(
  "Printer",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.66667 5.33333V2.66667C4.66667 2.29867 4.96 2 5.33333 2H10.6667C11.0333 2 11.3333 2.29333 11.3333 2.66667V5.33333M4.66667 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V6.66667C2 5.92667 2.59667 5.33333 3.33333 5.33333H12.6667C13.4 5.33333 14 5.92667 14 6.66667V10C14 10.7333 13.4 11.3333 12.6667 11.3333H11.3333M4.66667 7.33333H5.33333M4.66667 9.2H11.3333V13.3333C11.3333 13.7 11.0333 14 10.6667 14H5.33333C4.96 14 4.66667 13.7 4.66667 13.3333V9.2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
