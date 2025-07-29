import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Home icon component for React Native.
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
 * import { Home } from '@ldls/ui-rnative/symbols';
 *
 * <Home />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Home size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Home} size="md">
 *   Click me
 * </Button>
 */
export const Home = createIcon(
  "Home",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.66671 5.73333V14H13.3334V5.73333M1.33337 6.66667L8.00004 2L14.6667 6.66667M10 14V10C10 9.26 9.40004 8.66667 8.66671 8.66667H7.33337C6.59337 8.66667 6.00004 9.26 6.00004 10V14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
