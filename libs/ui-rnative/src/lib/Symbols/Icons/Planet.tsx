import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Planet icon component for React Native.
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
 * import { Planet } from '@ldls/ui-rnative/symbols';
 *
 * <Planet />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Planet size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Planet} size="md">
 *   Click me
 * </Button>
 */
export const Planet = createIcon(
  "Planet",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_282)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.865 6c0-1.18.955-2.135 2.13-2.135m5.4-.985c.57.99-1.38 3.195-4.365 4.915S1.16 10.105.59 9.11m.01.01c-.35-.605.235-1.655 1.415-2.775m6.28-3.62C9.85 2.26 11.05 2.28 11.4 2.88M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_282">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
