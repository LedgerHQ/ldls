import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinPercent icon component for React Native.
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
 * import { CoinPercent } from '@ldls/ui-rnative/symbols';
 *
 * <CoinPercent />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CoinPercent size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CoinPercent} size="md">
 *   Click me
 * </Button>
 */
export const CoinPercent = createIcon(
  "CoinPercent",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.895 4.6 7.6 2.89m-1.815-.065c0-.025.015-.046.04-.046.02 0 .04.016.04.04-.005.02-.02.04-.045.04-.025-.005-.045-.02-.045-.045V2.81M4 3.5v-.85C4 1.735 4.735 1 5.65 1h2.2c.91 0 1.65.735 1.65 1.65v2.2c0 .91-.74 1.65-1.65 1.65H7.5m.213-1.83c-.006.02-.02.04-.046.04-.025-.005-.045-.02-.045-.045s.016-.045.04-.045c.02 0 .04.015.04.04M1.5 6.3v3.4c0 .44.895.8 2 .8 1.1 0 1.995-.36 2-.8V6.3M1.5 8c0 .44.89.8 1.995.8 1.1 0 2-.36 2-.8m0-1.7c0 .44-.9.8-2 .8-1.105 0-2-.36-2-.8 0-.445.895-.8 2-.8s1.995.355 2 .8"
    />
  </Svg>
);
