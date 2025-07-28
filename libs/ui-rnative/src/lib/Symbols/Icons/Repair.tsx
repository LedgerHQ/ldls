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
      d="M7.50668 6.40128L2.42668 11.4746C1.84668 12.0479 1.84668 12.9813 2.42002 13.5613H2.41935C2.99268 14.1346 3.92602 14.1346 4.50602 13.5613L9.57935 8.48128V8.48062C11.306 9.06728 13.1927 8.14728 13.786 6.41395C13.7927 6.38728 13.7993 6.36062 13.806 6.33395V6.33328C13.946 5.89995 13.9927 5.44662 13.9527 4.99995C13.8994 4.63328 13.566 4.37995 13.1993 4.42662C13.0527 4.43995 12.9127 4.51328 12.8127 4.61328L11.606 5.81328C11.4727 5.93995 11.2593 5.93995 11.1327 5.81328C11.126 5.80662 11.126 5.80662 11.126 5.80662L10.106 4.78662C9.97268 4.65328 9.97268 4.43995 10.226 4.18662L11.2993 3.10662C11.5593 2.84662 11.5593 2.42662 11.306 2.15995C11.1993 2.05328 11.066 1.98662 10.9193 1.96662C10.466 1.91995 10.0127 1.96662 9.58602 2.11328V2.10662C7.83268 2.65328 6.86602 4.51328 7.41268 6.25995C7.41935 6.27995 7.42602 6.30662 7.43268 6.33328L7.50668 6.40128Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
