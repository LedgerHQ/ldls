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
 * import { ComputerMobile } from '@ledgerhq/ui-rnative/symbols';
 *
 * <ComputerMobile />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ComputerMobile size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={ComputerMobile} size="md">
 *   Click me
 * </Button>
 */
export const ComputerMobile = createIcon(
  "ComputerMobile",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12.667 7.333V4c0-.74-.6-1.333-1.334-1.333H2.667c-.74 0-1.334.593-1.334 1.333v5.333c0 .734.594 1.334 1.334 1.334h8m-2.334 2.666v-2.666m-2.666 0v2.666m-.834 0h4.334m4.5 0h-2c-.554 0-1-.453-1-1v-4c0-.553.446-1 1-1h2c.546 0 1 .447 1 1v4c0 .547-.454 1-1 1"
    />
  </Svg>
);
