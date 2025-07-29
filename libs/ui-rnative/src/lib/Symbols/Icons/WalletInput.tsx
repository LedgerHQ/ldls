import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WalletInput icon component for React Native.
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
 * import { WalletInput } from '@ldls/ui-rnative/symbols';
 *
 * <WalletInput />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WalletInput size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WalletInput} size="md">
 *   Click me
 * </Button>
 */
export const WalletInput = createIcon(
  "WalletInput",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M1.99756 4.66529H12.6687C13.4054 4.66529 14.0026 5.2625 14.0026 5.99918V12.3352C14.0026 13.256 13.2561 14.0025 12.3352 14.0025H8.667M11.3348 4.66529V3.99835C11.3348 3.26166 10.7376 2.66446 10.0009 2.66446H3.66492C2.74406 2.66446 1.99756 3.41096 1.99756 4.33182V10.0008M6.66617 12.6686H1.99756M6.66617 12.6686L5.33228 14.0025M6.66617 12.6686L5.33228 11.3347M11.3343 9.3339H10.6676"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
