import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Gift icon component for React Native.
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
 * import { Gift } from '@ldls/ui-rnative/symbols';
 *
 * <Gift />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Gift size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Gift} size="md">
 *   Click me
 * </Button>
 */
export const Gift = createIcon(
  "Gift",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8 14V5.3333M10.464 4.40664C9.744 5.15331 8.61067 5.33197 8.064 5.33197M8.06 5.33331C8.06 5.33331 7.72667 3.2533 8.54 2.4133M10.46 4.40664C10.9867 3.85331 10.9867 2.95997 10.46 2.40664C9.92667 1.8533 9.06667 1.8533 8.54333 2.40664M7.92667 5.33197C7.38 5.33197 6.24667 5.15331 5.53333 4.40664C5 3.85331 5 2.95997 5.53333 2.40664C6.06 1.8533 6.92 1.8533 7.45 2.40664M7.934 5.33331C7.934 5.33331 8.26067 3.2533 7.44733 2.4133M12.6667 7.99997V13.3333C12.6667 13.7 12.3667 14 12 14H4C3.62667 14 3.33333 13.7 3.33333 13.3333V7.99997M13.3333 5.3333H2.66667C2.29867 5.3333 2 5.62664 2 5.99997V7.3333C2 7.69997 2.29333 7.99997 2.66667 7.99997H13.3333C13.7 7.99997 14 7.69997 14 7.3333V5.99997C14 5.62664 13.7 5.3333 13.3333 5.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
