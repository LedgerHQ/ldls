import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * SoftRepair icon component for React Native.
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
 * import { SoftRepair } from '@ldls/ui-rnative/symbols';
 *
 * <SoftRepair />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <SoftRepair size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={SoftRepair} size="md">
 *   Click me
 * </Button>
 */
export const SoftRepair = createIcon(
  "SoftRepair",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.00001 6H14M7.33335 3.99667H7.32668V3.99L7.32001 3.98333M5.66668 3.99667H5.66001V3.99L5.65335 3.98333M4.00001 3.99667H3.99335V3.99L3.98668 3.98333M14 7V4C14 2.89333 13.1 2 12 2H4C2.89333 2 2 2.89333 2 4V12.0002C2 13.1048 2.89543 14 4 14H7.33333M14.0001 12.5773C13.9001 12.8773 13.7268 13.1506 13.5068 13.3773C12.6735 14.204 11.3201 14.204 10.4868 13.3706C10.3401 13.224 10.2135 13.0573 10.1201 12.8773M13.8733 10.84C13.3067 9.8 12.0133 9.42 10.9733 9.98C10.7933 10.0733 10.6267 10.2 10.48 10.34C10.2533 10.56 10.0867 10.8333 9.98667 11.14M13.0554 10.8461H13.9954V9.89941M10.9467 12.8867H10V13.8267"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
