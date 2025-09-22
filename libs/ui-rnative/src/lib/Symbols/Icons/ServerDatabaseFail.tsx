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
 * import { ServerDatabaseFail } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ServerDatabaseFail />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <ServerDatabaseFail size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={ServerDatabaseFail} size="md">
 *   Click me
 * </Button>
 */
export const ServerDatabaseFail = createIcon(
  "ServerDatabaseFail",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.75 4.75C2.75 2.951 4.2 1.5 6 1.5c1.795 0 3.25 1.45 3.25 3.25m-6.5 0a3.25 3.25 0 1 0 6.5 0m-6.5 0h6.5m-4 4.5 1.5 1.5m-1.5 0 1.5-1.5M8 10h2m-8 0h2m1.338-8.117a5.64 5.64 0 0 0 0 5.735.76.76 0 0 0 1.32 0 5.66 5.66 0 0 0 0-5.735.765.765 0 0 0-1.325-.001z"
    />
  </Svg>
);
