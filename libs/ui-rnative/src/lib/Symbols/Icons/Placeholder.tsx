import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Placeholder icon component for React Native.
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
 * import { Placeholder } from '@ldls/ui-rnative/symbols';
 *
 * <Placeholder />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Placeholder size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Placeholder} size="md">
 *   Click me
 * </Button>
 */
export const Placeholder = createIcon(
  "Placeholder",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_5625_429)">
      <Path
        stroke="currentColor"
        d="m1.417 1.417 9.166 9.166m-9.166 0 9.166-9.166M1 1h10v10H1z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5625_429">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
