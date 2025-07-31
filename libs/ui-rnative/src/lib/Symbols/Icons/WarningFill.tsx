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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.773 2.506c-.79-1.388-2.789-1.392-3.575 0v.002L1.1 11.44c-.784 1.372.206 3.08 1.787 3.08h10.212c1.576 0 2.572-1.712 1.788-3.08zM8.5 6.253a.5.5 0 1 0-1 0v2.494a.5.5 0 0 0 1 0zm-.506 3.997h-.007q-.021 0-.041.002a.665.665 0 0 0-.62.665c0 .35.285.666.668.666.196 0 .36-.088.469-.197a.67.67 0 0 0 .197-.47.67.67 0 0 0-.666-.666"
      clipRule="evenodd"
    />
  </Svg>
);
