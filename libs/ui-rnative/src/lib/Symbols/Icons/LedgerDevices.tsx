import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * LedgerDevices icon component for React Native.
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
 * import { LedgerDevices } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <LedgerDevices />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <LedgerDevices size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={LedgerDevices} size="md">
 *   Click me
 * </Button>
 */
export const LedgerDevices = createIcon(
  "LedgerDevices",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M6 11a.5.5 0 0 0 0-1v1m2-8.5a.5.5 0 0 0 1 0H8m1-.062a.5.5 0 0 0-1 0h1m-1 .124a.5.5 0 0 0 1 0H8M6 10.5V10H3.5v1H6zm-2.5 0V10a.5.5 0 0 1-.5-.5H2A1.5 1.5 0 0 0 3.5 11zm-1-1H3v-7H2v7zm0-7H3a.5.5 0 0 1 .5-.5V1A1.5 1.5 0 0 0 2 2.5zm1-1V2h4V1h-4zm4 0V2a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 1zm1 .938H8v.124h1v-.124zM8.1 4.25v.5h.8v-1h-.8zm1.4.6H9V9.9h1V4.85zm-.6 5.65V10h-.8v1h.8zm-1.4-.6H8V4.85H7V9.9zm.6.6V10a.1.1 0 0 1-.1-.1H7A1.1 1.1 0 0 0 8.1 11zm1.4-.6H9a.1.1 0 0 1-.1.1v1A1.1 1.1 0 0 0 10 9.9zm-.6-5.65v.5a.1.1 0 0 1 .1.1h1a1.1 1.1 0 0 0-1.1-1.1zm-.8 0v-.5A1.1 1.1 0 0 0 7 4.85h1a.1.1 0 0 1 .1-.1zM9.5 8.5H9v1.4h1V8.5zm-2 1.4H8V8.5H7v1.4zm2-1.4h.5A1.5 1.5 0 0 0 8.5 7v1a.5.5 0 0 1 .5.5zm-2 0H8a.5.5 0 0 1 .5-.5V7A1.5 1.5 0 0 0 7 8.5z"
    />
  </Svg>
);
