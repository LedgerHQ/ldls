import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * PenEdit icon component for React Native.
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
 * import { PenEdit } from '@ldls/ui-rnative/symbols';
 *
 * <PenEdit />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PenEdit size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={PenEdit} size="md">
 *   Click me
 * </Button>
 */
export const PenEdit = createIcon(
  "PenEdit",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.16669 4.77335L11.2267 6.83335M3.52669 10.4067L10.4067 3.52001C10.6667 3.26001 11.0867 3.26001 11.3467 3.52001L12.46 4.63335C12.72 4.89335 12.72 5.31335 12.46 5.57335L5.57335 12.4593C5.44669 12.5793 5.27335 12.6527 5.10002 12.6527H3.31335V10.866C3.31335 10.686 3.38002 10.5193 3.50669 10.3927L3.52669 10.4067Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
