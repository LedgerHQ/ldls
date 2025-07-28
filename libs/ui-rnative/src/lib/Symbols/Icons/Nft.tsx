import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Nft icon component for React Native.
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
 * import { Nft } from '@ldls/ui-rnative/symbols';
 *
 * <Nft />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Nft size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Nft} size="md">
 *   Click me
 * </Button>
 */
export const Nft = createIcon(
  "Nft",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.33333 9.66672V6.33339L6 9.66672V6.33339M7.66667 9.66672V6.33339H9M11 9.66672V6.33339M11 6.33339H10.3333M11 6.33339H11.6667M8 8.00006H8.33333M13.5 10.4701V5.53006C13.5 5.09339 13.2673 4.69006 12.8887 4.47139L8.61067 2.00139C8.23267 1.78339 7.76667 1.78339 7.38867 2.00139L3.11133 4.47206C2.73267 4.69006 2.5 5.09339 2.5 5.53006V10.4694C2.5 10.9061 2.73267 11.3094 3.11133 11.5281L7.38933 13.9981C7.76733 14.2161 8.23333 14.2161 8.61133 13.9981L12.8893 11.5281C13.2673 11.3101 13.5 10.9067 13.5 10.4701Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
