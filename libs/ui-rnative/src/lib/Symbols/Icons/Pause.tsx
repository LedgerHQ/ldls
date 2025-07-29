import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Pause icon component for React Native.
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
 * import { Pause } from '@ldls/ui-rnative/symbols';
 *
 * <Pause />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Pause size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Pause} size="md">
 *   Click me
 * </Button>
 */
export const Pause = createIcon(
  "Pause",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.75861 3.89264L4.75861 11.8926M11.2414 3.89264L11.2414 11.8926"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </Svg>
);
