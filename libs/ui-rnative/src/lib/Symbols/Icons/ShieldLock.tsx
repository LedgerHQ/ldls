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
      d="M9.01796 7.41671V6.51671C9.01796 5.95471 8.55796 5.49671 7.99796 5.49671C7.43596 5.49671 6.97796 5.95005 6.97796 6.51005V7.40338M9.16663 7.41338H6.83329C6.45996 7.41338 6.16663 7.70671 6.16663 8.08005V9.49338C6.16663 9.86005 6.45996 10.16 6.83329 10.16H9.16663C9.53329 10.16 9.83329 9.86005 9.83329 9.49338V8.07338C9.83329 7.70005 9.53329 7.40671 9.16663 7.40671V7.41338ZM13.3333 7.49338C13.3333 10.4054 11.2286 13.1334 8.34663 13.9467C8.11996 14.0067 7.87863 14.0067 7.65329 13.9467C4.76663 13.1267 2.66663 10.4 2.66663 7.48671V4.80005C2.66663 4.25338 2.99329 3.76671 3.49329 3.56605L6.73329 2.23938C7.53996 1.90605 8.44929 1.90605 9.25329 2.23938L12.4933 3.56605C12.9933 3.76605 13.32 4.25271 13.32 4.80005V7.48538L13.3333 7.49338Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
