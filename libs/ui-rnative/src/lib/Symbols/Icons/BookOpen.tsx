import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * BookOpen icon component for React Native.
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
 * import { BookOpen } from '@ldls/ui-rnative/symbols';
 *
 * <BookOpen />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <BookOpen size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={BookOpen} size="md">
 *   Click me
 * </Button>
 */
export const BookOpen = createIcon(
  "BookOpen",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.6667 3.33333H13.3334C14.0667 3.33333 14.6667 3.92667 14.6667 4.66667V12.6667C14.6667 13.4 14.0667 14 13.3334 14H2.66671C1.93004 14 1.33337 13.4 1.33337 12.6667V4.66667C1.33337 3.92667 1.93004 3.33333 2.66671 3.33333H3.33337M8.00004 4C8.00004 2.89533 7.10471 2 6.00004 2H4.00004C3.62671 2 3.33337 2.29333 3.33337 2.66667V11.3333C3.33337 11.7 3.62671 12 4.00004 12H6.00004C7.10471 12 8.00004 12.8953 8.00004 14M8.00004 4C8.00004 2.89533 8.89537 2 10 2H12C12.3667 2 12.6667 2.29867 12.6667 2.66667V11.3333C12.6667 11.7 12.3667 12 12 12H10C8.89537 12 8.00004 12.8953 8.00004 14M8.00004 4V14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
