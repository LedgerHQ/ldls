import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * BluetoothCircleFill icon component for React Native.
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
 * import { BluetoothCircleFill } from '@ldls/ui-rnative/symbols';
 *
 * <BluetoothCircleFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <BluetoothCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={BluetoothCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const BluetoothCircleFill = createIcon(
  "BluetoothCircleFill",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="m6.967 7.182-.773-.653v1.22zM6.194 4.251v1.22l.773-.653z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 10.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6m.059-7.466a.33.33 0 0 0-.525.266v1.508l-.821-.693a.33.33 0 1 0-.426.504L5.534 5.97v.058L4.287 7.08a.33.33 0 1 0 .426.504l.82-.693V8.4a.33.33 0 0 0 .526.266l1.636-1.2a.33.33 0 0 0 .018-.518L6.59 6l1.123-.948a.33.33 0 0 0-.018-.518z"
      clipRule="evenodd"
    />
  </Svg>
);
