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
      d="M7.99996 14.3334C6.32025 14.3334 4.70935 13.6661 3.52162 12.4784C2.33389 11.2906 1.66663 9.67972 1.66663 8.00002C1.66663 6.32032 2.33389 4.70941 3.52162 3.52168C4.70935 2.33395 6.32025 1.66669 7.99996 1.66669C9.67966 1.66669 11.2906 2.33395 12.4783 3.52168C13.666 4.70941 14.3333 6.32032 14.3333 8.00002M6.95538 6.93244C7.09397 5.909 8.03746 5.20005 9.06089 5.33865C10.079 5.47724 10.7879 6.42072 10.6494 7.44416C10.5321 8.26504 9.88178 8.91535 9.05556 9.03262M12.586 12.2673C12.6193 12.3007 12.6193 12.3607 12.586 12.4007C12.546 12.434 12.486 12.434 12.446 12.4007C12.406 12.3607 12.406 12.3007 12.446 12.2607C12.4793 12.2207 12.5393 12.2207 12.5793 12.2607M7.20056 6.93244C6.70576 6.93244 6.23123 7.129 5.88135 7.47887C5.53148 7.82875 5.33492 8.30328 5.33492 8.79808C5.33492 9.29288 5.53148 9.76741 5.88135 10.1173C6.23123 10.4672 6.70576 10.6637 7.20056 10.6637C7.69536 10.6637 8.16989 10.4672 8.51977 10.1173C8.86965 9.76741 9.0662 9.29288 9.0662 8.79808C9.0662 8.30328 8.86965 7.82875 8.51977 7.47887C8.16989 7.129 7.69536 6.93244 7.20056 6.93244ZM10.1733 12.7933C9.98666 12.5133 9.98666 12.1467 10.1733 11.8733C10.7333 11.0133 11.6267 10.3267 12.5153 10.3267C13.402 10.3267 14.2887 11.0067 14.8553 11.8667C15.0353 12.14 15.0353 12.5067 14.8553 12.7867C14.2887 13.6413 13.3953 14.3267 12.5087 14.3267C11.6153 14.3267 10.7287 13.64 10.1667 12.7867L10.1733 12.7933Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
