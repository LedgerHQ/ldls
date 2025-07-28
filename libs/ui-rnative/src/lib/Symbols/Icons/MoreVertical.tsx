import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MoreVertical icon component for React Native.
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
 * import { MoreVertical } from '@ldls/ui-rnative/symbols';
 *
 * <MoreVertical />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MoreVertical size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MoreVertical} size="md">
 *   Click me
 * </Button>
 */
export const MoreVertical = createIcon(
  "MoreVertical",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99331 11.6666C7.80664 11.6666 7.65997 11.8133 7.65997 12C7.65997 12.18 7.80664 12.3333 7.99331 12.3333C8.17331 12.3333 8.32664 12.18 8.32664 12C8.32664 11.8133 8.17331 11.6666 7.98664 11.6666M7.99331 7.66663C7.80664 7.66663 7.65997 7.81329 7.65997 7.99996C7.65997 8.17996 7.80664 8.33329 7.99331 8.33329C8.17331 8.33329 8.32664 8.17996 8.32664 7.99996C8.32664 7.81329 8.17331 7.66663 7.98664 7.66663M7.99331 3.66663C7.80664 3.66663 7.65997 3.81329 7.65997 3.99996C7.65997 4.17996 7.80664 4.33329 7.99331 4.33329C8.17331 4.33329 8.32664 4.17996 8.32664 3.99996C8.32664 3.81329 8.17331 3.66663 7.98664 3.66663"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
