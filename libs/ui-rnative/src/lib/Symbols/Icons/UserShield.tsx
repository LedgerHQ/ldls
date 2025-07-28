import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * UserShield icon component for React Native.
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
 * import { UserShield } from '@ldls/ui-rnative/symbols';
 *
 * <UserShield />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <UserShield size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={UserShield} size="md">
 *   Click me
 * </Button>
 */
export const UserShield = createIcon(
  "UserShield",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.562 10.6667C6.12867 10.6667 4.762 11.2333 3.75533 12.24M14 8C14 4.68 11.3133 2 8 2C4.68 2 2 4.68 2 8C2 11.3133 4.68 14 8 14M10 10.9667V11.5267C9.99333 12.5667 10.6393 13.5 11.6193 13.8667L11.906 13.9733C11.9593 13.9933 12.0193 13.9933 12.0793 13.9733L12.366 13.86C13.3393 13.4933 13.986 12.56 13.986 11.5133V10.9467C13.986 10.7267 13.8393 10.5333 13.6327 10.4667L12.1327 9.99333C12.0327 9.96 11.926 9.96 11.8327 9.99333L10.3327 10.46C10.1193 10.52 9.97933 10.7133 9.97933 10.9333L10 10.9667ZM10 6.5V6.83333C10 7.93333 9.1 8.83333 8 8.83333C6.89333 8.83333 6 7.93333 6 6.83333V6.5C6 5.39333 6.89333 4.5 8 4.5C9.1 4.5 10 5.39333 10 6.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
