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
      d="M2.66669 13.3333C2.66669 11.6733 4.00669 10.3333 5.66669 10.3333H7.38869M12.6667 11.292L10.6667 13.292L9.46669 12.092M8.00002 2.66666C7.62794 2.66666 7.25951 2.73994 6.91575 2.88233C6.57199 3.02472 6.25965 3.23342 5.99655 3.49652C5.73345 3.75962 5.52475 4.07196 5.38236 4.41572C5.23997 4.75948 5.16669 5.12791 5.16669 5.49999C5.16669 5.87207 5.23997 6.2405 5.38236 6.58426C5.52475 6.92802 5.73345 7.24036 5.99655 7.50346C6.25965 7.76656 6.57199 7.97526 6.91575 8.11765C7.25951 8.26004 7.62794 8.33332 8.00002 8.33332C8.3721 8.33332 8.74053 8.26004 9.08429 8.11765C9.42805 7.97526 9.74039 7.76656 10.0035 7.50346C10.2666 7.24036 10.4753 6.92802 10.6177 6.58426C10.7601 6.2405 10.8334 5.87207 10.8334 5.49999C10.8334 5.12791 10.7601 4.75948 10.6177 4.41572C10.4753 4.07196 10.2666 3.75962 10.0035 3.49652C9.74039 3.23342 9.42805 3.02472 9.08429 2.88233C8.74053 2.73994 8.3721 2.66666 8.00002 2.66666Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
