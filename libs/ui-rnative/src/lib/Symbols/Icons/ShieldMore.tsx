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
      d="M8.11796 7.54868C8.17796 7.60868 8.17796 7.71534 8.11796 7.78201C8.05129 7.84201 7.94463 7.84201 7.87796 7.78201C7.81129 7.71534 7.81129 7.60868 7.87796 7.54201C7.93796 7.47534 8.04463 7.47534 8.11129 7.54201M10.78 7.54868C10.84 7.60868 10.84 7.71534 10.78 7.78201C10.7133 7.84201 10.6066 7.84201 10.54 7.78201C10.4733 7.71534 10.4733 7.60868 10.54 7.54201C10.6 7.47534 10.7066 7.47534 10.7733 7.54201M5.45129 7.54868C5.51129 7.60868 5.51129 7.71534 5.45129 7.78201C5.38463 7.84201 5.27796 7.84201 5.21129 7.78201C5.14463 7.71534 5.14463 7.60868 5.21129 7.54201C5.27129 7.47534 5.37796 7.47534 5.44463 7.54201M13.3333 7.45467C13.3333 10.482 11.0533 13.3127 7.99996 14C4.94196 13.3067 2.66663 10.48 2.66663 7.45467V4.82134C2.66663 4.27467 2.99329 3.78801 3.43329 3.60801L6.76663 2.24401C7.57329 1.91067 8.41329 1.91067 9.16663 2.21734L12.5 3.57734C13 3.77734 13.3266 4.26401 13.3266 4.81134V7.43801L13.3333 7.45467Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
