import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WarningFill icon component for React Native.
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
 * import { WarningFill } from '@ldls/ui-rnative/symbols';
 *
 * <WarningFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WarningFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WarningFill} size="md">
 *   Click me
 * </Button>
 */
export const WarningFill = createIcon(
  "WarningFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.33 1.88C6.738.837 5.238.834 4.649 1.88L.824 8.58a1.544 1.544 0 0 0 1.34 2.31h7.66c1.181 0 1.929-1.283 1.34-2.31zm-.955 2.81a.375.375 0 0 0-.75 0v1.87a.375.375 0 1 0 .75 0zm-.38 2.997H5.99q-.015 0-.03.002a.5.5 0 0 0-.465.498c0 .263.213.5.5.5a.5.5 0 0 0 .352-.147.5.5 0 0 0 .148-.352.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
    />
  </Svg>
);
