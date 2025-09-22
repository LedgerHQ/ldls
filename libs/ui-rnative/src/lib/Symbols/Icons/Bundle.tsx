import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Bundle icon component for React Native.
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
 * import { Bundle } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Bundle />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Bundle size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Bundle} size="md">
 *   Click me
 * </Button>
 */
export const Bundle = createIcon(
  "Bundle",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.2 2.4h.6a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-.6m2.7-7.2h.6a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-.6m-8.1 0h3.3a.6.6 0 0 0 .6-.6V3a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v6a.6.6 0 0 0 .6.6Z"
    />
  </Svg>
);
