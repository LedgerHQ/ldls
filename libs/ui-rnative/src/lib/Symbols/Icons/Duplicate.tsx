import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Duplicate icon component for React Native.
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
 * import { Duplicate } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Duplicate />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Duplicate size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Duplicate} size="md">
 *   Click me
 * </Button>
 */
export const Duplicate = createIcon(
  "Duplicate",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 3v-.5c0-.55-.45-1-1-1h-4a1 1 0 0 0-1 1v4c0 .555.445 1 1 1H3m4.5-1.25v2.5M6.25 7.5h2.5m-4.25-2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"
    />
  </Svg>
);
