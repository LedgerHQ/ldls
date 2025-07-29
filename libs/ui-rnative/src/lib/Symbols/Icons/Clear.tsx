import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Clear icon component for React Native.
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
 * import { Clear } from '@ldls/ui-rnative/symbols';
 *
 * <Clear />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Clear size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Clear} size="md">
 *   Click me
 * </Button>
 */
export const Clear = createIcon(
  "Clear",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.66672 14.6666V13.3333M10.3334 14.6666V13.3333M8.00006 14.6666V13.3333M11.1734 14.6666H4.82006C4.08006 14.6666 3.48006 14.0666 3.48006 13.3333C3.47339 13.28 3.48006 13.2333 3.48672 13.18L3.72006 11.0326C3.86672 9.67931 5.00672 8.65931 6.36672 8.66065H9.59339C10.9467 8.65398 12.0934 9.68065 12.2467 11.0326L12.4801 13.18C12.5601 13.9066 12.0334 14.5666 11.3001 14.6466C11.2467 14.6466 11.1934 14.6533 11.1467 14.6533L11.1734 14.6666ZM8.00006 1.33331C8.54672 1.33331 9.00006 1.77998 9.00006 2.33331V6.33331C9.00006 6.51331 8.84672 6.66665 8.66672 6.66665H7.33339C7.14672 6.66665 7.00006 6.51331 7.00006 6.33331V2.33331C7.00006 1.77998 7.44672 1.33331 8.00006 1.33331ZM9.50006 8.66665H6.50006C6.12672 8.66665 5.82672 8.36665 5.82672 7.99998C5.82006 7.90665 5.84006 7.81998 5.87339 7.73998L6.14672 7.07331C6.24672 6.81998 6.48672 6.65998 6.76006 6.65998H9.20006C9.46672 6.65331 9.70672 6.81998 9.81339 7.06665L10.0867 7.73331C10.2267 8.06665 10.0667 8.45998 9.72672 8.59998C9.64006 8.63331 9.55339 8.64665 9.46672 8.64665L9.50006 8.66665Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
