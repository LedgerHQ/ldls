import Svg, { Path } from 'react-native-svg';
import createIcon from '../../Components/Icon/createIcon';

/**
 * CloudDownload icon component for React Native.
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
 * import { CloudDownload } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <CloudDownload />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <CloudDownload size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={CloudDownload} size="md">
 *   Click me
 * </Button>
 */
export const CloudDownload = createIcon(
  'CloudDownload',
  <Svg width={24} height={24} fill='currentColor' viewBox='0 0 16 16'>
    <Path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.3}
      d='M8 10.667V14m0 0-1.333-1.333M8 14l1.333-1.333m-4.4-1.334H4.66A3.33 3.33 0 0 1 1.327 8a3.32 3.32 0 0 1 2.879-3.293V4.7a3.98 3.98 0 0 1 3.78-2.713c2.207 0 4 1.786 4 4a2.67 2.67 0 0 1 2.667 2.666c0 1.467-1.2 2.667-2.667 2.667h-.94'
    />
  </Svg>,
);
