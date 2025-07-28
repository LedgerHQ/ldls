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
 * import { TransferVertical } from '@ldls/ui-rnative/symbols';
 *
 * <TransferVertical />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <TransferVertical size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={TransferVertical} size="md">
 *   Click me
 * </Button>
 */
export const TransferVertical = createIcon(
  "TransferVertical",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.66687 5.33328L4.66687 3.33328M4.66687 3.33328L2.66687 5.33328M4.66687 3.33328V12.6666M9.33354 10.6666L11.3335 12.6666M11.3335 12.6666L13.3335 10.6666M11.3335 12.6666L11.3335 3.33328"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
