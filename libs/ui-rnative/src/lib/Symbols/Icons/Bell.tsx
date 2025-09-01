import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bell icon component for React Native.
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
 * import { Bell } from '@ldls/ui-rnative/symbols';
 *
 * <Bell />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bell size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Bell} size="md">
 *   Click me
 * </Button>
 */
export const Bell = createIcon(
  "Bell",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 9v.125c0 .825.67 1.5 1.5 1.5.825 0 1.5-.675 1.5-1.5V9M9 6.875l.85.85c.09.09.145.22.145.35v.415c0 .275-.225.5-.5.5h-7c-.28 0-.5-.225-.5-.5v-.42c0-.135.05-.26.145-.355l.85-.855V4.735c0-1.66 1.34-3 3-3 1.655 0 3 1.34 3 3z"
    />
  </Svg>
);
