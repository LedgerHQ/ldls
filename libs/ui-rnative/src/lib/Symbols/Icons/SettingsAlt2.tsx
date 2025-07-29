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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 4.66667H11.96M8.62667 4.66667H2M11.4734 3.48666C12.12 4.13332 12.12 5.18666 11.4734 5.83999C10.82 6.48666 9.76671 6.48666 9.11337 5.83999C8.46004 5.18666 8.46004 4.13332 9.11337 3.47999C9.76004 2.82666 10.8134 2.82666 11.4667 3.47999M7.37337 11.3333H14M2 11.3333H4.04M6.87995 10.1633C7.52661 10.81 7.52661 11.8633 6.87995 12.5167C6.22661 13.1633 5.17328 13.1633 4.51995 12.5167C3.86661 11.8633 3.86661 10.81 4.51995 10.1567C5.16661 9.50333 6.21995 9.50333 6.87328 10.1567"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
