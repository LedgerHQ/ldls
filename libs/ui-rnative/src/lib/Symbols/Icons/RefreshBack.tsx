import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * RefreshBack icon component for React Native.
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
 * import { RefreshBack } from '@ldls/ui-rnative/symbols';
 *
 * <RefreshBack />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <RefreshBack size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={RefreshBack} size="md">
 *   Click me
 * </Button>
 */
export const RefreshBack = createIcon(
  "RefreshBack",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.00786 3.09263V5.44996H5.36452M3.31519 5.44996C4.21986 3.79196 5.97852 2.66663 7.99986 2.66663C10.9452 2.66663 13.3332 5.05463 13.3332 7.99996C13.3332 10.9453 10.9452 13.3333 7.99986 13.3333C5.05452 13.3333 2.66652 10.9453 2.66652 7.99996"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
