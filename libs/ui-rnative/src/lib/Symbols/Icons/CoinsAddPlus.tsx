import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsAddPlus icon component for React Native.
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
 * import { CoinsAddPlus } from '@ldls/ui-rnative/symbols';
 *
 * <CoinsAddPlus />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsAddPlus size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinsAddPlus} size="md">
 *   Click me
 * </Button>
 */
export const CoinsAddPlus = createIcon(
  "CoinsAddPlus",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 9c-1.38 0-2.5-.45-2.5-1V4m0 0c0-.265.263-.52.732-.707C2.702 3.105 3.337 3 4 3s1.299.105 1.768.293c.469.187.732.442.732.707m-5 0c0 .265.263.52.732.707C2.702 4.895 3.337 5 4 5s1.299-.105 1.768-.293C6.237 4.52 6.5 4.265 6.5 4m-1 3.5c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1m-5 0v2c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1v-2m-5 0c0-.555 1.115-1 2.5-1 1.38 0 2.5.445 2.5 1M6.5 4v1.25m2-2.75h2m-1 1v-2M4 7c-1.38 0-2.5-.45-2.5-1"
    />
  </Svg>
);
