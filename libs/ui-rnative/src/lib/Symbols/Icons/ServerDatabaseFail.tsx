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
      d="M3.66669 6.33332C3.66669 3.93466 5.60002 1.99999 8.00002 1.99999C10.3934 1.99999 12.3334 3.93332 12.3334 6.33332M3.66669 6.33332C3.66669 8.72666 5.60002 10.6667 8.00002 10.6667C10.3934 10.6667 12.3334 8.72666 12.3334 6.33332M3.66669 6.33332H12.3334M7.00002 12.3333L9.00002 14.3333M7.00002 14.3333L9.00002 12.3333M10.6667 13.3333H13.3334M2.66669 13.3333H5.33335M7.11802 2.50999C5.72469 4.83333 5.72469 7.82999 7.11802 10.1567C7.52469 10.8367 8.47135 10.8367 8.87802 10.1567C10.2647 7.82999 10.2647 4.83333 8.87802 2.50999C8.46469 1.82999 7.51802 1.82999 7.11135 2.50933L7.11802 2.50999Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
