import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Tablet icon component for React Native.
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
 * import { Tablet } from '@ldls/ui-rnative/symbols';
 *
 * <Tablet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Tablet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Tablet} size="md">
 *   Click me
 * </Button>
 */
export const Tablet = createIcon(
  "Tablet",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8.938A.064.064 0 0 0 5.934 9c0 .03.026.063.063.063.03 0 .063-.03.063-.063a.064.064 0 0 0-.065-.062m3.505.437v-6.75C9.5 2 8.995 1.5 8.375 1.5h-4.75C3 1.5 2.5 2 2.5 2.625v6.75c0 .62.5 1.125 1.125 1.125h4.75c.62 0 1.125-.505 1.125-1.125"
    />
  </Svg>
);
