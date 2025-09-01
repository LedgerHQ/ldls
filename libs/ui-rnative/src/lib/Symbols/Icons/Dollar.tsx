import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Dollar icon component for React Native.
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
 * import { Dollar } from '@ldls/ui-rnative/symbols';
 *
 * <Dollar />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Dollar size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Dollar} size="md">
 *   Click me
 * </Button>
 */
export const Dollar = createIcon(
  "Dollar",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_300)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3.75v.5m0 4v-.5m-1.075-.625c.195.405.62.65 1.07.625a1.03 1.03 0 0 0 1.125-.875c0-.38-.27-.705-.64-.78l-.98-.2a.79.79 0 0 1-.64-.78c.074-.55.574-.94 1.124-.875.45-.03.87.215 1.07.625M6 1.245a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_300">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
