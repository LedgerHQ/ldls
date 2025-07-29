import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CheckmarkCircleFill icon component for React Native.
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
 * import { CheckmarkCircleFill } from '@ldls/ui-rnative/symbols';
 *
 * <CheckmarkCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CheckmarkCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CheckmarkCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const CheckmarkCircleFill = createIcon(
  "CheckmarkCircleFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00049 1.34998C11.673 1.35019 14.6499 4.3278 14.6499 8.00037C14.6497 11.6728 11.6729 14.6496 8.00049 14.6498C4.32792 14.6498 1.35031 11.6729 1.3501 8.00037C1.3501 4.32767 4.32779 1.34998 8.00049 1.34998Z"
      fill="currentColor"
    />
    <Path
      d="M5.62933 8.22598L7.074 9.67064M7.06467 9.66131L10.324 6.40198"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
