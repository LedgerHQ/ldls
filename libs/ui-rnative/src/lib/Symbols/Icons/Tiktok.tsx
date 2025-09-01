import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Tiktok icon component for React Native.
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
 * import { Tiktok } from '@ldls/ui-rnative/symbols';
 *
 * <Tiktok />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Tiktok size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Tiktok} size="md">
 *   Click me
 * </Button>
 */
export const Tiktok = createIcon(
  "Tiktok",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M9.156 2.855A2.52 2.52 0 0 1 8.032.75H6.257l-.003 7.235c-.03.81-.685 1.46-1.488 1.46a1.46 1.46 0 0 1-.692-.174c-.475-.255-.8-.761-.8-1.344 0-.836.67-1.517 1.492-1.517q.23.002.44.07V4.637a3 3 0 0 0-.44-.032c-1.8 0-3.266 1.49-3.266 3.322 0 1.125.552 2.12 1.394 2.72a3.2 3.2 0 0 0 1.872.603c1.8 0 3.266-1.49 3.266-3.323V4.26a4.17 4.17 0 0 0 2.468.808V3.26c-.496 0-.957-.15-1.344-.406"
    />
  </Svg>
);
