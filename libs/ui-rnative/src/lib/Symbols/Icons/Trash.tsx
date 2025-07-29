import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Trash icon component for React Native.
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
 * import { Trash } from '@ldls/ui-rnative/symbols';
 *
 * <Trash />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Trash size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Trash} size="md">
 *   Click me
 * </Button>
 */
export const Trash = createIcon(
  "Trash",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.3333 4.33333V12.6667C12.3333 13.0203 12.1928 13.3594 11.9428 13.6095C11.6927 13.8595 11.3536 14 11 14H4.99996C4.64634 14 4.3072 13.8595 4.05715 13.6095C3.8071 13.3594 3.66663 13.0203 3.66663 12.6667V4.33333M13.3333 4.33334H2.66663M9.33329 11.3333V7.33334M6.66663 11.3333V7.33334M5.66663 4.33333V3C5.66663 2.73478 5.77198 2.48043 5.95952 2.29289C6.14706 2.10536 6.40141 2 6.66663 2H9.33329C9.59851 2 9.85286 2.10536 10.0404 2.29289C10.2279 2.48043 10.3333 2.73478 10.3333 3V4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
