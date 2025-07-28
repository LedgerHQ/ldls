import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsEye icon component for React Native.
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
 * import { CoinsEye } from '@ldls/ui-rnative/symbols';
 *
 * <CoinsEye />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsEye size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinsEye} size="md">
 *   Click me
 * </Button>
 */
export const CoinsEye = createIcon(
  "CoinsEye",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99996 14.3333C6.32025 14.3333 4.70935 13.666 3.52162 12.4783C2.33389 11.2906 1.66663 9.67966 1.66663 7.99996C1.66663 6.32025 2.33389 4.70935 3.52162 3.52162C4.70935 2.33389 6.32025 1.66663 7.99996 1.66663C9.67966 1.66663 11.2906 2.33389 12.4783 3.52162C13.666 4.70935 14.3333 6.32025 14.3333 7.99996M6.95538 6.93238C7.09397 5.90894 8.03746 5.19999 9.06089 5.33858C10.079 5.47717 10.7879 6.42066 10.6494 7.44409C10.5321 8.26498 9.88178 8.91529 9.05556 9.03255M12.586 12.2673C12.6193 12.3006 12.6193 12.3606 12.586 12.4006C12.546 12.4339 12.486 12.4339 12.446 12.4006C12.406 12.3606 12.406 12.3006 12.446 12.2606C12.4793 12.2206 12.5393 12.2206 12.5793 12.2606M7.20056 6.93238C6.70576 6.93238 6.23123 7.12894 5.88135 7.47881C5.53148 7.82869 5.33492 8.30322 5.33492 8.79802C5.33492 9.29282 5.53148 9.76735 5.88135 10.1172C6.23123 10.4671 6.70576 10.6637 7.20056 10.6637C7.69536 10.6637 8.16989 10.4671 8.51977 10.1172C8.86965 9.76735 9.0662 9.29282 9.0662 8.79802C9.0662 8.30322 8.86965 7.82869 8.51977 7.47881C8.16989 7.12894 7.69536 6.93238 7.20056 6.93238ZM10.1733 12.7933C9.98666 12.5133 9.98666 12.1466 10.1733 11.8733C10.7333 11.0133 11.6267 10.3266 12.5153 10.3266C13.402 10.3266 14.2887 11.0066 14.8553 11.8666C15.0353 12.14 15.0353 12.5066 14.8553 12.7866C14.2887 13.6413 13.3953 14.3266 12.5087 14.3266C11.6153 14.3266 10.7287 13.64 10.1667 12.7866L10.1733 12.7933Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
