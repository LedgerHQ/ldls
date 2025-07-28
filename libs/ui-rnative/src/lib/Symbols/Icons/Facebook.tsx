import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Facebook icon component for React Native.
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
 * import { Facebook } from '@ldls/ui-rnative/symbols';
 *
 * <Facebook />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Facebook size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Facebook} size="md">
 *   Click me
 * </Button>
 */
export const Facebook = createIcon(
  "Facebook",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M15 8.04352C15 4.15544 11.8641 1 8 1C4.13594 1 1 4.15544 1 8.04352C1 11.5617 3.55922 14.4777 6.91143 15V10.0746H5.12358V8.04352H6.91143V6.49119C6.91143 4.7285 7.94954 3.74922 9.54995 3.74922C10.3141 3.74922 11.1071 3.8943 11.1071 3.8943V5.61347H10.2276C9.3553 5.61347 9.08136 6.16477 9.08136 6.71606V8.03627H11.0278L10.7178 10.0674H9.08136V14.9927C12.4408 14.4777 15 11.5617 15 8.04352Z"
      fill="currentColor"
    />
  </Svg>
);
