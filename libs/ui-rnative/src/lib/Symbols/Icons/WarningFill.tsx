import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * WarningFill icon component for React Native.
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
 * import { WarningFill } from '@ldls/ui-rnative/symbols';
 *
 * <WarningFill />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <WarningFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={WarningFill} size="md">
 *   Click me
 * </Button>
 */
export const WarningFill = createIcon(
  "WarningFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.77297 2.50564C8.98349 1.11762 6.98419 1.11381 6.19838 2.50662L6.19765 2.50793L1.09992 11.4411C0.315661 12.8131 1.30623 14.5207 2.88662 14.5207H13.0993C14.6752 14.5207 15.6714 12.8088 14.8866 11.441L9.77297 2.50564ZM8.5002 6.25336C8.5002 5.97721 8.27634 5.75336 8.0002 5.75336C7.72406 5.75336 7.5002 5.97721 7.5002 6.25336V8.74669C7.5002 9.02283 7.72406 9.24669 8.0002 9.24669C8.27634 9.24669 8.5002 9.02283 8.5002 8.74669V6.25336ZM7.99353 10.25L7.99015 10.25L7.98686 10.25C7.97296 10.25 7.95919 10.2506 7.94558 10.2517C7.59868 10.2761 7.32686 10.5633 7.32686 10.9167C7.32686 11.2665 7.61123 11.5834 7.99353 11.5834C8.19029 11.5834 8.35414 11.4949 8.46292 11.3861C8.57169 11.2773 8.6602 11.1135 8.6602 10.9167C8.6602 10.5435 8.36527 10.2799 8.04254 10.2524C8.02641 10.2508 8.01007 10.25 7.99353 10.25Z"
      fill="currentColor"
    />
  </Svg>
);
