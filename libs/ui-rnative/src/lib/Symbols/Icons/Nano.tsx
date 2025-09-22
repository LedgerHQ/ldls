import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Nano icon component for React Native.
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
 * import { Nano } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Nano />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Nano size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Nano} size="md">
 *   Click me
 * </Button>
 */
export const Nano = createIcon(
  "Nano",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 8.958c0 .117.092.209.208.209a.21.21 0 0 0 .209-.209.21.21 0 0 0-.209-.208.21.21 0 0 0-.208.213M4.629 6 2.427 3.798a.25.25 0 0 1 0-.353l1.768-1.768a.25.25 0 0 1 .353 0L8.871 6M1.72 10.5H9a1.5 1.5 0 1 0 0-3H1.72a.22.22 0 0 0-.22.22v2.56c0 .122.098.22.22.22"
    />
  </Svg>
);
