import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * NetworkWarning icon component for React Native.
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
 * import { NetworkWarning } from '@ldls/ui-rnative/symbols';
 *
 * <NetworkWarning />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <NetworkWarning size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={NetworkWarning} size="md">
 *   Click me
 * </Button>
 */
export const NetworkWarning = createIcon(
  "NetworkWarning",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 1.5h1.64c.47 0 .855.38.855.855v1.64M4 10.5H2.355a.86.86 0 0 1-.86-.86V7.995m6.98.215v-.92m0 1.93c-.024 0-.05.02-.044.045 0 .025.02.045.045.045s.044-.025.044-.05a.054.054 0 0 0-.05-.05m.877-2.91 1.52 2.707c.37.665-.11 1.49-.875 1.49h-3.05c-.764 0-1.25-.825-.875-1.495l1.52-2.71a.997.997 0 0 1 1.74 0zM2.58 2.518c-.61.08-1.081.6-1.081 1.232 0 .69.56 1.25 1.25 1.25h2.75a1 1 0 1 0 0-2 1.5 1.5 0 0 0-2.92-.482z"
    />
  </Svg>
);
