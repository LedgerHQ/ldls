import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * Clip icon component for React Native.
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
 * import { Clip } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Clip />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Clip size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Clip} size="md">
 *   Click me
 * </Button>
 */
export const Clip = createIcon(
  'Clip',
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8.967 6.253 5.28 9.94a1.083 1.083 0 0 0 0 1.547h-.007c.427.427 1.12.427 1.547 0l5.747-5.75a2.197 2.197 0 0 0 0-3.1l-.007-.007a2.19 2.19 0 0 0-3.1-.007h-.007L3.7 8.369a3.276 3.276 0 0 0-.007 4.639 3.283 3.283 0 0 0 4.64 0v-.007l4.2-4.2"
    />
  </Svg>,
);
