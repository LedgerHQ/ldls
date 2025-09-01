import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * AutoLock icon component for React Native.
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
 * import { AutoLock } from '@ldls/ui-rnative/symbols';
 *
 * <AutoLock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <AutoLock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={AutoLock} size="md">
 *   Click me
 * </Button>
 */
export const AutoLock = createIcon(
  "AutoLock",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_152)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.195 3.5v2.695h-2.2M10.47 5.5a4.51 4.51 0 0 0-4.975-3.975 4.497 4.497 0 0 0-.005 8.94M8.625 9h1.75m-1.75 0A.625.625 0 0 0 8 9.625v.75c0 .345.28.625.625.625h1.75c.345 0 .625-.28.625-.625v-.75A.625.625 0 0 0 10.375 9m-1.75 0v-.625a.876.876 0 0 1 1.75 0V9"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_152">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
