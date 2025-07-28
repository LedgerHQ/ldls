import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Shapes icon component for React Native.
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
 * import { Shapes } from '@ldls/ui-rnative/symbols';
 *
 * <Shapes />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Shapes size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Shapes} size="md">
 *   Click me
 * </Button>
 */
export const Shapes = createIcon(
  "Shapes",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.37655 9.62302C4.37655 9.19592 4.72278 8.84968 5.14988 8.84968H6.1376C6.56471 8.84968 6.91094 9.19592 6.91094 9.62302V10.6107C6.91094 11.0378 6.56471 11.3841 6.13761 11.3841H5.14988C4.72278 11.3841 4.37655 11.0378 4.37655 10.6107V9.62302Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.7129 10.1175C11.7129 10.8999 11.0787 11.5341 10.2963 11.5341C9.51399 11.5341 8.87976 10.8999 8.87976 10.1175C8.87976 9.33519 9.51399 8.70096 10.2963 8.70096C11.0787 8.70096 11.7129 9.33519 11.7129 10.1175Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.73662 4.5619L6.6515 6.44202C6.58599 6.55548 6.58597 6.69526 6.65144 6.80874C6.71692 6.92222 6.83795 6.99217 6.96896 6.99224H9.1392C9.27021 6.99217 9.39124 6.92222 9.45672 6.80874C9.52219 6.69526 9.52217 6.55548 9.45667 6.44202L8.37221 4.5619C8.30672 4.44828 8.18555 4.37827 8.05441 4.37827C7.92327 4.37827 7.80211 4.44828 7.73662 4.5619Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.99756 5.33083C1.99756 3.48988 3.48994 1.9975 5.33089 1.9975H10.6692C12.5102 1.9975 14.0026 3.48988 14.0026 5.33083V10.6692C14.0026 12.5101 12.5102 14.0025 10.6692 14.0025H5.33089C3.48994 14.0025 1.99756 12.5101 1.99756 10.6692V5.33083Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
