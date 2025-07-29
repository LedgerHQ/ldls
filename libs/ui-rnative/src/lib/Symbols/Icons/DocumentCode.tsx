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
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.66667 6L5.66667 5L4.66667 4M4 11.3333V10M13 14H3.33333C2.59333 14 2 13.4 2 12.6667V12C2 11.6267 2.29333 11.3333 2.66667 11.3333H11.3333C11.7 11.3333 12 11.6267 12 12V13C12 13.5467 12.4467 14 13 14ZM13 14C13.5467 14 14 13.5467 14 13V3.33333C14 2.59333 13.4 2 12.6667 2H10M3.66667 2H6.33333C7.25381 2 8 2.74619 8 3.66667V6.33333C8 7.25381 7.25381 8 6.33333 8H3.66667C2.74619 8 2 7.25381 2 6.33333V3.66667C2 2.74619 2.74619 2 3.66667 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
