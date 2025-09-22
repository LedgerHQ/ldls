import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Discord icon component for React Native.
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
 * import { Discord } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Discord />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Discord size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Discord} size="md">
 *   Click me
 * </Button>
 */
export const Discord = createIcon(
  "Discord",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M9.47 3.086A8.8 8.8 0 0 0 7.409 2.5a5 5 0 0 0-.264.496 8.3 8.3 0 0 0-2.29 0A5 5 0 0 0 4.59 2.5a8.8 8.8 0 0 0-2.065.588C1.22 4.872.865 6.612 1.042 8.327c.765.522 1.62.918 2.53 1.173q.309-.382.543-.807a5.6 5.6 0 0 1-.854-.376q.108-.073.21-.146A6.4 6.4 0 0 0 6 8.693c.874 0 1.738-.178 2.53-.522q.102.078.209.146a5.6 5.6 0 0 1-.855.377q.233.424.542.806a8.6 8.6 0 0 0 2.531-1.172c.208-1.99-.354-3.713-1.486-5.242M4.34 7.272a.915.915 0 0 1-.9-.922c0-.508.393-.925.898-.925.506 0 .91.417.902.925-.009.509-.398.922-.9.922m3.322 0a.913.913 0 0 1-.9-.922c0-.508.394-.925.9-.925.507 0 .908.417.9.925-.01.509-.397.922-.9.922"
    />
  </Svg>
);
