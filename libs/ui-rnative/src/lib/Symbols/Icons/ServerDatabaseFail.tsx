import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * ServerDatabaseFail icon component for React Native.
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
 * import { ServerDatabaseFail } from '@ldls/ui-rnative/symbols';
 *
 * <ServerDatabaseFail />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ServerDatabaseFail size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={ServerDatabaseFail} size="md">
 *   Click me
 * </Button>
 */
export const ServerDatabaseFail = createIcon(
  "ServerDatabaseFail",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M3.66669 6.33329C3.66669 3.93463 5.60002 1.99996 8.00002 1.99996C10.3934 1.99996 12.3334 3.93329 12.3334 6.33329M3.66669 6.33329C3.66669 8.72663 5.60002 10.6666 8.00002 10.6666C10.3934 10.6666 12.3334 8.72663 12.3334 6.33329M3.66669 6.33329H12.3334M7.00002 12.3333L9.00002 14.3333M7.00002 14.3333L9.00002 12.3333M10.6667 13.3333H13.3334M2.66669 13.3333H5.33335M7.11802 2.50996C5.72469 4.83329 5.72469 7.82996 7.11802 10.1566C7.52469 10.8366 8.47135 10.8366 8.87802 10.1566C10.2647 7.82996 10.2647 4.83329 8.87802 2.50996C8.46469 1.82996 7.51802 1.82996 7.11135 2.50929L7.11802 2.50996Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
