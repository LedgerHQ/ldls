import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * InformationFill icon component for React Native.
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
 * import { InformationFill } from '@ldls/ui-rnative/symbols';
 *
 * <InformationFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <InformationFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={InformationFill} size="md">
 *   Click me
 * </Button>
 */
export const InformationFill = createIcon(
  "InformationFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00049 1.34998C11.6733 1.35019 14.6499 4.32751 14.6499 8.00037C14.6497 11.673 11.6732 14.6496 8.00049 14.6498C4.32121 14.6498 1.35031 11.6727 1.3501 8.00037C1.3501 4.32096 4.32793 1.34998 8.00049 1.34998ZM7.99951 7.34998C7.64075 7.35024 7.3501 7.64154 7.3501 8.00037V11.3334C7.35013 11.6922 7.64077 11.9835 7.99951 11.9838C8.35848 11.9838 8.64987 11.6923 8.6499 11.3334V8.00037C8.6499 7.64138 8.3585 7.34998 7.99951 7.34998ZM7.98975 4.68396L7.98682 4.68298C7.98393 4.68298 7.9809 4.68392 7.97803 4.68396C7.56096 4.69156 7.22232 5.00862 7.18115 5.41638L7.17627 5.50037L7.18115 5.57947C7.22093 5.97549 7.55387 6.31677 7.99365 6.31677C8.23627 6.31668 8.43674 6.20765 8.56885 6.07556C8.70094 5.94347 8.80994 5.74298 8.81006 5.50037C8.81006 5.02035 8.41365 4.69067 7.99951 4.68396L7.99365 4.68298C7.99246 4.68298 7.99094 4.68395 7.98975 4.68396ZM7.98682 5.98376L7.8999 5.97498L7.89795 5.974C7.9271 5.978 7.95657 5.98376 7.98682 5.98376Z"
      fill="currentColor"
    />
  </Svg>
);
