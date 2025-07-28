import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Truck icon component for React Native.
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
 * import { Truck } from '@ldls/ui-rnative/symbols';
 *
 * <Truck />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Truck size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Truck} size="md">
 *   Click me
 * </Button>
 */
export const Truck = createIcon(
  "Truck",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.66659 2.66663H9.33325C9.69992 2.66663 9.99992 2.95996 9.99992 3.33329V9.99996H1.33325M3.33325 12.94H1.99992C1.63192 12.94 1.33325 12.64 1.33325 12.2733V8.65996M9.99992 4.66663H12.8819C13.1486 4.66663 13.3953 4.82663 13.4953 5.07996L14.5619 7.75329C14.6219 7.90663 14.6553 8.07329 14.6553 8.24663V12.212C14.6553 12.5786 14.3553 12.8786 13.9886 12.8786H12.7619M10.6666 12.9466H5.44659M14.6666 9.33329H11.9999V6.66663H14.1333M1.33325 2.66663H4.66659M1.33325 4.66663H3.33325M1.99992 6.66663H1.33325M12.4693 12.1933C12.8759 12.6 12.8759 13.2733 12.4693 13.6866C12.0559 14.0933 11.3826 14.0933 10.9759 13.6866C10.5626 13.2733 10.5626 12.6 10.9759 12.1933C11.3826 11.78 12.0559 11.78 12.4693 12.1933ZM5.13592 12.1933C5.54259 12.6 5.54259 13.2733 5.13592 13.6866C4.72259 14.0933 4.04925 14.0933 3.64259 13.6866C3.22925 13.2733 3.22925 12.6 3.64259 12.1933C4.04925 11.78 4.72259 11.78 5.13592 12.1933Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
