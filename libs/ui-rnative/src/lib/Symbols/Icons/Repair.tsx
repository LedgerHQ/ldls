import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Repair icon component for React Native.
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
 * import { Repair } from '@ldls/ui-rnative/symbols';
 *
 * <Repair />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Repair size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Repair} size="md">
 *   Click me
 * </Button>
 */
export const Repair = createIcon(
  "Repair",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.50668 6.40134L2.42668 11.4747C1.84668 12.048 1.84668 12.9813 2.42002 13.5613H2.41935C2.99268 14.1347 3.92602 14.1347 4.50602 13.5613L9.57935 8.48134V8.48068C11.306 9.06734 13.1927 8.14734 13.786 6.41401C13.7927 6.38734 13.7993 6.36068 13.806 6.33401V6.33334C13.946 5.90001 13.9927 5.44668 13.9527 5.00001C13.8994 4.63334 13.566 4.38001 13.1993 4.42668C13.0527 4.44001 12.9127 4.51334 12.8127 4.61334L11.606 5.81334C11.4727 5.94001 11.2593 5.94001 11.1327 5.81334C11.126 5.80668 11.126 5.80668 11.126 5.80668L10.106 4.78668C9.97268 4.65334 9.97268 4.44001 10.226 4.18668L11.2993 3.10668C11.5593 2.84668 11.5593 2.42668 11.306 2.16001C11.1993 2.05334 11.066 1.98668 10.9193 1.96668C10.466 1.92001 10.0127 1.96668 9.58602 2.11334V2.10668C7.83268 2.65334 6.86602 4.51334 7.41268 6.26001C7.41935 6.28001 7.42602 6.30668 7.43268 6.33334L7.50668 6.40134Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
