import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SettingsAlt icon component for React Native.
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
 * import { SettingsAlt } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <SettingsAlt />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SettingsAlt size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={SettingsAlt} size="md">
 *   Click me
 * </Button>
 */
export const SettingsAlt = createIcon(
  "SettingsAlt",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 2.5h1.5m-9 0h4m1 3.5h4m-9 0H3m6 3.5h1.5m-9 0h4m3.207-7.71c.39.39.39 1.02 0 1.41-.395.39-1.025.39-1.415 0a.993.993 0 0 1 0-1.415.987.987 0 0 1 1.41 0M4.705 5.293c.39.39.39 1.02 0 1.41-.395.39-1.025.39-1.415 0a.993.993 0 0 1 0-1.415.987.987 0 0 1 1.41 0m4.007 3.505c.39.39.39 1.02 0 1.41-.395.39-1.025.39-1.415 0a.993.993 0 0 1 0-1.415.987.987 0 0 1 1.41 0"
    />
  </Svg>
);
