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
      d="M7.88662 9.99999L11.22 13.3333C11.7666 13.88 12.6666 13.88 13.22 13.3333C13.7666 12.78 13.7666 11.88 13.22 11.3333L9.88662 7.99999M4.55995 4.66666L6.89329 6.99999M13.94 3.89332C13.9533 3.90666 13.9666 3.92666 13.9733 3.94666C14.2866 4.98666 14.04 6.16666 13.2133 6.98666C12.3733 7.81999 11.1866 8.05932 10.1333 7.72666L4.56862 13.2867C4.02195 13.8267 3.14195 13.8667 2.58195 13.3467C1.98862 12.7933 1.97529 11.8733 2.54195 11.3067L8.12862 5.71332C7.79529 4.65999 8.03529 3.46666 8.86862 2.63332C9.68862 1.80799 10.8686 1.55999 11.9086 1.87332C11.9286 1.87999 11.9486 1.88666 11.962 1.90666L12.0686 2.01332C12.1153 2.05999 12.1153 2.14666 12.0686 2.19999L10.3066 3.95332L11.8533 5.49999L13.6066 3.73999C13.6533 3.68666 13.74 3.68666 13.7933 3.73999L13.9 3.84666L13.94 3.89332ZM1.95329 2.85999L2.39995 4.20666C2.48662 4.47332 2.73995 4.65999 3.02662 4.65999H4.54595V3.14066C4.54595 2.85399 4.35929 2.59399 4.08595 2.50732L2.73262 2.05399C2.61262 2.01399 2.47929 2.04066 2.38595 2.13466L2.00595 2.50799C1.91262 2.59466 1.87929 2.72799 1.92529 2.84799L1.95329 2.85999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
