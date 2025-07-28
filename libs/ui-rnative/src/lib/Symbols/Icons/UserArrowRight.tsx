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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.3333 13.3333C11.3333 11.6667 9.99998 10.4 8.39998 10.4H4.99998C3.33332 10.4 2.06665 11.7333 2.06665 13.3333M11.3333 7.99999H14.6666M14.6666 7.99999L13.3333 9.33332M14.6666 7.99999L13.3333 6.66665M4.66665 3.59999C3.59998 4.66665 3.59998 6.46665 4.66665 7.53332C5.73332 8.59999 7.53332 8.59999 8.59998 7.53332C9.66665 6.46665 9.66665 4.66665 8.59998 3.59999C7.53332 2.53332 5.79998 2.53332 4.66665 3.59999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
