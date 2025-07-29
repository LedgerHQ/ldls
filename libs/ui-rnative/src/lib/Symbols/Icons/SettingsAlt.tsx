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
 * import { SettingsAlt } from '@ldls/ui-rnative/symbols';
 *
 * <SettingsAlt />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SettingsAlt size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SettingsAlt} size="md">
 *   Click me
 * </Button>
 */
export const SettingsAlt = createIcon(
  "SettingsAlt",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12 3.33332H14M2 3.33332H7.33333M8.66667 7.99999H14M2 7.99999H4M12 12.6667H14M2 12.6667H7.33333M11.6093 2.38665C12.1293 2.90665 12.1293 3.74665 11.6093 4.26665C11.0827 4.78665 10.2427 4.78665 9.72267 4.26665C9.196 3.73999 9.196 2.89999 9.72267 2.37999C10.2427 1.85332 11.0827 1.85332 11.6027 2.37999M6.27333 7.05732C6.79333 7.57732 6.79333 8.41732 6.27333 8.93732C5.74667 9.45732 4.90667 9.45732 4.38667 8.93732C3.86 8.41065 3.86 7.57065 4.38667 7.05065C4.90667 6.52399 5.74667 6.52399 6.26667 7.05065M11.6093 11.724C12.1293 12.244 12.1293 13.084 11.6093 13.604C11.0827 14.124 10.2427 14.124 9.72267 13.604C9.196 13.0773 9.196 12.2373 9.72267 11.7173C10.2427 11.1907 11.0827 11.1907 11.6027 11.7173"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
