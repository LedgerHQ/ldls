import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart2 icon component for React Native.
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
 * import { Chart2 } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Chart2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Chart2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Chart2} size="md">
 *   Click me
 * </Button>
 */
export const Chart2 = createIcon(
  "Chart2",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.5 7.94 2.535-2.536c.195-.2.51-.2.705 0l1.07 1.07c.196.195.51.195.705 0l2.98-2.98m-1.33.006h1.33v1.33m.005 5.634H.96V1.61"
    />
  </Svg>
);
