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
 * import { BookOpen } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <BookOpen />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <BookOpen size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={BookOpen} size="md">
 *   Click me
 * </Button>
 */
export const BookOpen = createIcon(
  "BookOpen",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 2.5h.5a1 1 0 0 1 1 1v6c0 .55-.45 1-1 1H2c-.552 0-1-.45-1-1v-6c0-.555.448-1 1-1h.5M6 3a1.5 1.5 0 0 0-1.5-1.5H3c-.28 0-.5.22-.5.5v6.5c0 .275.22.5.5.5h1.5A1.5 1.5 0 0 1 6 10.5M6 3a1.5 1.5 0 0 1 1.5-1.5H9a.5.5 0 0 1 .5.5v6.5c0 .275-.225.5-.5.5H7.5A1.5 1.5 0 0 0 6 10.5M6 3v7.5"
    />
  </Svg>
);
