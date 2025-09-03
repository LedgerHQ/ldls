import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * MoreVertical icon component for React Native.
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
 * import { MoreVertical } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <MoreVertical />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <MoreVertical size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={MoreVertical} size="md">
 *   Click me
 * </Button>
 */
export const MoreVertical = createIcon(
  'MoreVertical',
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 16 16">
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7.993 11.667A.33.33 0 0 0 7.66 12c0 .18.147.333.333.333.18 0 .334-.153.334-.333a.336.336 0 0 0-.34-.333m.006-4A.33.33 0 0 0 7.66 8c0 .18.147.333.333.333.18 0 .334-.153.334-.333a.336.336 0 0 0-.34-.333m.006-4A.33.33 0 0 0 7.66 4c0 .18.147.333.333.333.18 0 .334-.153.334-.333a.336.336 0 0 0-.34-.333"
    />
  </Svg>,
);
