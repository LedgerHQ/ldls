import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Incognito icon component for React Native.
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
 * import { Incognito } from '@ldls/ui-rnative/symbols';
 *
 * <Incognito />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Incognito size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Incognito} size="md">
 *   Click me
 * </Button>
 */
export const Incognito = createIcon(
  "Incognito",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.95838 5.99916L4.43924 3.11196C4.54662 2.46903 5.10352 1.9975 5.75512 1.9975H10.1643C10.8166 1.9975 11.3728 2.46903 11.4802 3.11196L11.9617 5.99916M6.8169 12.0017C6.8169 13.1067 5.9211 14.0025 4.81607 14.0025C3.71104 14.0025 2.81523 13.1067 2.81523 12.0017C2.81523 10.8966 3.71104 10.0008 4.81607 10.0008C5.9211 10.0008 6.8169 10.8966 6.8169 12.0017ZM6.8169 12.0017C7.4485 11.2393 8.47226 11.2393 9.10385 12.0017M9.10385 12.0017C9.10385 13.1067 9.99966 14.0025 11.1047 14.0025C12.2097 14.0025 13.1055 13.1067 13.1055 12.0017C13.1055 10.8966 12.2097 10.0008 11.1047 10.0008C9.99966 10.0008 9.10385 10.8966 9.10385 12.0017ZM1.99756 8.66694C5.31294 6.8882 10.6872 6.8882 14.0026 8.66694"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
