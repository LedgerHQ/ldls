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
 * import { LedgerDevices } from '@ledgerhq/ui-rnative/symbols';
 *
 * <LedgerDevices />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <LedgerDevices size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ui-rnative';
 *
 * <Button icon={LedgerDevices} size="md">
 *   Click me
 * </Button>
 */
export const LedgerDevices = createIcon(
  "LedgerDevices",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      fill="currentColor"
      d="M8 14.65a.65.65 0 1 0 0-1.3zm2.683-11.317a.65.65 0 1 0 1.3 0zm1.3-.083a.65.65 0 1 0-1.3 0zm-1.3.167a.65.65 0 1 0 1.3 0zM8 14v-.65H4.667v1.3H8zm-3.333 0v-.65a.683.683 0 0 1-.684-.683h-1.3c0 1.095.888 1.983 1.984 1.983zm-1.334-1.333h.65V3.333h-1.3v9.334zm0-9.334h.65c0-.377.306-.683.684-.683v-1.3a1.983 1.983 0 0 0-1.984 1.983zM4.667 2v.65H10v-1.3H4.667zM10 2v.65c.377 0 .683.306.683.683h1.3A1.983 1.983 0 0 0 10 1.35zm1.333 1.25h-.65v.167h1.3V3.25zM10.8 5.667v.65h1.067v-1.3H10.8zm1.867.8h-.65V13.2h1.3V6.467zm-.8 7.533v-.65H10.8v1.3h1.067zM10 13.2h.65V6.467h-1.3V13.2zm.8.8v-.65a.15.15 0 0 1-.15-.15h-1.3c0 .8.65 1.45 1.45 1.45zm1.867-.8h-.65a.15.15 0 0 1-.15.15v1.3c.8 0 1.45-.65 1.45-1.45zm-.8-7.533v.65a.15.15 0 0 1 .15.15h1.3c0-.801-.65-1.45-1.45-1.45zm-1.067 0v-.65c-.8 0-1.45.649-1.45 1.45h1.3a.15.15 0 0 1 .15-.15zm1.867 5.666h-.65V13.2h1.3v-1.867zM10 13.2h.65v-1.867h-1.3V13.2zm2.667-1.867h.65a1.983 1.983 0 0 0-1.984-1.983v1.3c.378 0 .684.306.684.683zm-2.667 0h.65c0-.377.306-.683.683-.683v-1.3a1.983 1.983 0 0 0-1.983 1.983z"
    />
  </Svg>
);
