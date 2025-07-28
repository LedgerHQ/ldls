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
      d="M9.66663 8.99996L13.138 5.52863C13.2633 5.40329 13.3333 5.23396 13.3333 5.05729V3.33329C13.3333 2.96529 13.0346 2.66663 12.6666 2.66663H3.33329C2.96529 2.66663 2.66663 2.96529 2.66663 3.33329V5.05729C2.66663 5.23396 2.73663 5.40396 2.86196 5.52863L6.33329 8.99996"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.33329 8.99996V13.166C6.33329 13.708 6.84263 14.106 7.36863 13.9746L9.03529 13.558C9.40596 13.4653 9.66663 13.132 9.66663 12.7493V8.99996"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
