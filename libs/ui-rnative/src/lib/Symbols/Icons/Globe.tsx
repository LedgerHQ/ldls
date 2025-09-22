import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Globe icon component for React Native.
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
 * import { Globe } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Globe />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Globe size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Globe} size="md">
 *   Click me
 * </Button>
 */
export const Globe = createIcon(
  "Globe",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.755 4.5h8.49m-8.49 3h8.49M6 1.55c2.167 0 2.167 8.9 0 8.9s-2.167-8.9 0-8.9m0-.05c2.49 0 4.5 2.009 4.5 4.5S8.49 10.5 6 10.5 1.5 8.49 1.5 6 3.509 1.5 6 1.5"
    />
  </Svg>
);
