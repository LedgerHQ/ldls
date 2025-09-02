import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Apps icon component for React Native.
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
 * import { Apps } from '@ledgerhq/ui-rnative/symbols';
 *
 * <Apps />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Apps size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={Apps} size="md">
 *   Click me
 * </Button>
 */
export const Apps = createIcon(
  "Apps",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.667 10v3.333m1.666-1.666H10m-4.667-5h-2C2.597 6.667 2 6.067 2 5.333v-2C2 2.597 2.597 2 3.333 2h2c.734 0 1.334.597 1.334 1.333v2c0 .734-.6 1.334-1.334 1.334m7.334 0h-2c-.74 0-1.334-.6-1.334-1.334v-2A1.33 1.33 0 0 1 10.667 2h2C13.4 2 14 2.597 14 3.333v2c0 .734-.6 1.334-1.333 1.334M5.333 14h-2C2.597 14 2 13.4 2 12.667v-2c0-.74.597-1.334 1.333-1.334h2c.734 0 1.334.594 1.334 1.334v2c0 .733-.6 1.333-1.334 1.333"
    />
  </Svg>
);
