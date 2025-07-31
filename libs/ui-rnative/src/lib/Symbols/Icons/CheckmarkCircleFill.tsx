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
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      d="M8 1.35A6.65 6.65 0 1 1 8 14.65 6.65 6.65 0 0 1 8 1.35"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m5.63 8.226 1.444 1.445m-.01-.01 3.26-3.259"
    />
  </Svg>
);
