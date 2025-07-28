import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ComputerMobile icon component for React Native.
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
 * import { ComputerMobile } from '@ldls/ui-rnative/symbols';
 *
 * <ComputerMobile />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ComputerMobile size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ComputerMobile} size="md">
 *   Click me
 * </Button>
 */
export const ComputerMobile = createIcon(
  "ComputerMobile",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.6667 7.33335V4.00002C12.6667 3.26002 12.0667 2.66669 11.3334 2.66669H2.66671C1.92671 2.66669 1.33337 3.26002 1.33337 4.00002V9.33335C1.33337 10.0667 1.92671 10.6667 2.66671 10.6667H10.6667M8.33337 13.3334V10.6667M5.66671 10.6667V13.3334M4.83337 13.3334H9.16671M13.6667 13.3334H11.6667C11.1134 13.3334 10.6667 12.88 10.6667 12.3334V8.33335C10.6667 7.78002 11.1134 7.33335 11.6667 7.33335H13.6667C14.2134 7.33335 14.6667 7.78002 14.6667 8.33335V12.3334C14.6667 12.88 14.2134 13.3334 13.6667 13.3334Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
