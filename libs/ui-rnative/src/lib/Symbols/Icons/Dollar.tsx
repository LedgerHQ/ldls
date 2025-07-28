import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Dollar icon component for React Native.
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
 * import { Dollar } from '@ldls/ui-rnative/symbols';
 *
 * <Dollar />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Dollar size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Dollar} size="md">
 *   Click me
 * </Button>
 */
export const Dollar = createIcon(
  "Dollar",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00002 5.00003V5.6667M8.00002 11V10.3334M6.56669 9.50003C6.82669 10.04 7.39269 10.3667 7.99269 10.3334C8.71935 10.4134 9.38602 9.89337 9.49269 9.1667C9.49269 8.66003 9.13269 8.2267 8.63935 8.1267L7.33269 7.86003C6.83269 7.76003 6.47935 7.3267 6.47935 6.82003C6.57935 6.0867 7.24602 5.5667 7.97935 5.65337C8.57935 5.61337 9.13935 5.94003 9.40602 6.4867M8.00002 1.66003C6.32032 1.66003 4.70941 2.32729 3.52168 3.51502C2.33395 4.70276 1.66669 6.31366 1.66669 7.99337C1.66669 9.67307 2.33395 11.284 3.52168 12.4717C4.70941 13.6594 6.32032 14.3267 8.00002 14.3267C8.83173 14.3267 9.65529 14.1629 10.4237 13.8446C11.1921 13.5263 11.8903 13.0598 12.4784 12.4717C13.0665 11.8836 13.533 11.1854 13.8513 10.417C14.1695 9.64863 14.3334 8.82507 14.3334 7.99337C14.3334 7.16166 14.1695 6.3381 13.8513 5.56971C13.533 4.80131 13.0665 4.10313 12.4784 3.51502C11.8903 2.92692 11.1921 2.46041 10.4237 2.14213C9.65529 1.82385 8.83173 1.66003 8.00002 1.66003Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
