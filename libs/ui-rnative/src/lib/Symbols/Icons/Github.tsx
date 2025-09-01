import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Github icon component for React Native.
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
 * import { Github } from '@ldls/ui-rnative/symbols';
 *
 * <Github />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Github size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Github} size="md">
 *   Click me
 * </Button>
 */
export const Github = createIcon(
  "Github",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_426)">
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.004.6C3.016.6.6 3.075.6 6.137c0 2.447 1.548 4.52 3.695 5.253.269.055.367-.12.367-.266 0-.129-.009-.569-.009-1.027-1.503.33-1.816-.66-1.816-.66-.242-.642-.6-.807-.6-.807-.492-.339.036-.339.036-.339.546.037.832.568.832.568.484.844 1.262.605 1.575.459.045-.358.188-.605.34-.743-1.199-.128-2.46-.605-2.46-2.732 0-.605.214-1.1.554-1.485-.053-.137-.241-.705.054-1.466 0 0 .456-.147 1.485.568.44-.121.895-.183 1.351-.183.457 0 .922.064 1.352.183 1.029-.715 1.485-.568 1.485-.568.295.76.107 1.329.054 1.466.349.385.554.88.554 1.485 0 2.127-1.261 2.595-2.47 2.732.198.174.368.504.368 1.027 0 .742-.01 1.338-.01 1.522 0 .146.1.32.368.266 2.147-.734 3.695-2.806 3.695-5.253C11.409 3.075 8.984.6 6.004.6"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_426">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
