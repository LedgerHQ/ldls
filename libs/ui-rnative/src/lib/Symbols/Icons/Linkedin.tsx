import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Linkedin icon component for React Native.
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
 * import { Linkedin } from '@ldls/ui-rnative/symbols';
 *
 * <Linkedin />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Linkedin size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Linkedin} size="md">
 *   Click me
 * </Button>
 */
export const Linkedin = createIcon(
  "Linkedin",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_422)">
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.083 11.25H1.917A1.167 1.167 0 0 1 .75 10.083V1.917C.75 1.272 1.272.75 1.917.75h8.166c.645 0 1.167.522 1.167 1.167v8.166c0 .645-.522 1.167-1.167 1.167m-1.85-1.458h1.559V6.59c0-1.354-.768-2.01-1.84-2.01a1.76 1.76 0 0 0-1.525.836v-.68H4.926v5.055h1.501V7.138c0-.711.328-1.134.954-1.134.576 0 .852.406.852 1.134zm-6.025-6.65a.93.93 0 0 0 .926.932.93.93 0 0 0 .926-.933.93.93 0 0 0-.926-.933.93.93 0 0 0-.926.933m1.717 6.65H2.359V4.736h1.566z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_422">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
