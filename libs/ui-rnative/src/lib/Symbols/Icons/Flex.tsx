import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Flex icon component for React Native.
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
 * import { Flex } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Flex />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Flex size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Flex} size="md">
 *   Click me
 * </Button>
 */
export const Flex = createIcon(
  "Flex",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M9 10.5v.5h1v-.5H9m-7 0v.5h1v-.5H2m2.125-.5h-.5v1h.5v-1m3.75 1h.5v-1h-.5v1m-3.75-1.5a.5.5 0 0 0 0 1v-1m3.75 1a.5.5 0 0 0 0-1v1m1.625 0h.5V5H9v5.5zm0-5.5h.5V3.5H9V5zm0-1.5h.5V3H9v.5zM8 1.5V1H4v1h4zM2.5 3H2v7.5h1V3zM4 1.5V1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1zM9.5 3h.5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1zm0 .5V4h.35V3H9.5zm.45.1h-.5v1.3h1V3.6zM9.85 5v-.5H9.5v1h.35zm.1-.1h-.5c0-.22.18-.4.4-.4v1a.6.6 0 0 0 .6-.6zm-.1-1.4V4a.4.4 0 0 1-.4-.4h1a.6.6 0 0 0-.6-.6zm-5.725 7v.5h3.75v-1h-3.75zm0-.5v.5h3.75v-1h-3.75z"
    />
  </Svg>
);
