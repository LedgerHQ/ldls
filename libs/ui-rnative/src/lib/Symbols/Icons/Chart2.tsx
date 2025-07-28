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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.33336 10.5867L6.71336 7.20601C6.97403 6.93934 7.39336 6.93934 7.65336 7.20601L9.0807 8.63267C9.34136 8.89267 9.7607 8.89267 10.0207 8.63267L13.994 4.65934M12.22 4.66667H13.9934V6.44001M14 13.9527H1.28003V2.14734"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
