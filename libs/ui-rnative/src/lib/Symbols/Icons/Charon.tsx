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
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.713 10H8.667M12 12.667H4a2 2 0 0 1-2-2V5.333a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.334a2 2 0 0 1-2 2"
    />
  </Svg>
);
