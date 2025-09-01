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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 5.5V3a1 1 0 0 0-1-1H2c-.555 0-1 .445-1 1v4a1 1 0 0 0 1 1h6m-1.75 2V8m-2 0v2m-.625 0h3.25m3.375 0h-1.5A.75.75 0 0 1 8 9.25v-3c0-.415.335-.75.75-.75h1.5c.41 0 .75.335.75.75v3c0 .41-.34.75-.75.75"
    />
  </Svg>
);
