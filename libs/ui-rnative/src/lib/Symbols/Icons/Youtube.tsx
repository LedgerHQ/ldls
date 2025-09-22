import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Youtube icon component for React Native.
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
 * import { Youtube } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Youtube />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Youtube size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Youtube} size="md">
 *   Click me
 * </Button>
 */
export const Youtube = createIcon(
  "Youtube",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.103 2.474c.452.123.807.486.928.947.219.835.219 2.579.219 2.579s0 1.744-.22 2.579a1.33 1.33 0 0 1-.928.947C9.284 9.75 6 9.75 6 9.75s-3.284 0-4.102-.224a1.33 1.33 0 0 1-.928-.947C.75 7.744.75 6 .75 6s0-1.744.22-2.579c.12-.461.476-.824.928-.947C2.716 2.25 6 2.25 6 2.25s3.284 0 4.103.224M7.679 6l-2.73-1.607v3.214z"
      clipRule="evenodd"
    />
  </Svg>
);
