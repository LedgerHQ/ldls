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
 * import { PlusCircleFill } from '@ledgerhq/ui-rnative/symbols';
 *
 * <PlusCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <PlusCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={PlusCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const PlusCircleFill = createIcon(
  "PlusCircleFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      d="M8 1.35a6.65 6.65 0 0 1 0 13.3A6.646 6.646 0 0 1 1.35 8c0-3.679 2.978-6.65 6.65-6.65m0 3.333a.65.65 0 0 0-.65.65V7.35H5.334a.65.65 0 0 0 0 1.3H7.35v2.016a.65.65 0 0 0 1.3 0V8.65h2.016l.131-.013a.65.65 0 0 0 0-1.273l-.13-.014H8.65V5.333a.65.65 0 0 0-.65-.65"
    />
  </Svg>
);
