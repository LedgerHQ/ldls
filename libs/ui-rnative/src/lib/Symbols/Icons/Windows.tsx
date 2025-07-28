import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Windows icon component for React Native.
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
 * import { Windows } from '@ldls/ui-rnative/symbols';
 *
 * <Windows />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Windows size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Windows} size="md">
 *   Click me
 * </Button>
 */
export const Windows = createIcon(
  "Windows",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.50378 7.76002H13.5998V2.40002L7.50378 3.24802V7.76002ZM2.39978 12.064L7.00778 12.688V8.30402H2.39978V12.064ZM2.39978 7.76002H7.00778V3.31202L2.39978 3.93602V7.76002ZM7.50378 12.752L13.5998 13.6V8.30402H7.50378V12.752Z"
      fill="currentColor"
    />
  </Svg>
);
