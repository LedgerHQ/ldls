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
 * import { LifeRing } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <LifeRing />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <LifeRing size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={LifeRing} size="md">
 *   Click me
 * </Button>
 */
export const LifeRing = createIcon(
  "LifeRing",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M9.647 6.353 12.24 3.76m-8.48 8.48 2.593-2.593m0-3.294L3.76 3.76m8.48 8.48L9.647 9.647M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 3.667a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666"
    />
  </Svg>
);
