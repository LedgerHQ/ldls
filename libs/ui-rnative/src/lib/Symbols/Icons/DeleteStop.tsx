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
 * import { DeleteStop } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <DeleteStop />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DeleteStop size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={DeleteStop} size="md">
 *   Click me
 * </Button>
 */
export const DeleteStop = createIcon(
  "DeleteStop",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m12.243 3.757-8.487 8.48 8.48-8.486z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8 2C4.68 2 2 4.686 2 8a6 6 0 1 0 12 0c0-3.32-2.686-6-6-6"
    />
  </Svg>
);
