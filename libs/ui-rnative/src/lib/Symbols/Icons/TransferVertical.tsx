import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * TransferVertical icon component for React Native.
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
 * import { TransferVertical } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <TransferVertical />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <TransferVertical size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={TransferVertical} size="md">
 *   Click me
 * </Button>
 */
export const TransferVertical = createIcon(
  "TransferVertical",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 4 3.5 2.5m0 0L2 4m1.5-1.5v7M7 8l1.5 1.5m0 0L10 8M8.5 9.5v-7"
    />
  </Svg>
);
