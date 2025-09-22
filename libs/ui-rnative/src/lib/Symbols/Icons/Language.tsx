import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Language icon component for React Native.
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
 * import { Language } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Language />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Language size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Language} size="md">
 *   Click me
 * </Button>
 */
export const Language = createIcon(
  "Language",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 2v1.5m6.5 6.5-2-4.5-2 4.5m.445-1h3.11M1.75 7.5c2.047-.165 3.838-1.955 4-4h-4m4 4C4.47 7.395 3.351 6.275 3.25 5"
    />
  </Svg>
);
