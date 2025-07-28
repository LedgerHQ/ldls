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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.70003 9.03333C9.13336 9.98 7.90603 10.2933 6.95269 9.73333C5.99936 9.16667 5.68603 7.94 6.24603 6.98667C6.41269 6.69333 6.65269 6.45333 6.94603 6.28M11.9934 11.3267C10.84 12.1933 9.43269 12.6667 7.99269 12.66C5.59936 12.7 3.39269 11.3867 2.29003 9.26667H2.28669C1.88669 8.46 1.88669 7.52 2.28669 6.71333C2.83336 5.61333 3.71336 4.71333 4.80003 4.13333M13.6134 9.42C13.64 9.36667 13.6734 9.32 13.7 9.26667C14.0934 8.46 14.0934 7.52 13.7 6.71333C12.5934 4.58667 10.386 3.27333 7.9927 3.32C7.83936 3.32 7.69269 3.34 7.54603 3.34667M14 13.3333L2.66669 2"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
