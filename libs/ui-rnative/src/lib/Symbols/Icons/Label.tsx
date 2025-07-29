import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Label icon component for React Native.
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
 * import { Label } from '@ldls/ui-rnative/symbols';
 *
 * <Label />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Label size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Label} size="md">
 *   Click me
 * </Button>
 */
export const Label = createIcon(
  "Label",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54204 5.17262C5.64332 5.2739 5.64332 5.4381 5.54204 5.53938C5.44076 5.64065 5.27656 5.64065 5.17529 5.53938C5.07401 5.4381 5.07401 5.2739 5.17529 5.17262C5.27656 5.07135 5.44076 5.07135 5.54204 5.17262Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.82933 2.01666L6.72867 2C7.08267 1.99666 7.42333 2.13666 7.674 2.38666L13.61 8.32533C14.1307 8.846 14.1307 9.69066 13.61 10.2113L10.214 13.6093C9.69333 14.1307 8.848 14.1307 8.32733 13.6093L2.38667 7.66666C2.13933 7.41933 2 7.08333 2 6.73266V4.858C2 4.50733 2.13933 4.17133 2.38667 3.924L3.90667 2.40333C4.152 2.158 4.48333 2.01933 4.82933 2.01666Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
