import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Switch2 icon component for React Native.
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
 * import { Switch2 } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Switch2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Switch2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Switch2} size="md">
 *   Click me
 * </Button>
 */
export const Switch2 = createIcon(
  "Switch2",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.705 5.29c.39.39.39 1.02 0 1.41-.395.39-1.025.39-1.415 0a.993.993 0 0 1 0-1.415.987.987 0 0 1 1.41 0M4 3.5h4a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1 0-5"
    />
  </Svg>
);
