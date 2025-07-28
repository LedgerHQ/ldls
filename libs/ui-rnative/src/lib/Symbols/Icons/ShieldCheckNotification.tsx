import Svg, {
  G,
  Mask,
  Path,
  Circle,
  Defs,
  ClipPath,
  Rect,
} from "react-native-svg";
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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_3_369)">
      <Mask
        id="mask0_3_369"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}
      >
        <Path
          d="M9.50488 0C8.97728 0.756045 8.66699 1.67513 8.66699 2.66699C8.66717 5.24406 10.7559 7.33283 13.333 7.33301C14.3249 7.33301 15.244 7.02272 16 6.49512V16H0V0H9.50488Z"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_3_369)">
        <Path
          d="M10.1666 6.75002L7.66663 9.25002L6.16663 7.75002M13.3333 7.45468C13.3333 10.482 11.0533 13.3127 7.99996 14C4.94196 13.3067 2.66663 10.48 2.66663 7.45468V5.07668C2.66663 4.53002 2.99329 4.04335 3.49329 3.83668L6.82663 2.47002C7.57329 2.15668 8.41863 2.15668 9.16663 2.47002L12.5 3.83002C13 4.03002 13.3266 4.51668 13.3266 5.06335V7.44135L13.3333 7.45468Z"
          stroke="currentColor"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Circle cx={13.3333} cy={2.66667} r={2.66667} fill="#D4A0FF" />
    </G>
    <Defs>
      <ClipPath id="clip0_3_369">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
