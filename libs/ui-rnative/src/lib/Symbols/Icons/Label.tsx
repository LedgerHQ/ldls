import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Label icon component for React Native.
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
 * import { Label } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Label />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Label size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Label} size="md">
 *   Click me
 * </Button>
 */
export const Label = createIcon(
  "Label",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.157 3.88a.195.195 0 1 1-.276.275.195.195 0 0 1 .276-.276"
      clipRule="evenodd"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.622 1.513 5.047 1.5a1 1 0 0 1 .708.29l4.453 4.454a1 1 0 0 1 0 1.415L7.66 10.207a1 1 0 0 1-1.415 0L1.79 5.75a1 1 0 0 1-.29-.7V3.644a1 1 0 0 1 .29-.701l1.14-1.14a1 1 0 0 1 .692-.29"
      clipRule="evenodd"
    />
  </Svg>
);
