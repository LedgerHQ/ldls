import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Switch2 icon component for React Native.
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
 * import { Switch2 } from '@ldls/ui-rnative/symbols';
 *
 * <Switch2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Switch2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Switch2} size="md">
 *   Click me
 * </Button>
 */
export const Switch2 = createIcon(
  "Switch2",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.6067 7.05332C12.1267 7.57332 12.1267 8.41332 11.6067 8.93332C11.08 9.45332 10.24 9.45332 9.72 8.93332C9.19333 8.40666 9.19333 7.56666 9.72 7.04666C10.24 6.51999 11.08 6.51999 11.6 7.04666M5.33333 4.66666H10.6667C12.5067 4.66666 14 6.15332 14 7.99999C14 9.83999 12.5067 11.3333 10.6667 11.3333H5.33333C3.49267 11.3333 2 9.83999 2 7.99999C2 6.15332 3.49267 4.66666 5.33333 4.66666Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
