import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Information icon component for React Native.
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
 * import { Information } from '@ldls/ui-rnative/symbols';
 *
 * <Information />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Information size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Information} size="md">
 *   Click me
 * </Button>
 */
export const Information = createIcon(
  "Information",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7.99333 5.33333C7.9 5.33333 7.82667 5.40667 7.82667 5.5C7.82667 5.58667 7.9 5.66667 7.99333 5.66667C8.08 5.66667 8.16 5.58667 8.16 5.5C8.16 5.40667 8.08 5.33333 7.98667 5.33333M8 8V11.3333M8 14C4.68 14 2 11.314 2 8C2 4.68 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
