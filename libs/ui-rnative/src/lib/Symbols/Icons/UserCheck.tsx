import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserCheck icon component for React Native.
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
 * import { UserCheck } from '@ldls/ui-rnative/symbols';
 *
 * <UserCheck />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserCheck size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={UserCheck} size="md">
 *   Click me
 * </Button>
 */
export const UserCheck = createIcon(
  "UserCheck",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.66669 13.3334C2.66669 11.6734 4.00669 10.3334 5.66669 10.3334H7.38869M12.6667 11.292L10.6667 13.292L9.46669 12.092M8.00002 2.66669C7.62794 2.66669 7.25951 2.73997 6.91575 2.88236C6.57199 3.02475 6.25965 3.23345 5.99655 3.49655C5.73345 3.75965 5.52475 4.07199 5.38236 4.41575C5.23997 4.75951 5.16669 5.12794 5.16669 5.50002C5.16669 5.8721 5.23997 6.24053 5.38236 6.58429C5.52475 6.92805 5.73345 7.24039 5.99655 7.50349C6.25965 7.76659 6.57199 7.97529 6.91575 8.11768C7.25951 8.26007 7.62794 8.33335 8.00002 8.33335C8.3721 8.33335 8.74053 8.26007 9.08429 8.11768C9.42805 7.97529 9.74039 7.76659 10.0035 7.50349C10.2666 7.24039 10.4753 6.92805 10.6177 6.58429C10.7601 6.24053 10.8334 5.8721 10.8334 5.50002C10.8334 5.12794 10.7601 4.75951 10.6177 4.41575C10.4753 4.07199 10.2666 3.75965 10.0035 3.49655C9.74039 3.23345 9.42805 3.02475 9.08429 2.88236C8.74053 2.73997 8.3721 2.66669 8.00002 2.66669Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
