import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Experiment2 icon component for React Native.
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
 * import { Experiment2 } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Experiment2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Experiment2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Experiment2} size="md">
 *   Click me
 * </Button>
 */
export const Experiment2 = createIcon(
  "Experiment2",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.25 5.115 6.885 1.75m2.805 2.8L4.455 9.78a1.596 1.596 0 0 1-2.245 0l-.005-.005a1.59 1.59 0 0 1-.006-2.245v-.005l5.23-5.235M3.505 6.25H7.99"
    />
  </Svg>
);
