import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Legal icon component for React Native.
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
 * import { Legal } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Legal />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Legal size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Legal} size="md">
 *   Click me
 * </Button>
 */
export const Legal = createIcon(
  "Legal",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5h-2a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h6a1 1 0 0 1 1 1v2m-6-.5h3m-3 2h1m2 4.5h4m-3.5 0V8.21m1.5 2.29V8.21M10 10.5V8.21m-3.5 0h4v-.895l-2-.82-2 .815z"
    />
  </Svg>
);
