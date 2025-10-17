import Svg, { Path } from "react-native-svg";
import createIcon from '../../Components/Icon/createIcon';

/**
 * CoinsCheck icon component for React Native.
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
 * import { CoinsCheck } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <CoinsCheck />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <CoinsCheck size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={CoinsCheck} size="md">
 *   Click me
 * </Button>
 */
;
export const CoinsCheck = createIcon("CoinsCheck", <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16"><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M5.333 12C3.493 12 2 11.4 2 10.667V5.333m0 0c0-.353.351-.692.976-.942S4.45 4 5.333 4s1.732.14 2.357.39.977.59.977.943M2 5.333c0 .354.351.693.976.943s1.473.39 2.357.39 1.732-.14 2.357-.39.977-.59.977-.943M7.333 10c0 .733 1.487 1.333 3.334 1.333 1.84 0 3.333-.6 3.333-1.333m-6.667 0v2.667C7.333 13.4 8.82 14 10.667 14c1.84 0 3.333-.6 3.333-1.333V10m-6.667 0c0-.74 1.487-1.333 3.334-1.333C12.507 8.667 14 9.26 14 10M8.667 5.333V7M5.333 9.333C3.493 9.333 2 8.733 2 8m12.667-5.375-2 2-1.2-1.2" /></Svg>);