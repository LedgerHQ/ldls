import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * P2p icon component for React Native.
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
 * import { P2p } from '@ldls/ui-rnative/symbols';
 *
 * <P2p />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <P2p size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={P2p} size="md">
 *   Click me
 * </Button>
 */
export const P2p = createIcon(
  "P2p",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14.0024 10.0009V9.33391C14.0122 8.80031 13.8046 8.28569 13.4272 7.90831C13.0498 7.53094 12.5352 7.32329 12.0016 7.33307H10.6677M7.9999 10.0009V9.33391C8.00969 8.80031 7.80203 8.28569 7.42466 7.90831C7.04729 7.53094 6.53266 7.32329 5.99907 7.33307H3.99823C3.46464 7.32329 2.95001 7.53094 2.57264 7.90831C2.19527 8.28569 1.98761 8.80031 1.9974 9.33391V10.0009M12.0016 13.4052V11.7005H10.2729M3.99821 11.7005C4.7708 13.1194 6.25718 14.0025 7.87278 14.0025C9.48837 14.0025 10.9748 13.1194 11.7473 11.7005M6.66602 3.66486C6.66602 4.58572 5.91952 5.33222 4.99866 5.33222C4.0778 5.33222 3.3313 4.58572 3.3313 3.66486C3.3313 2.744 4.0778 1.9975 4.99866 1.9975C5.91952 1.9975 6.66602 2.744 6.66602 3.66486ZM12.6685 3.99834C12.6685 4.73502 12.0713 5.33223 11.3346 5.33223C10.5979 5.33223 10.0007 4.73502 10.0007 3.99834C10.0007 3.26165 10.5979 2.66445 11.3346 2.66445C12.0713 2.66445 12.6685 3.26165 12.6685 3.99834Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
