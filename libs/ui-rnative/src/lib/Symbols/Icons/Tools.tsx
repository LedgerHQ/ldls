import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Tools icon component for React Native.
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
 * import { Tools } from '@ldls/ui-rnative/symbols';
 *
 * <Tools />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Tools size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Tools} size="md">
 *   Click me
 * </Button>
 */
export const Tools = createIcon(
  "Tools",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.88662 10.0001L11.22 13.3334C11.7666 13.8801 12.6666 13.8801 13.22 13.3334C13.7666 12.7801 13.7666 11.8801 13.22 11.3334L9.88662 8.00005M4.55995 4.66672L6.89329 7.00005M13.94 3.89338C13.9533 3.90672 13.9666 3.92672 13.9733 3.94672C14.2866 4.98672 14.04 6.16672 13.2133 6.98672C12.3733 7.82005 11.1866 8.05938 10.1333 7.72672L4.56862 13.2867C4.02195 13.8267 3.14195 13.8667 2.58195 13.3467C1.98862 12.7934 1.97529 11.8734 2.54195 11.3067L8.12862 5.71338C7.79529 4.66005 8.03529 3.46672 8.86862 2.63338C9.68862 1.80805 10.8686 1.56005 11.9086 1.87338C11.9286 1.88005 11.9486 1.88672 11.962 1.90672L12.0686 2.01338C12.1153 2.06005 12.1153 2.14672 12.0686 2.20005L10.3066 3.95338L11.8533 5.50005L13.6066 3.74005C13.6533 3.68672 13.74 3.68672 13.7933 3.74005L13.9 3.84672L13.94 3.89338ZM1.95329 2.86005L2.39995 4.20672C2.48662 4.47338 2.73995 4.66005 3.02662 4.66005H4.54595V3.14072C4.54595 2.85405 4.35929 2.59405 4.08595 2.50738L2.73262 2.05405C2.61262 2.01405 2.47929 2.04072 2.38595 2.13472L2.00595 2.50805C1.91262 2.59472 1.87929 2.72805 1.92529 2.84805L1.95329 2.86005Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
