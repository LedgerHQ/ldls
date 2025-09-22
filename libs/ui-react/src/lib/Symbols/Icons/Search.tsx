import createIcon from "../../Components/Icon/createIcon";

/**
 * Search icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Search Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Search } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Search />
 *
 * @example
 * // With custom size and className
 * <Search size={40} className="text-warning" />
 */
export const Search = createIcon(
  "Search",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M10.5 10.5 8 8m.9-2.8a3.7 3.7 0 1 1-7.4 0 3.7 3.7 0 0 1 7.4 0Z"
    />
  </svg>
);
