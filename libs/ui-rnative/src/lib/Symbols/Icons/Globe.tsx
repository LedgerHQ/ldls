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
 * import { Globe } from '@ldls/ui-rnative/symbols';
 *
 * <Globe />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Globe size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Globe} size="md">
 *   Click me
 * </Button>
 */
export const Globe = createIcon(
  "Globe",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.34 6H13.66M2.34 10H13.66M8 2.06665C10.8888 2.06665 10.889 13.9333 8 13.9333C5.11103 13.9333 5.11119 2.06665 8 2.06665ZM8 2C11.32 2 14 4.67867 14 8C14 11.32 11.32 14 8 14C4.67867 14 2 11.32 2 8C2 4.67867 4.67867 2 8 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
