import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Apps icon component for React Native.
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
 * import { Apps } from '@ldls/ui-rnative/symbols';
 *
 * <Apps />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Apps size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Apps} size="md">
 *   Click me
 * </Button>
 */
export const Apps = createIcon(
  "Apps",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.6667 10V13.3333M13.3333 11.6667H10M5.33333 6.66667H3.33333C2.59667 6.66667 2 6.06667 2 5.33333V3.33333C2 2.59667 2.59667 2 3.33333 2H5.33333C6.06667 2 6.66667 2.59667 6.66667 3.33333V5.33333C6.66667 6.06667 6.06667 6.66667 5.33333 6.66667ZM12.6667 6.66667H10.6667C9.92667 6.66667 9.33333 6.06667 9.33333 5.33333V3.33333C9.33333 2.59667 9.92667 2 10.6667 2H12.6667C13.4 2 14 2.59667 14 3.33333V5.33333C14 6.06667 13.4 6.66667 12.6667 6.66667ZM5.33333 14H3.33333C2.59667 14 2 13.4 2 12.6667V10.6667C2 9.92667 2.59667 9.33333 3.33333 9.33333H5.33333C6.06667 9.33333 6.66667 9.92667 6.66667 10.6667V12.6667C6.66667 13.4 6.06667 14 5.33333 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
