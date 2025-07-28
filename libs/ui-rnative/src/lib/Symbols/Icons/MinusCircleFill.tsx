import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * MinusCircleFill icon component for React Native.
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
 * import { MinusCircleFill } from '@ldls/ui-rnative/symbols';
 *
 * <MinusCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MinusCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={MinusCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const MinusCircleFill = createIcon(
  "MinusCircleFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00049 1.34998C11.6733 1.35019 14.6499 4.32751 14.6499 8.00037C14.6497 11.673 11.6732 14.6496 8.00049 14.6498C4.32121 14.6498 1.35031 11.6727 1.3501 8.00037C1.3501 4.32096 4.32793 1.34998 8.00049 1.34998ZM5.3335 7.34998C4.97451 7.34998 4.68311 7.64138 4.68311 8.00037C4.68328 8.3592 4.97462 8.65076 5.3335 8.65076H10.6665L10.7974 8.63708C11.0937 8.57666 11.3167 8.31449 11.3169 8.00037C11.3169 7.68612 11.0937 7.42412 10.7974 7.36365L10.6665 7.34998H5.3335Z"
      fill="currentColor"
    />
  </Svg>
);
