import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ExternalLink icon component for React Native.
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
 * import { ExternalLink } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ExternalLink />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ExternalLink size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={ExternalLink} size="md">
 *   Click me
 * </Button>
 */
export const ExternalLink = createIcon(
  "ExternalLink",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 6 3.75-3.75m0 0V5m0-2.75H7m-2.5 0H3.25a1 1 0 0 0-1 1v5.5c0 .55.447 1 1 1h5.5c.55 0 1-.45 1-1V7.5"
    />
  </Svg>
);
