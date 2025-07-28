import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Whatsapp icon component for React Native.
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
 * import { Whatsapp } from '@ldls/ui-rnative/symbols';
 *
 * <Whatsapp />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Whatsapp size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Whatsapp} size="md">
 *   Click me
 * </Button>
 */
export const Whatsapp = createIcon(
  "Whatsapp",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.28473 7.2877C7.64265 7.86847 8.13156 8.35738 8.71232 8.7153L9.26022 8.38655C9.49917 8.24318 9.80208 8.26356 10.0197 8.43763L11.0831 9.28835C11.2319 9.40742 11.3227 9.58452 11.3324 9.7749C11.3422 9.96527 11.27 10.1507 11.134 10.2843L10.6533 10.757C9.9911 11.41 8.96627 11.5206 8.18002 11.0239C6.8976 10.1944 5.80563 9.10243 4.97616 7.82001C4.47945 7.03375 4.59003 6.0089 5.24303 5.3467L5.7157 4.86596C5.84933 4.73004 6.03476 4.65782 6.22513 4.66756C6.4155 4.67729 6.59259 4.76805 6.71166 4.9169L7.56239 5.98031C7.73646 6.19791 7.75684 6.50082 7.61347 6.73977L7.28473 7.2877Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.57832 13.3242L2.78032 13.6247C2.6682 13.6434 2.55394 13.6068 2.47356 13.5264C2.39319 13.446 2.35659 13.3318 2.37532 13.2197L2.67572 11.4216C0.921257 8.69482 1.50488 5.08397 4.02903 3.04877C6.55318 1.01358 10.2057 1.20888 12.4984 3.50164C14.7911 5.7944 14.9864 9.44689 12.9511 11.971C10.9159 14.4951 7.30506 15.0787 4.57832 13.3242Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
