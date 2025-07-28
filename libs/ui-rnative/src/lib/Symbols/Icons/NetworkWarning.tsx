import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * NetworkWarning icon component for React Native.
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
 * import { NetworkWarning } from '@ldls/ui-rnative/symbols';
 *
 * <NetworkWarning />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <NetworkWarning size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={NetworkWarning} size="md">
 *   Click me
 * </Button>
 */
export const NetworkWarning = createIcon(
  "NetworkWarning",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.6667 2H12.8533C13.48 2 13.9933 2.50667 13.9933 3.14V5.32667M5.33335 14H3.14001C2.50668 14 1.99335 13.4867 1.99335 12.8533V10.66M11.3 10.9467V9.72M11.3007 12.2933C11.2673 12.2933 11.234 12.32 11.2407 12.3533C11.2407 12.3867 11.2673 12.4133 11.3007 12.4133C11.334 12.4133 11.3607 12.38 11.3607 12.3467C11.3607 12.3133 11.3273 12.28 11.294 12.28M12.4633 8.4L14.49 12.0093C14.9833 12.896 14.3433 13.996 13.3233 13.996H9.25668C8.23668 13.996 7.59002 12.896 8.09002 12.0027L10.1167 8.38933C10.6233 7.48333 11.93 7.48333 12.4367 8.38933L12.4633 8.4ZM3.44001 3.35667C2.62668 3.46333 1.99868 4.15667 1.99868 5C1.99868 5.92 2.74535 6.66667 3.66535 6.66667H7.33201C8.06535 6.66667 8.66535 6.06667 8.66535 5.33333C8.66535 4.59333 8.06535 4 7.33201 4C7.33201 2.89533 6.43668 2 5.33201 2C4.45201 2 3.70801 2.56667 3.43868 3.35667H3.44001Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
