import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Tablet icon component for React Native.
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
 * import { Tablet } from '@ldls/ui-rnative/symbols';
 *
 * <Tablet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Tablet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Tablet} size="md">
 *   Click me
 * </Button>
 */
export const Tablet = createIcon(
  "Tablet",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99937 11.9167C7.95271 11.9167 7.91604 11.95 7.91271 12C7.91271 12.04 7.94604 12.0833 7.99604 12.0833C8.03604 12.0833 8.07937 12.0433 8.07937 12C8.07937 11.9533 8.03937 11.9167 7.99271 11.9167M12.6667 12.5V3.5C12.6667 2.66667 11.9934 2 11.1667 2H4.83337C4.00004 2 3.33337 2.66667 3.33337 3.5V12.5C3.33337 13.3267 4.00004 14 4.83337 14H11.1667C11.9934 14 12.6667 13.3267 12.6667 12.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
