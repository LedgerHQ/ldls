import Svg, { Path } from "react-native-svg";
import createIcon from '../../Components/Icon/createIcon';

/**
 * ClockFill icon component for React Native.
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
 * import { ClockFill } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <ClockFill />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <ClockFill size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={ClockFill} size="md">
 *   Click me
 * </Button>
 */
;
export const ClockFill = createIcon("ClockFill", <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16"><Path fill="currentColor" fillRule="evenodd" d="M1.5 8c0-3.596 2.91-6.5 6.5-6.5a6.5 6.5 0 1 1 0 13c-3.596 0-6.5-2.91-6.5-6.5" clipRule="evenodd" /><Path fill="currentColor" d="M11.1 8H8zM8 8V4.267z" /><Path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M11.1 8H8V4.267" /></Svg>);