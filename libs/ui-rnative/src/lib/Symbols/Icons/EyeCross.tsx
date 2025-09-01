import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * EyeCross icon component for React Native.
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
 * import { EyeCross } from '@ldls/ui-rnative/symbols';
 *
 * <EyeCross />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <EyeCross size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={EyeCross} size="md">
 *   Click me
 * </Button>
 */
export const EyeCross = createIcon(
  "EyeCross",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.275 6.775a1.51 1.51 0 0 1-2.06.525 1.507 1.507 0 0 1-.53-2.06c.124-.22.304-.4.524-.53m3.786 3.785a4.97 4.97 0 0 1-3 1A4.73 4.73 0 0 1 1.716 6.95h-.002a2.15 2.15 0 0 1 0-1.915c.41-.825 1.07-1.5 1.885-1.935m6.61 3.965c.02-.04.045-.075.065-.115a2.18 2.18 0 0 0 0-1.915 4.72 4.72 0 0 0-4.28-2.545c-.116 0-.226.015-.336.02M10.5 10 2 1.5"
    />
  </Svg>
);
