import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Instagram icon component for React Native.
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
 * import { Instagram } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Instagram />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Instagram size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button icon={Instagram} size="md">
 *   Click me
 * </Button>
 */
export const Instagram = createIcon(
  "Instagram",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <G clipPath="url(#clip0_3_412)">
      <Path
        fill="currentColor"
        d="M3.826.787c-.559.026-.94.115-1.274.246a2.6 2.6 0 0 0-.929.607c-.29.292-.47.585-.603.93-.13.335-.217.717-.242 1.276s-.03.738-.027 2.164.009 1.604.036 2.165c.026.558.115.94.246 1.273.135.345.315.637.608.929.292.29.584.47.93.603.335.13.717.217 1.275.242.56.024.74.03 2.164.027 1.426-.002 1.605-.009 2.165-.035s.94-.116 1.273-.247c.345-.135.638-.315.929-.607.29-.292.47-.585.603-.931.13-.334.218-.716.242-1.274.024-.56.03-.74.027-2.165s-.009-1.604-.035-2.164-.116-.94-.247-1.274a2.6 2.6 0 0 0-.607-.929 2.6 2.6 0 0 0-.93-.603C9.094.89 8.712.802 8.153.778 7.596.754 7.416.748 5.99.751S4.386.759 3.826.787m.061 9.49c-.512-.022-.79-.107-.975-.178a1.6 1.6 0 0 1-.605-.392 1.6 1.6 0 0 1-.393-.602c-.072-.186-.159-.463-.183-.975-.026-.553-.031-.72-.034-2.121s.002-1.568.026-2.121c.022-.512.108-.79.179-.975.094-.246.208-.42.391-.605a1.6 1.6 0 0 1 .603-.393c.185-.073.463-.159.975-.183.553-.026.72-.031 2.12-.034 1.402-.003 1.568.002 2.122.026.512.022.79.107.975.179.245.094.42.208.604.391.185.184.299.358.394.603.073.185.159.462.183.974.026.554.032.72.035 2.121.002 1.402-.003 1.568-.027 2.121-.022.512-.107.79-.178.976-.095.245-.209.42-.392.604a1.6 1.6 0 0 1-.603.394c-.185.072-.463.158-.974.183-.554.026-.72.031-2.122.034s-1.567-.003-2.12-.027m4.279-7.083a.63.63 0 1 0 1.26-.002.63.63 0 0 0-1.26.002M3.304 6.005a2.696 2.696 0 1 0 5.391-.01 2.696 2.696 0 0 0-5.39.01m.946-.002a1.75 1.75 0 1 1 3.5-.007 1.75 1.75 0 0 1-3.5.007"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_412">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
