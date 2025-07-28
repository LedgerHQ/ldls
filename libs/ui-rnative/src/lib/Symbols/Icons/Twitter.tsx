import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Twitter icon component for React Native.
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
 * import { Twitter } from '@ldls/ui-rnative/symbols';
 *
 * <Twitter />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Twitter size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Twitter} size="md">
 *   Click me
 * </Button>
 */
export const Twitter = createIcon(
  "Twitter",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.3319 6.92804L14.5437 1H13.3087L8.78327 6.14724L5.16883 1H1L6.46574 8.78354L1 15H2.2351L7.01406 9.56434L10.8312 15H15L9.3316 6.92804H9.3319ZM7.64026 8.85211L7.08647 8.07705L2.68013 1.90978H4.57717L8.13314 6.88696L8.68693 7.66202L13.3093 14.1316H11.4122L7.64026 8.85241V8.85211Z"
      fill="currentColor"
    />
  </Svg>
);
