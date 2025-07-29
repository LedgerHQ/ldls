import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * TransferHorizontal icon component for React Native.
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
 * import { TransferHorizontal } from '@ldls/ui-rnative/symbols';
 *
 * <TransferHorizontal />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <TransferHorizontal size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={TransferHorizontal} size="md">
 *   Click me
 * </Button>
 */
export const TransferHorizontal = createIcon(
  "TransferHorizontal",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.33337 9.33334L3.33337 11.3333M3.33337 11.3333L5.33337 13.3333M3.33337 11.3333H12.6667M10.6667 6.66668L12.6667 4.66668M12.6667 4.66668L10.6667 2.66668M12.6667 4.66668L3.33337 4.66668"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
