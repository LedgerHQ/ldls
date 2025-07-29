import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * FilterSort icon component for React Native.
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
 * import { FilterSort } from '@ldls/ui-rnative/symbols';
 *
 * <FilterSort />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <FilterSort size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={FilterSort} size="md">
 *   Click me
 * </Button>
 */
export const FilterSort = createIcon(
  "FilterSort",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.66663 9.00002L13.138 5.52869C13.2633 5.40335 13.3333 5.23402 13.3333 5.05735V3.33335C13.3333 2.96535 13.0346 2.66669 12.6666 2.66669H3.33329C2.96529 2.66669 2.66663 2.96535 2.66663 3.33335V5.05735C2.66663 5.23402 2.73663 5.40402 2.86196 5.52869L6.33329 9.00002"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.33329 9.00002V13.166C6.33329 13.708 6.84263 14.106 7.36863 13.9747L9.03529 13.558C9.40596 13.4654 9.66663 13.132 9.66663 12.7494V9.00002"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
