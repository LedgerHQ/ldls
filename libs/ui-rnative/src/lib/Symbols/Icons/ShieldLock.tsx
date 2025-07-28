import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldLock icon component for React Native.
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
 * import { ShieldLock } from '@ldls/ui-rnative/symbols';
 *
 * <ShieldLock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ShieldLock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ShieldLock} size="md">
 *   Click me
 * </Button>
 */
export const ShieldLock = createIcon(
  "ShieldLock",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.01796 7.41665V6.51665C9.01796 5.95465 8.55796 5.49665 7.99796 5.49665C7.43596 5.49665 6.97796 5.94999 6.97796 6.50999V7.40332M9.16663 7.41332H6.83329C6.45996 7.41332 6.16663 7.70665 6.16663 8.07999V9.49332C6.16663 9.85999 6.45996 10.16 6.83329 10.16H9.16663C9.53329 10.16 9.83329 9.85999 9.83329 9.49332V8.07332C9.83329 7.69999 9.53329 7.40665 9.16663 7.40665V7.41332ZM13.3333 7.49332C13.3333 10.4053 11.2286 13.1333 8.34663 13.9467C8.11996 14.0067 7.87863 14.0067 7.65329 13.9467C4.76663 13.1267 2.66663 10.4 2.66663 7.48665V4.79999C2.66663 4.25332 2.99329 3.76665 3.49329 3.56599L6.73329 2.23932C7.53996 1.90599 8.44929 1.90599 9.25329 2.23932L12.4933 3.56599C12.9933 3.76599 13.32 4.25265 13.32 4.79999V7.48532L13.3333 7.49332Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
