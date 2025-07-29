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
      d="M6.39547 8.08083C5.9943 8.08083 5.66681 8.41162 5.66681 8.81685C5.66681 9.22207 5.9943 9.55286 6.39547 9.55286C6.79664 9.55286 7.12412 9.22207 7.12412 8.81685C7.12412 8.41162 6.79664 8.08083 6.39547 8.08083Z"
      fill="currentColor"
    />
    <Path
      d="M8.00834 11.2978C8.2867 11.2978 9.23641 11.2647 9.73582 10.7603C9.80951 10.6858 9.80951 10.5701 9.7522 10.4874C9.67851 10.4129 9.5557 10.4129 9.48202 10.4874C9.16272 10.8016 8.49956 10.9174 8.01652 10.9174C7.53348 10.9174 6.86214 10.8016 6.55102 10.4874C6.47734 10.4129 6.35453 10.4129 6.28085 10.4874C6.20716 10.5618 6.20716 10.6858 6.28085 10.7603C6.77208 11.2564 7.72997 11.2978 8.00834 11.2978Z"
      fill="currentColor"
    />
    <Path
      d="M8.87617 8.81685C8.87617 9.22207 9.20366 9.55286 9.60483 9.55286C10.006 9.55286 10.3335 9.22207 10.3335 8.81685C10.3335 8.41162 10.006 8.08083 9.60483 8.08083C9.20366 8.08083 8.87617 8.41162 8.87617 8.81685Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8.08081C15 11.9859 11.866 15.1515 8 15.1515C4.13401 15.1515 1 11.9859 1 8.08081C1 4.17576 4.13401 1.0101 8 1.0101C11.866 1.0101 15 4.17576 15 8.08081ZM11.6434 7.0471C12.2083 7.0471 12.6668 7.51021 12.6668 8.08083C12.6668 8.50259 12.413 8.86646 12.0773 9.03186C12.0937 9.1311 12.1019 9.23034 12.1019 9.33785C12.1019 10.9257 10.2762 12.2075 8.01652 12.2075C5.75687 12.2075 3.93114 10.9257 3.93114 9.33785C3.93114 9.23034 3.93933 9.12283 3.9557 9.02359C3.59547 8.85819 3.34985 8.50259 3.34985 8.08083C3.34985 7.51021 3.80833 7.0471 4.37325 7.0471C4.64342 7.0471 4.89722 7.16288 5.07734 7.33654C5.78143 6.81555 6.7557 6.49302 7.84459 6.45994L8.36038 3.99553C8.37676 3.94591 8.40132 3.90456 8.44225 3.87976C8.48319 3.85495 8.53231 3.84668 8.58143 3.85495L10.2762 4.21882C10.3908 3.97072 10.6364 3.80533 10.923 3.80533C11.3241 3.80533 11.6516 4.13612 11.6516 4.54134C11.6516 4.94656 11.3241 5.27736 10.923 5.27736C10.53 5.27736 10.2107 4.9631 10.1943 4.57442L8.67968 4.2519L8.21301 6.45994C9.27734 6.50129 10.2434 6.83209 10.9393 7.33654C11.1194 7.15461 11.3651 7.0471 11.6434 7.0471Z"
      fill="currentColor"
    />
  </Svg>
);
