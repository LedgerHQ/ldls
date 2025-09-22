import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * IdCard icon component for React Native.
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
 * import { IdCard } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <IdCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <IdCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={IdCard} size="md">
 *   Click me
 * </Button>
 */
export const IdCard = createIcon(
  "IdCard",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.045 4.075c.435.435.435 1.15 0 1.59a1.14 1.14 0 0 1-1.595 0 1.13 1.13 0 0 1 0-1.595c.435-.44 1.15-.44 1.59 0m2.46.68h2m-.8 2H7.5m-1.455 1.5c-.09-.22-.225-.42-.4-.577a1.58 1.58 0 0 0-1.078-.425h-.65a1.59 1.59 0 0 0-1.479.997M1 9.25V2.77c0-.565.455-1.025 1.02-1.025H10a1 1 0 0 1 1 1v6.5c0 .55-.45 1-1 1H2c-.553 0-1-.45-1-1z"
    />
  </Svg>
);
