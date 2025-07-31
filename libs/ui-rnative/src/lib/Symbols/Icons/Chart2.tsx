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
 * import { Chart2 } from '@ldls/ui-rnative/symbols';
 *
 * <Chart2 />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Chart2 size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Chart2} size="md">
 *   Click me
 * </Button>
 */
export const Chart2 = createIcon(
  "Chart2",
  <Svg width={24} height={24} fill="currentColor">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m3.333 10.587 3.38-3.381a.65.65 0 0 1 .94 0l1.428 1.427c.26.26.68.26.94 0l3.973-3.974m-1.774.008h1.773V6.44M14 13.953H1.28V2.147"
    />
  </Svg>
);
