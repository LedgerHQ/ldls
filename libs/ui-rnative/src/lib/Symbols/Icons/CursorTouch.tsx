import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * CursorTouch icon component for React Native.
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
 * import { CursorTouch } from '@ldls/ui-rnative/symbols';
 *
 * <CursorTouch />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CursorTouch size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={CursorTouch} size="md">
 *   Click me
 * </Button>
 */
export const CursorTouch = createIcon(
  "CursorTouch",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.605 4h.5m5.5 0h-.5m-.38-2.12-.355.35m-3.89-.35.355.35M5.605 1v.5m.748 5V4.25a.749.749 0 1 0-1.5 0V8l-1.02-.34a.824.824 0 0 0-.79 1.413l2.025 1.685c.18.145.405.23.64.23h2.255c.5 0 .93-.38.99-.88l.27-2.172a1 1 0 0 0-.83-1.11l-2.055-.345z"
    />
  </Svg>
);
