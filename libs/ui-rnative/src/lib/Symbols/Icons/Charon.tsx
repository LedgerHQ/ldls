import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Charon icon component for React Native.
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
 * import { Charon } from '@ldls/ui-rnative/symbols';
 *
 * <Charon />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Charon size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Charon} size="md">
 *   Click me
 * </Button>
 */
export const Charon = createIcon(
  "Charon",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.7133 9.99998H8.66667M12 12.6666H4C2.89533 12.6666 2 11.7713 2 10.6666V5.33331C2 4.22865 2.89533 3.33331 4 3.33331H12C13.1047 3.33331 14 4.22865 14 5.33331V10.6666C14 11.7713 13.1047 12.6666 12 12.6666Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
