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
 * BellNotification icon component for React Native.
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
 * import { BellNotification } from '@ldls/ui-rnative/symbols';
 *
 * <BellNotification />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <BellNotification size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={BellNotification} size="md">
 *   Click me
 * </Button>
 */
export const BellNotification = createIcon(
  "BellNotification",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_3_362)">
      <G clipPath="url(#clip1_3_362)">
        <Mask
          id="mask0_3_362"
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
            d="M16 16H0V0H7.75879C7.27996 0.715142 7 1.57472 7 2.5C7 4.98528 9.01472 7 11.5 7C13.9853 7 16 4.98528 16 2.5C16 1.57472 15.72 0.715142 15.2412 0H16V16Z"
            fill="currentColor"
          />
        </Mask>
        <G mask="url(#mask0_3_362)">
          <Path
            d="M6.00016 12V12.1667C6.00016 13.2667 6.89349 14.1667 8.00016 14.1667C9.10016 14.1667 10.0002 13.2667 10.0002 12.1667V12M12.0002 9.16669L13.1335 10.3C13.2535 10.42 13.3268 10.5934 13.3268 10.7667V11.32C13.3268 11.6867 13.0268 11.9867 12.6602 11.9867H7.99349H3.32682C2.95349 11.9867 2.66016 11.6867 2.66016 11.32V10.76C2.66016 10.58 2.72682 10.4134 2.85349 10.2867L3.98682 9.14669V6.31335C3.98682 4.10002 5.77349 2.31335 7.98682 2.31335C10.1935 2.31269 11.9868 4.10002 11.9868 6.31335L12.0002 9.16669Z"
            stroke="currentColor"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
      <Circle cx={11.5} cy={2.5} r={2.5} fill="#C24244" />
    </G>
    <Defs>
      <ClipPath id="clip0_3_362">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_3_362">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
