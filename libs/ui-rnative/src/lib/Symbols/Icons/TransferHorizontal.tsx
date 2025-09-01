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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7 2.5 8.5m0 0L4 10M2.5 8.5h7M8 5l1.5-1.5m0 0L8 2m1.5 1.5h-7"
    />
  </Svg>
);
