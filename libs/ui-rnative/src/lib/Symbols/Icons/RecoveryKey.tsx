import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * RecoveryKey icon component for React Native.
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
 * import { RecoveryKey } from '@ldls/ui-rnative/symbols';
 *
 * <RecoveryKey />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <RecoveryKey size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={RecoveryKey} size="md">
 *   Click me
 * </Button>
 */
export const RecoveryKey = createIcon(
  "RecoveryKey",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_7062_10)">
      <Path
        d="M6.33337 4.66668H4.66671V5.66668M6.33337 11.3333H4.66671V10.3333M9.66671 4.66668H11.3334V5.66668M9.66671 11.3333H11.3334V10.3333M3.33337 14.6667H12.6667C13.7713 14.6667 14.6667 13.7712 14.6667 12.6667V3.33334C14.6667 2.22877 13.7713 1.33334 12.6667 1.33334H3.33337C2.2288 1.33334 1.33337 2.22877 1.33337 3.33334V12.6667C1.33337 13.7712 2.2288 14.6667 3.33337 14.6667Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_7062_10">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
