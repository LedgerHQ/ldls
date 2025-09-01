import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * DollarConvert icon component for React Native.
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
 * import { DollarConvert } from '@ldls/ui-rnative/symbols';
 *
 * <DollarConvert />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DollarConvert size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={DollarConvert} size="md">
 *   Click me
 * </Button>
 */
export const DollarConvert = createIcon(
  "DollarConvert",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.875 3.5v.625m0 4.375v-.625M7.115 5a.935.935 0 0 0-.931-.875h-.685a.877.877 0 0 0-.22 1.725l1.171.29a.877.877 0 0 1-.22 1.725h-.685c-.5 0-.9-.39-.935-.88m-1.675-4.05a4.338 4.338 0 0 1 7.401 3.064c0 .33-.045.655-.115.97m-.671-.668.78.78.78-.785M9.065 9.064a4.34 4.34 0 0 1-3.07 1.265A4.338 4.338 0 0 1 1.769 5.02m.677.679-.785-.785-.785.78"
    />
  </Svg>
);
