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
 * import { ExternalLink } from '@ldls/ui-rnative/symbols';
 *
 * <ExternalLink />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ExternalLink size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ExternalLink} size="md">
 *   Click me
 * </Button>
 */
export const ExternalLink = createIcon(
  "ExternalLink",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8 8L13 3M13 3V6.66667M13 3H9.33333M6 3H4.33333C3.59667 3 3 3.59667 3 4.33333V11.6667C3 12.4 3.59667 13 4.33333 13H11.6667C12.4 13 13 12.4 13 11.6667V10"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
