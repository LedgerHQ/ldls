import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * IdCard icon component for React Native.
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
 * import { IdCard } from '@ldls/ui-rnative/symbols';
 *
 * <IdCard />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <IdCard size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={IdCard} size="md">
 *   Click me
 * </Button>
 */
export const IdCard = createIcon(
  "IdCard",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.72664 5.43333C7.30664 6.01333 7.30664 6.96666 6.72664 7.55333C6.13997 8.13333 5.18664 8.13333 4.59997 7.55333C4.01331 6.96666 4.01331 6.01333 4.59997 5.42666C5.17997 4.83999 6.13331 4.83999 6.71997 5.42666M9.99997 6.33333H12.6666M11.6 8.99999H9.99997M8.05997 11C7.93997 10.7067 7.75997 10.44 7.52664 10.2307C7.13331 9.86399 6.61998 9.66399 6.08864 9.66399H5.22197C4.68864 9.66399 4.17531 9.86399 3.78397 10.224C3.55064 10.4373 3.37264 10.6973 3.25064 10.9933M1.33331 12.3333V3.69333C1.33331 2.93999 1.93997 2.32666 2.69331 2.32666H13.3326C14.066 2.32666 14.666 2.91999 14.666 3.65999V12.3267C14.666 13.06 14.066 13.66 13.3326 13.66H2.66597C1.92931 13.66 1.33264 13.06 1.33264 12.3267L1.33331 12.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
