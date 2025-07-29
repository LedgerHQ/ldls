import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ClockFill icon component for React Native.
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
 * import { ClockFill } from '@ldls/ui-rnative/symbols';
 *
 * <ClockFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ClockFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ClockFill} size="md">
 *   Click me
 * </Button>
 */
export const ClockFill = createIcon(
  "ClockFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 8C1.5 4.40353 4.41018 1.5 8 1.5C11.5901 1.5 14.5 4.40986 14.5 8C14.5 11.5901 11.5901 14.5 8 14.5C4.40353 14.5 1.5 11.5898 1.5 8Z"
      fill="currentColor"
    />
    <Path d="M11.1 8H8H11.1Z" fill="currentColor" />
    <Path d="M8 8V4.26666V8Z" fill="currentColor" />
    <Path
      d="M11.1 8H8V4.26666"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
