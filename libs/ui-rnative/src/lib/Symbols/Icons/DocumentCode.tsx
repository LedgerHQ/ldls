import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * DocumentCode icon component for React Native.
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
 * import { DocumentCode } from '@ldls/ui-rnative/symbols';
 *
 * <DocumentCode />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DocumentCode size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={DocumentCode} size="md">
 *   Click me
 * </Button>
 */
export const DocumentCode = createIcon(
  "DocumentCode",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.5 4.5.75-.75L3.5 3M3 8.5v-1m6.75 3H2.5a1 1 0 0 1-1-1V9c0-.28.22-.5.5-.5h6.5c.275 0 .5.22.5.5v.75c0 .41.335.75.75.75m0 0c.41 0 .75-.34.75-.75V2.5a1 1 0 0 0-1-1h-2m-4.75 0h2C5.44 1.5 6 2.06 6 2.75v2C6 5.44 5.44 6 4.75 6h-2C2.06 6 1.5 5.44 1.5 4.75v-2c0-.69.56-1.25 1.25-1.25"
    />
  </Svg>
);
