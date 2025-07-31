import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Support icon component for React Native.
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
 * import { Support } from '@ldls/ui-rnative/symbols';
 *
 * <Support />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Support size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Support} size="md">
 *   Click me
 * </Button>
 */
export const Support = createIcon(
  "Support",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12.333 6.667v-.334a4.333 4.333 0 1 0-8.666 0v.334m5.583 6.666a.834.834 0 0 0-.833-.833h-.834a.834.834 0 0 0 0 1.667h.834c.46 0 .833-.374.833-.834m0 0h1.413c.734 0 1.334-.6 1.334-1.333v-.667m.67 0H12a.664.664 0 0 1-.667-.666V7.333A.66.66 0 0 1 12 6.667h.667C13.4 6.667 14 7.26 14 8v2c0 .733-.6 1.333-1.333 1.333m-8.667 0h-.667C2.597 11.333 2 10.733 2 10V8c0-.74.597-1.333 1.333-1.333H4c.367 0 .667.293.667.666v3.334c0 .366-.3.666-.667.666"
    />
  </Svg>
);
