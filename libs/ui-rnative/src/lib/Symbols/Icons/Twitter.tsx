import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Twitter icon component for React Native.
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
 * import { Twitter } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Twitter />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Twitter size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Twitter} size="md">
 *   Click me
 * </Button>
 */
export const Twitter = createIcon(
  "Twitter",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_414)">
      <Path
        fill="currentColor"
        d="M6.999 5.196 10.908.75h-.926L6.587 4.61 3.877.75H.75l4.1 5.838-4.1 4.662h.926l3.585-4.077 2.862 4.077h3.127zM5.73 6.639l-.415-.581L2.01 1.432h1.423L6.1 5.165l.415.582 3.467 4.852H8.559z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_414">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
