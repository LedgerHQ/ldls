import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Folder icon component for React Native.
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
 * import { Folder } from '@ldls/ui-rnative/symbols';
 *
 * <Folder />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Folder size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Folder} size="md">
 *   Click me
 * </Button>
 */
export const Folder = createIcon(
  "Folder",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 5.99999V4.66665C14 3.92665 13.4 3.33332 12.6667 3.33332H7.16669M8.12669 5.25999L7.19336 3.39999C6.96669 2.94665 6.50003 2.65999 6.00003 2.65999H3.32003V2.65332C2.58003 2.65332 1.98669 3.24665 1.98669 3.98665V11.9867C1.98669 12.72 2.58003 13.32 3.32003 13.32H12.6534C13.3867 13.32 13.9867 12.72 13.9867 11.9867V5.98665H9.30669C8.80003 5.98665 8.33336 5.69999 8.11336 5.24665L8.12669 5.25999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
