import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Eye icon component for React Native.
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
 * import { Eye } from '@ldls/ui-rnative/symbols';
 *
 * <Eye />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Eye size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Eye} size="md">
 *   Click me
 * </Button>
 */
export const Eye = createIcon(
  "Eye",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.061 4.94a1.5 1.5 0 1 1-2.125 2.12c-.59-.59-.59-1.54 0-2.125a1.497 1.497 0 0 1 2.12 0M1.5 6c0-.33.075-.655.22-.96.755-1.55 2.43-2.545 4.277-2.545 1.845 0 3.515.995 4.275 2.54.145.3.22.625.22.955 0 .325-.08.656-.225.955-.76 1.545-2.435 2.54-4.28 2.54-1.85 0-3.52-1-4.277-2.545a2.2 2.2 0 0 1-.225-.96z"
    />
  </Svg>
);
