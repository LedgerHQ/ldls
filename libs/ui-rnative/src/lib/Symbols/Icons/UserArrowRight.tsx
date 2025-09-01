import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserArrowRight icon component for React Native.
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
 * import { UserArrowRight } from '@ldls/ui-rnative/symbols';
 *
 * <UserArrowRight />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserArrowRight size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={UserArrowRight} size="md">
 *   Click me
 * </Button>
 */
export const UserArrowRight = createIcon(
  "UserArrowRight",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 10c0-1.25-1-2.2-2.2-2.2H3.75c-1.25 0-2.2 1-2.2 2.2M8.5 6H11m0 0-1 1m1-1-1-1M3.5 2.7c-.8.8-.8 2.15 0 2.95s2.15.8 2.95 0 .8-2.15 0-2.95-2.1-.8-2.95 0"
    />
  </Svg>
);
