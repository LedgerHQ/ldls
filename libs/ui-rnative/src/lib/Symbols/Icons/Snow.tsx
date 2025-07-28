import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Snow icon component for React Native.
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
 * import { Snow } from '@ldls/ui-rnative/symbols';
 *
 * <Snow />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Snow size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Snow} size="md">
 *   Click me
 * </Button>
 */
export const Snow = createIcon(
  "Snow",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99996 2V14M9.44529 2.94733L7.99863 4.38733L6.55196 2.94067M13.3333 4.92L2.66663 11.08M13.0933 6.72533L11.1133 6.192L11.64 4.212M2.90196 9.27333L4.87529 9.8L4.34196 11.7733M2.66663 4.92L13.3333 11.08M2.90196 6.72533L4.87529 6.192L4.34196 4.212M13.0933 9.27333L11.1133 9.8L11.64 11.7733M6.55463 13.0467L7.99463 11.6L9.43463 13.04"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
