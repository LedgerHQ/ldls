import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * HandCoins icon component for React Native.
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
 * import { HandCoins } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <HandCoins />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <HandCoins size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={HandCoins} size="md">
 *   Click me
 * </Button>
 */
export const HandCoins = createIcon(
  "HandCoins",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.485 9.98h.755c.16 0 .325.02.485.06l1.325.335c.29.075.585.08.88.025l1.465-.29c.39-.08.745-.27 1.025-.545l1.04-1.035a.757.757 0 0 0-.99-1.14l-1.205.91c-.175.13-.385.2-.6.2H6.5h.74c.415 0 .755-.34.755-.76v-.155c0-.35-.24-.655-.575-.735l-1.146-.29a2.364 2.364 0 0 0-1.875.32l-.91.605m5.091-4.91c.55.55.55 1.45 0 2.005a1.43 1.43 0 0 1-2.01 0 1.42 1.42 0 0 1 0-2.01 1.415 1.415 0 0 1 2.005 0m-1.26-.382a1.46 1.46 0 0 0-.395-.775 1.419 1.419 0 0 0-2.006 2.005c.345.345.82.47 1.265.39M3 10.5H2a.5.5 0 0 1-.5-.5V7c0-.28.22-.5.5-.5h1c.275 0 .5.22.5.5v3c0 .275-.225.5-.5.5"
    />
  </Svg>
);
