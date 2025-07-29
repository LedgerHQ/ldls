import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Stax icon component for React Native.
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
 * import { Stax } from '@ldls/ui-rnative/symbols';
 *
 * <Stax />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Stax size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Stax} size="md">
 *   Click me
 * </Button>
 */
export const Stax = createIcon(
  "Stax",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12 4.66667H12.4667C12.5403 4.66667 12.6 4.72636 12.6 4.8V6.53333C12.6 6.60697 12.5403 6.66667 12.4667 6.66667H12M4.33333 14H10.6667C11.403 14 12 13.403 12 12.6667V3.33333C12 2.59695 11.403 2 10.6667 2H4.33333C4.14924 2 4 2.14924 4 2.33333V13.6667C4 13.8508 4.14924 14 4.33333 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
    />
  </Svg>
);
