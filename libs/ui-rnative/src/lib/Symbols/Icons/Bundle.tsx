import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bundle icon component for React Native.
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
 * import { Bundle } from '@ldls/ui-rnative/symbols';
 *
 * <Bundle />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bundle size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Bundle} size="md">
 *   Click me
 * </Button>
 */
export const Bundle = createIcon(
  "Bundle",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.59998 3.20001H10.4C10.8418 3.20001 11.2 3.55818 11.2 4.00001V12C11.2 12.4418 10.8418 12.8 10.4 12.8H9.59998M13.2 3.20001H14C14.4418 3.20001 14.8 3.55818 14.8 4.00001V12C14.8 12.4418 14.4418 12.8 14 12.8H13.2M2.39998 12.8H6.79998C7.2418 12.8 7.59998 12.4418 7.59998 12V4.00001C7.59998 3.55818 7.2418 3.20001 6.79998 3.20001H2.39998C1.95815 3.20001 1.59998 3.55818 1.59998 4.00001V12C1.59998 12.4418 1.95815 12.8 2.39998 12.8Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </Svg>
);
