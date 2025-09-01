import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Stax icon component for React Native.
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
 * import { Stax } from '@ldls/ui-rnative/symbols';
 *
 * <Stax />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Stax size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Stax} size="md">
 *   Click me
 * </Button>
 */
export const Stax = createIcon(
  "Stax",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      d="M9 3.5h.35a.1.1 0 0 1 .1.1v1.3a.1.1 0 0 1-.1.1H9m-5.75 5.5H8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25Z"
    />
  </Svg>
);
