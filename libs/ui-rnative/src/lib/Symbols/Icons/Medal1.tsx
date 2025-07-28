import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Medal1 icon component for React Native.
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
 * import { Medal1 } from '@ldls/ui-rnative/symbols';
 *
 * <Medal1 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Medal1 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Medal1} size="md">
 *   Click me
 * </Button>
 */
export const Medal1 = createIcon(
  "Medal1",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.66671 9.33337V13.9934C4.66671 14.1734 4.81337 14.32 5.00004 14.32C5.04671 14.3134 5.09337 14.3067 5.13337 14.2867L7.99337 12.98L10.8534 14.28C11.02 14.3534 11.2134 14.28 11.2934 14.1134C11.3067 14.0667 11.32 14.02 11.32 13.9734V9.23337M8.00004 1.33337C6.76236 1.33337 5.57538 1.82504 4.70021 2.70021C3.82504 3.57538 3.33337 4.76236 3.33337 6.00004C3.33337 7.23772 3.82504 8.4247 4.70021 9.29987C5.57538 10.175 6.76236 10.6667 8.00004 10.6667C9.23772 10.6667 10.4247 10.175 11.2999 9.29987C12.175 8.4247 12.6667 7.23772 12.6667 6.00004C12.6667 4.76236 12.175 3.57538 11.2999 2.70021C10.4247 1.82504 9.23772 1.33337 8.00004 1.33337Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
