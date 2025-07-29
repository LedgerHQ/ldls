import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * PlusCircleFill icon component for React Native.
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
 * import { PlusCircleFill } from '@ldls/ui-rnative/symbols';
 *
 * <PlusCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PlusCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={PlusCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const PlusCircleFill = createIcon(
  "PlusCircleFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00049 1.34998C11.6733 1.35019 14.6499 4.32751 14.6499 8.00037C14.6497 11.673 11.6732 14.6496 8.00049 14.6498C4.32121 14.6498 1.35031 11.6727 1.3501 8.00037C1.3501 4.32096 4.32793 1.34998 8.00049 1.34998ZM8.00049 4.68298C7.6415 4.68298 7.3501 4.97439 7.3501 5.33337V7.34998H5.3335C4.97451 7.34998 4.68311 7.64138 4.68311 8.00037C4.68328 8.3592 4.97462 8.64978 5.3335 8.64978H7.3501V10.6664C7.3501 11.0254 7.6415 11.3168 8.00049 11.3168C8.35932 11.3166 8.6499 11.0253 8.6499 10.6664V8.64978H10.6665L10.7974 8.63708C11.0937 8.57669 11.3167 8.31451 11.3169 8.00037C11.3169 7.68612 11.0937 7.42412 10.7974 7.36365L10.6665 7.34998H8.6499V5.33337C8.6499 4.9745 8.35932 4.68316 8.00049 4.68298Z"
      fill="currentColor"
    />
  </Svg>
);
