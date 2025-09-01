import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * LifeRing icon component for React Native.
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
 * import { LifeRing } from '@ldls/ui-rnative/symbols';
 *
 * <LifeRing />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <LifeRing size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={LifeRing} size="md">
 *   Click me
 * </Button>
 */
export const LifeRing = createIcon(
  "LifeRing",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.235 4.765 9.18 2.82M2.82 9.18l1.945-1.945m0-2.47L2.82 2.82m6.36 6.36L7.235 7.235M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
    />
  </Svg>
);
