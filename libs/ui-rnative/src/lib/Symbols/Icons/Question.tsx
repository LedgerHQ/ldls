import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Question icon component for React Native.
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
 * import { Question } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Question />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Question size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Question} size="md">
 *   Click me
 * </Button>
 */
export const Question = createIcon(
  "Question",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.84 4.84c.115-.515.58-.865 1.105-.845a1.066 1.066 0 0 1 1.125 1c0 .75-1.075 1-1.075 1.5M6 7.8a.06.06 0 0 0-.062.063c0 .033.027.062.062.062a.064.064 0 0 0 .063-.062.063.063 0 0 0-.064-.063M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
    />
  </Svg>
);
