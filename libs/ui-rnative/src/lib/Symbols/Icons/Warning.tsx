import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Warning icon component for React Native.
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
 * import { Warning } from '@ldls/ui-rnative/symbols';
 *
 * <Warning />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Warning size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Warning} size="md">
 *   Click me
 * </Button>
 */
export const Warning = createIcon(
  "Warning",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.00001 8.74668V6.25335M7.99335 10.75C7.90001 10.75 7.82668 10.8233 7.82668 10.9167C7.82668 11.0033 7.90001 11.0833 7.99335 11.0833C8.08001 11.0833 8.16001 11.0033 8.16001 10.9167C8.16001 10.8233 8.08001 10.75 7.98668 10.75M9.35268 2.75335L14.4527 11.6893C15.046 12.7227 14.2927 14.0207 13.0993 14.0207H2.88668C1.69001 14.0207 0.940014 12.728 1.53401 11.6893L6.63335 2.75335C7.22668 1.70002 8.74001 1.70002 9.33868 2.75335H9.35268Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
