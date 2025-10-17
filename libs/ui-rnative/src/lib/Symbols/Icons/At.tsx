import Svg, { Path } from "react-native-svg";
import createIcon from '../../Components/Icon/createIcon';

/**
 * At icon component for React Native.
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
 * import { At } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <At />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <At size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={At} size="md">
 *   Click me
 * </Button>
 */
;
export const At = createIcon("At", <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16"><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M11.333 14H8a6 6 0 1 1 6-6v1a1.666 1.666 0 1 1-3.333 0V8m0 0a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0" /></Svg>);