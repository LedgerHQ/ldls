import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * HatSchool icon component for React Native.
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
 * import { HatSchool } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <HatSchool />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <HatSchool size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={HatSchool} size="md">
 *   Click me
 * </Button>
 */
export const HatSchool = createIcon(
  "HatSchool",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.705 4.5v3.375M2.995 6.1v1.96c0 .47.235.915.63 1.175l.8.53c.95.63 2.187.63 3.137 0l.8-.535c.395-.265.63-.71.63-1.18V6.085m-4.14-4.04L1.76 3.76a.943.943 0 0 0 0 1.65l3.085 1.715a2.37 2.37 0 0 0 2.295 0l3.085-1.715a.949.949 0 0 0 0-1.654l-3.09-1.715c-.715-.4-1.585-.4-2.3 0z"
    />
  </Svg>
);
