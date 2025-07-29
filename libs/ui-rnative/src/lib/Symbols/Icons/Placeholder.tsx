import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_5625_429)">
      <Path
        d="M1.88883 1.88884L14.1111 14.1111M1.88883 14.1111L14.1111 1.88889M1.33337 1.33331H14.6667V14.6666H1.33337V1.33331Z"
        stroke="currentColor"
        strokeWidth={1.3}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5625_429">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
