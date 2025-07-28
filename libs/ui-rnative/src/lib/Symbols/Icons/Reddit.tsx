import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Reddit icon component for React Native.
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
 * import { Reddit } from '@ldls/ui-rnative/symbols';
 *
 * <Reddit />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Reddit size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Reddit} size="md">
 *   Click me
 * </Button>
 */
export const Reddit = createIcon(
  "Reddit",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.39547 8.08086C5.9943 8.08086 5.66681 8.41165 5.66681 8.81688C5.66681 9.2221 5.9943 9.55289 6.39547 9.55289C6.79664 9.55289 7.12412 9.2221 7.12412 8.81688C7.12412 8.41165 6.79664 8.08086 6.39547 8.08086Z"
      fill="currentColor"
    />
    <Path
      d="M8.00834 11.2978C8.2867 11.2978 9.23641 11.2647 9.73582 10.7603C9.80951 10.6859 9.80951 10.5701 9.7522 10.4874C9.67851 10.413 9.5557 10.413 9.48202 10.4874C9.16272 10.8016 8.49956 10.9174 8.01652 10.9174C7.53348 10.9174 6.86214 10.8016 6.55102 10.4874C6.47734 10.413 6.35453 10.413 6.28085 10.4874C6.20716 10.5618 6.20716 10.6859 6.28085 10.7603C6.77208 11.2565 7.72997 11.2978 8.00834 11.2978Z"
      fill="currentColor"
    />
    <Path
      d="M8.87617 8.81688C8.87617 9.2221 9.20366 9.55289 9.60483 9.55289C10.006 9.55289 10.3335 9.2221 10.3335 8.81688C10.3335 8.41165 10.006 8.08086 9.60483 8.08086C9.20366 8.08086 8.87617 8.41165 8.87617 8.81688Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8.08084C15 11.9859 11.866 15.1515 8 15.1515C4.13401 15.1515 1 11.9859 1 8.08084C1 4.1758 4.13401 1.01013 8 1.01013C11.866 1.01013 15 4.1758 15 8.08084ZM11.6434 7.04713C12.2083 7.04713 12.6668 7.51024 12.6668 8.08086C12.6668 8.50262 12.413 8.8665 12.0773 9.03189C12.0937 9.13113 12.1019 9.23037 12.1019 9.33788C12.1019 10.9257 10.2762 12.2075 8.01652 12.2075C5.75687 12.2075 3.93114 10.9257 3.93114 9.33788C3.93114 9.23037 3.93933 9.12286 3.9557 9.02362C3.59547 8.85823 3.34985 8.50262 3.34985 8.08086C3.34985 7.51024 3.80833 7.04713 4.37325 7.04713C4.64342 7.04713 4.89722 7.16291 5.07734 7.33658C5.78143 6.81558 6.7557 6.49305 7.84459 6.45997L8.36038 3.99556C8.37676 3.94594 8.40132 3.9046 8.44225 3.87979C8.48319 3.85498 8.53231 3.84671 8.58143 3.85498L10.2762 4.21885C10.3908 3.97075 10.6364 3.80536 10.923 3.80536C11.3241 3.80536 11.6516 4.13615 11.6516 4.54137C11.6516 4.94659 11.3241 5.27739 10.923 5.27739C10.53 5.27739 10.2107 4.96313 10.1943 4.57445L8.67968 4.25193L8.21301 6.45997C9.27734 6.50132 10.2434 6.83212 10.9393 7.33658C11.1194 7.15464 11.3651 7.04713 11.6434 7.04713Z"
      fill="currentColor"
    />
  </Svg>
);
