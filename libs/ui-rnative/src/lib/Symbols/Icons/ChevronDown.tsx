import Svg, { Path } from "react-native-svg";
import createIcon from '../../Components/Icon/createIcon';

/**
 * ChevronDown icon component for React Native.
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
 * import { ChevronDown } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <ChevronDown />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <ChevronDown size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={ChevronDown} size="md">
 *   Click me
 * </Button>
 */
;
export const ChevronDown = createIcon("ChevronDown", <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16"><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M5.333 6.667 8 9.333l2.667-2.666" /></Svg>);