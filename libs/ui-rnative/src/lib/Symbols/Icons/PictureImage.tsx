import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * PictureImage icon component for React Native.
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
 * import { PictureImage } from '@ldls/ui-rnative/symbols';
 *
 * <PictureImage />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PictureImage size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={PictureImage} size="md">
 *   Click me
 * </Button>
 */
export const PictureImage = createIcon(
  "PictureImage",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1.498 6.5.648-.648a1.206 1.206 0 0 1 1.706 0L6 8.001m-2.5 2.5 3.15-3.148a1.206 1.206 0 0 1 1.705 0l1.97 1.97m.177-.822a2 2 0 0 1-2 2H3.498a2 2 0 0 1-2-2V3.499a2 2 0 0 1 2-2h5.002a2 2 0 0 1 2 2z"
    />
  </Svg>
);
