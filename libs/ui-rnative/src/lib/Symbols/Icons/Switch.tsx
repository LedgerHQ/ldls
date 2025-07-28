import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Switch icon component for React Native.
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
 * import { Switch } from '@ldls/ui-rnative/symbols';
 *
 * <Switch />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Switch size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Switch} size="md">
 *   Click me
 * </Button>
 */
export const Switch = createIcon(
  "Switch",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11 11C9.34 11 8 9.65333 8 8C8 6.34 9.34 5 11 5M11 11C12.6533 11 14 9.65333 14 8C14 6.34 12.6533 5 11 5M11 11H5C3.34 11 2 9.65333 2 8C2 6.34 3.34 5 5 5H11"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
