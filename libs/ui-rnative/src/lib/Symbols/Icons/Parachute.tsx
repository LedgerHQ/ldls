import Svg, { Path } from "react-native-svg";
import createIcon from '../../Components/Icon/createIcon';

/**
 * Parachute icon component for React Native.
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
 * import { Parachute } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <Parachute />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <Parachute size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={Parachute} size="md">
 *   Click me
 * </Button>
 */
;
export const Parachute = createIcon("Parachute", <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16"><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M2 6.667a5.68 5.68 0 0 1 6 0m-6 0C2 3.72 4.686 1.333 8 1.333s6 2.388 6 5.334m-12 0L8 10m0-3.333a5.68 5.68 0 0 1 6 0m-6 0V10m6-3.333L8 10m-2.333 4.667h4.666a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H5.667a1 1 0 0 0-1 1v2.667a1 1 0 0 0 1 1M6.9 10h2.2v1.667c0 .184-.15.333-.333.333H7.233a.333.333 0 0 1-.333-.333z" /></Svg>);