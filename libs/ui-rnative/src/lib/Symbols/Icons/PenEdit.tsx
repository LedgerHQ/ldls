import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * PenEdit icon component for React Native.
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
 * import { PenEdit } from '@ldls/ui-rnative/symbols';
 *
 * <PenEdit />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PenEdit size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={PenEdit} size="md">
 *   Click me
 * </Button>
 */
export const PenEdit = createIcon(
  "PenEdit",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.875 3.58 8.42 5.125m-5.775 2.68 5.16-5.165a.5.5 0 0 1 .705 0l.835.835a.5.5 0 0 1 0 .705L4.18 9.345a.53.53 0 0 1-.355.145h-1.34V8.15c0-.135.05-.26.145-.355z"
    />
  </Svg>
);
