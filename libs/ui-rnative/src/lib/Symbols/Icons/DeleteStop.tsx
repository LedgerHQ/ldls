import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * DeleteStop icon component for React Native.
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
 * import { DeleteStop } from '@ldls/ui-rnative/symbols';
 *
 * <DeleteStop />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DeleteStop size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={DeleteStop} size="md">
 *   Click me
 * </Button>
 */
export const DeleteStop = createIcon(
  "DeleteStop",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.182 2.818-6.365 6.36 6.36-6.365z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 1.5A4.5 4.5 0 1 0 10.5 6c0-2.49-2.014-4.5-4.5-4.5"
    />
  </Svg>
);
