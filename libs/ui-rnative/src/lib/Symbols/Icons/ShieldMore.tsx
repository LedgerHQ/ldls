import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldMore icon component for React Native.
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
 * import { ShieldMore } from '@ldls/ui-rnative/symbols';
 *
 * <ShieldMore />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldMore size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ShieldMore} size="md">
 *   Click me
 * </Button>
 */
export const ShieldMore = createIcon(
  "ShieldMore",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.11796 7.54871C8.17796 7.60871 8.17796 7.71537 8.11796 7.78204C8.05129 7.84204 7.94463 7.84204 7.87796 7.78204C7.81129 7.71537 7.81129 7.60871 7.87796 7.54204C7.93796 7.47537 8.04463 7.47537 8.11129 7.54204M10.78 7.54871C10.84 7.60871 10.84 7.71537 10.78 7.78204C10.7133 7.84204 10.6066 7.84204 10.54 7.78204C10.4733 7.71537 10.4733 7.60871 10.54 7.54204C10.6 7.47537 10.7066 7.47537 10.7733 7.54204M5.45129 7.54871C5.51129 7.60871 5.51129 7.71537 5.45129 7.78204C5.38463 7.84204 5.27796 7.84204 5.21129 7.78204C5.14463 7.71537 5.14463 7.60871 5.21129 7.54204C5.27129 7.47537 5.37796 7.47537 5.44463 7.54204M13.3333 7.45471C13.3333 10.482 11.0533 13.3127 7.99996 14C4.94196 13.3067 2.66663 10.48 2.66663 7.45471V4.82137C2.66663 4.2747 2.99329 3.78804 3.43329 3.60804L6.76663 2.24404C7.57329 1.9107 8.41329 1.9107 9.16663 2.21737L12.5 3.57737C13 3.77737 13.3266 4.26404 13.3266 4.81137V7.43804L13.3333 7.45471Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
