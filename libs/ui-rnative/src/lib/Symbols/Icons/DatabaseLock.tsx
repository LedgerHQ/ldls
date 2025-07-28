import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * DatabaseLock icon component for React Native.
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
 * import { DatabaseLock } from '@ldls/ui-rnative/symbols';
 *
 * <DatabaseLock />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <DatabaseLock size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={DatabaseLock} size="md">
 *   Click me
 * </Button>
 */
export const DatabaseLock = createIcon(
  "DatabaseLock",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.66663 9.40668C2.66663 10.38 4.91329 11.1667 7.68663 11.1667M12.6666 3.76001C12.6666 4.73335 10.4266 5.52001 7.66663 5.52001C4.89996 5.52001 2.66663 4.72668 2.66663 3.75335M12.6666 6.58668C12.6666 7.56001 10.4266 8.34668 7.66663 8.34668C4.89996 8.34668 2.66663 7.55335 2.66663 6.58001M13.1486 12V11.1467C13.1486 10.54 12.6286 9.99335 11.9953 9.99335C11.3553 9.99335 10.842 10.5067 10.842 11.14V11.9867M7.69063 14C4.91596 14 2.66663 13.2067 2.66663 12.2333V3.76001C2.66663 2.78001 4.89996 1.99335 7.66663 1.99335C10.4266 1.99335 12.6666 2.78001 12.6666 3.75335V7.98668M13.3506 14.6667H10.6493C10.2893 14.6667 9.99596 14.3733 9.99596 14.0133V12.64C9.99596 12.28 10.2826 11.9867 10.6426 11.9867H13.344C13.6973 11.9867 13.9906 12.2733 13.9906 12.6333V14C13.9906 14.3533 13.6973 14.6467 13.3373 14.6467L13.3506 14.6667Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
