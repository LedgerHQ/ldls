import Svg, { G, Mask, Path, Circle, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldCheckNotification icon component for React Native.
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
 * import { ShieldCheckNotification } from '@ldls/ui-rnative/symbols';
 *
 * <ShieldCheckNotification />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldCheckNotification size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ShieldCheckNotification} size="md">
 *   Click me
 * </Button>
 */
export const ShieldCheckNotification = createIcon(
  "ShieldCheckNotification",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_369)">
      <Mask
        id="mask0_3_369"
        width={12}
        height={12}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <Path fill="#D9D9D9" d="M7.128 0A3.5 3.5 0 0 0 12 4.871V12H0V0z" />
      </Mask>
      <G mask="url(#mask0_3_369)">
        <Path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.625 5.063 5.75 6.938 4.625 5.813M10 5.59c0 2.27-1.71 4.394-4 4.909-2.293-.52-4-2.64-4-4.909V3.808c0-.41.245-.775.62-.93l2.5-1.025a2.27 2.27 0 0 1 1.755 0l2.5 1.02c.375.15.62.515.62.925V5.58z"
        />
      </G>
      <Circle cx={10} cy={2} r={2} fill="#D4A0FF" />
    </G>
    <Defs>
      <ClipPath id="clip0_3_369">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
