import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Signature icon component for React Native.
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
 * import { Signature } from '@ldls/ui-rnative/symbols';
 *
 * <Signature />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Signature size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Signature} size="md">
 *   Click me
 * </Button>
 */
export const Signature = createIcon(
  "Signature",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.00635 12.6667H13.0064M2.35642 5.36719C2.11913 4.97024 1.99582 4.51557 2.00005 4.05312C1.90491 3.02941 2.64531 2.11733 3.66672 2C5.50766 2 7.00005 4.68629 7.00005 8C7.00005 11.3137 5.6569 14 4.00005 14H4.00142C3.08019 14 2.33338 12.8061 2.33338 11.3333C2.33397 9.91826 2.89666 8.56138 3.89767 7.56119C4.89869 6.56099 6.25603 5.99942 7.6711 6H7.66672C9.04475 6.09832 10.0861 7.28886 10.0001 8.66771C9.99334 9.34735 9.88064 10.0218 9.66599 10.6667C10.8656 7.05764 12.0005 6.66667 12.667 6.66667C13.0206 6.6667 13.3597 6.8072 13.6097 7.05725C13.8597 7.3073 14.0001 7.64642 14.0001 8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
