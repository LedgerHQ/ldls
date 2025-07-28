import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Spacerocket icon component for React Native.
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
 * import { Spacerocket } from '@ldls/ui-rnative/symbols';
 *
 * <Spacerocket />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Spacerocket size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Spacerocket} size="md">
 *   Click me
 * </Button>
 */
export const Spacerocket = createIcon(
  "Spacerocket",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.6678 8.66694V11.5895C10.6678 11.8421 10.525 12.073 10.2991 12.186L8.68781 12.9917C8.51488 13.0782 8.31294 13.0853 8.13431 13.0113C7.95569 12.9373 7.81796 12.7895 7.75682 12.6061L7.33305 11.3347M4.66528 8.66694L3.39397 8.24317C3.21055 8.18203 3.06269 8.04431 2.9887 7.86568C2.91472 7.68706 2.92188 7.48512 3.00835 7.31219L3.81401 5.7009C3.92698 5.47496 4.1579 5.33222 4.4105 5.33222H7.33305M11.3985 8.08235L7.79919 10.9618C7.53382 11.1741 7.15125 11.1529 6.91095 10.9126L5.08738 9.08904C4.84708 8.84874 4.82589 8.46618 5.03818 8.20081L7.91765 4.60148C9.23435 2.9556 11.2278 1.9975 13.3356 1.9975C13.7039 1.9975 14.0025 2.2961 14.0025 2.66444C14.0025 4.77219 13.0444 6.76565 11.3985 8.08235ZM3.83166 13.727L1.9975 14.0025L2.27305 12.1683C2.36243 11.5733 2.82951 11.1062 3.42452 11.0169C3.85449 10.9523 4.2896 11.0955 4.59704 11.403C4.90449 11.7104 5.04778 12.1455 4.98317 12.5755C4.89376 13.1705 4.42667 13.6376 3.83166 13.727Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
