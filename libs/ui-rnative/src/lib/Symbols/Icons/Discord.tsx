import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Discord icon component for React Native.
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
 * import { Discord } from '@ldls/ui-rnative/symbols';
 *
 * <Discord />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Discord size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Discord} size="md">
 *   Click me
 * </Button>
 */
export const Discord = createIcon(
  "Discord",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.6279 4.11497C11.7519 3.74455 10.8271 3.48176 9.87715 3.33331C9.74716 3.54794 9.62954 3.76876 9.52478 3.99486C8.51289 3.85403 7.48387 3.85403 6.47198 3.99486C6.36718 3.76879 6.24956 3.54797 6.11962 3.33331C5.16905 3.48301 4.24365 3.74642 3.36675 4.1169C1.62589 6.49576 1.15397 8.81553 1.38993 11.1024C2.40942 11.7981 3.55053 12.3272 4.76364 12.6666C5.03679 12.3273 5.2785 11.9674 5.4862 11.5905C5.09171 11.4545 4.71095 11.2866 4.34835 11.0888C4.44378 11.0249 4.53711 10.959 4.6273 10.8951C5.68241 11.3534 6.834 11.591 7.99996 11.591C9.16591 11.591 10.3175 11.3534 11.3726 10.8951C11.4638 10.9639 11.5572 11.0297 11.6516 11.0888C11.2883 11.2869 10.9068 11.4551 10.5116 11.5915C10.7191 11.9681 10.9608 12.3278 11.2342 12.6666C12.4483 12.3285 13.5903 11.7997 14.61 11.1033C14.8868 8.45134 14.137 6.15288 12.6279 4.11497ZM5.78508 9.69598C5.12754 9.69598 4.58431 9.14485 4.58431 8.46684C4.58431 7.78883 5.10866 7.23286 5.78298 7.23286C6.4573 7.23286 6.99634 7.78883 6.9848 8.46684C6.97327 9.14485 6.45521 9.69598 5.78508 9.69598ZM10.2148 9.69598C9.55624 9.69598 9.01511 9.14485 9.01511 8.46684C9.01511 7.78883 9.53946 7.23286 10.2148 7.23286C10.8902 7.23286 11.425 7.78883 11.4135 8.46684C11.402 9.14485 10.885 9.69598 10.2148 9.69598Z"
      fill="currentColor"
    />
  </Svg>
);
