import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bank icon component for React Native.
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
 * import { Bank } from '@ldls/ui-rnative/symbols';
 *
 * <Bank />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bank size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Bank} size="md">
 *   Click me
 * </Button>
 */
export const Bank = createIcon(
  "Bank",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.762 6.66667V12M12.6667 12V6.66667M3.33333 6.66667V12M6.238 12V6.66667M14 6.66667H2V4.66267L8.10133 2L14 4.574V6.66667ZM2 14H14V13.3333L13.3333 12H2.66667L2 13.3333V14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
