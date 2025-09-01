import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Delete icon component for React Native.
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
 * import { Delete } from '@ldls/ui-rnative/symbols';
 *
 * <Delete />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Delete size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Delete} size="md">
 *   Click me
 * </Button>
 */
export const Delete = createIcon(
  "Delete",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.113 4.937 5.988 7.063m2.125 0L5.988 4.937M3.06 3.098 1.43 5.383c-.264.369-.264.866 0 1.235L3.06 8.902c.2.28.522.445.865.445h5.782c.587 0 1.062-.475 1.062-1.063V3.716c0-.588-.475-1.063-1.062-1.063H3.925c-.343 0-.665.166-.865.445"
    />
  </Svg>
);
