import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Airplane icon component for React Native.
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
 * import { Airplane } from '@ldls/ui-rnative/symbols';
 *
 * <Airplane />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Airplane size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Airplane} size="md">
 *   Click me
 * </Button>
 */
export const Airplane = createIcon(
  "Airplane",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_436_164)">
      <Path
        d="M2.0002 7.99998L1.33354 5.33331H2.53354C2.6002 5.33331 2.73354 5.39998 2.8002 5.46665L3.86687 6.66665H7.06687L4.93354 1.79998C4.8002 1.59998 4.93354 1.33331 5.2002 1.33331L6.33354 1.33331C6.53354 1.33331 6.73354 1.46665 6.86687 1.59998L10.2002 6.66665H13.3335C14.0669 6.66665 14.6669 7.26665 14.6669 7.99998C14.6669 8.73331 14.0669 9.33331 13.3335 9.33331H10.2002L6.86687 14.4C6.73354 14.6 6.53354 14.6666 6.33354 14.6666H5.2002C4.93354 14.6666 4.8002 14.4 4.86687 14.2L7.0002 9.33331H3.8002L2.73354 10.5333C2.66687 10.6 2.6002 10.6666 2.46687 10.6666H1.33354L2.0002 7.99998Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_436_164">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
