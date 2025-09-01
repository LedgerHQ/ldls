import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Reddit icon component for React Native.
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
 * import { Reddit } from '@ldls/ui-rnative/symbols';
 *
 * <Reddit />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Reddit size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Reddit} size="md">
 *   Click me
 * </Button>
 */
export const Reddit = createIcon(
  "Reddit",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G fill="currentColor" clipPath="url(#clip0_3_410)">
      <Path d="M4.797 6.06a.55.55 0 0 0-.547.553.55.55 0 0 0 .547.552.55.55 0 0 0 .546-.552.55.55 0 0 0-.546-.552M6.006 8.473c.209 0 .921-.024 1.296-.403a.16.16 0 0 0 .012-.204.144.144 0 0 0-.202 0c-.24.235-.737.322-1.1.322-.362 0-.865-.087-1.099-.322a.144.144 0 0 0-.202 0 .147.147 0 0 0 0 .204c.368.372 1.086.403 1.295.403M6.657 6.613a.55.55 0 0 0 .547.552.55.55 0 0 0 .546-.552.55.55 0 0 0-.546-.552.55.55 0 0 0-.547.552" />
      <Path
        fillRule="evenodd"
        d="M11.25 6.06c0 2.93-2.35 5.304-5.25 5.304S.75 8.989.75 6.06C.75 3.13 3.1.758 6 .758s5.25 2.374 5.25 5.303m-2.517-.775c.423 0 .767.348.767.776 0 .316-.19.589-.442.713q.018.11.018.23c0 1.19-1.369 2.152-3.064 2.152-1.694 0-3.064-.962-3.064-2.153q0-.121.019-.235a.77.77 0 0 1-.455-.707c0-.428.344-.776.768-.776a.77.77 0 0 1 .528.217c.528-.39 1.259-.632 2.075-.657l.387-1.848a.15.15 0 0 1 .062-.087.15.15 0 0 1 .104-.019l1.271.273a.53.53 0 0 1 .485-.31c.301 0 .547.248.547.552a.55.55 0 0 1-.547.552.55.55 0 0 1-.546-.527L6.51 3.189l-.35 1.656c.798.031 1.523.28 2.044.657a.73.73 0 0 1 .529-.217"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_410">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
