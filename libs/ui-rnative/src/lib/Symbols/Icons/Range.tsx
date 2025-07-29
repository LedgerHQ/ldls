import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Range icon component for React Native.
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
 * import { Range } from '@ldls/ui-rnative/symbols';
 *
 * <Range />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Range size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Range} size="md">
 *   Click me
 * </Button>
 */
export const Range = createIcon(
  "Range",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2 13.3333H7.33333M2 10.6667H6M2 7.99999H7.33333M2 5.33332H6M2 2.66666H7.33333M12 13.3333V2.66666M12 13.3333L13.6667 11.6667M12 13.3333L10.3333 11.6667M12 2.66666L10.3333 4.33332M12 2.66666L13.6667 4.33332"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
