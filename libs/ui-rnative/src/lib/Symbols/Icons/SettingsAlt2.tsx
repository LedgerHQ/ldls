import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SettingsAlt2 icon component for React Native.
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
 * import { SettingsAlt2 } from '@ldls/ui-rnative/symbols';
 *
 * <SettingsAlt2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SettingsAlt2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SettingsAlt2} size="md">
 *   Click me
 * </Button>
 */
export const SettingsAlt2 = createIcon(
  "SettingsAlt2",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 3.5H8.97m-2.5 0H1.5m7.105-.885a1.25 1.25 0 0 1 0 1.765c-.49.485-1.28.485-1.77 0a1.25 1.25 0 0 1 0-1.77 1.243 1.243 0 0 1 1.765 0M5.53 8.5h4.97m-9 0h1.53m2.13-.878a1.25 1.25 0 0 1 0 1.765c-.49.486-1.28.486-1.77 0a1.25 1.25 0 0 1 0-1.77 1.243 1.243 0 0 1 1.765 0"
    />
  </Svg>
);
