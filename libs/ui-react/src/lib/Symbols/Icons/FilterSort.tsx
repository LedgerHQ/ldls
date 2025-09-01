import createIcon from "../../Components/Icon/createIcon";

/**
 * FilterSort icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:FilterSort Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { FilterSort } from '@ldls/ui-react/symbols';
 *
 * <FilterSort />
 *
 * @example
 * // With custom size and className
 * <FilterSort size={40} className="text-warning" />
 */
export const FilterSort = createIcon(
  "FilterSort",
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
      strokeLinejoin="round"
      d="m7.25 6.75 2.604-2.604A.5.5 0 0 0 10 3.794V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.293c0 .132.053.26.147.353L4.75 6.75M4.75 6.75v3.124c0 .407.382.705.777.607l1.25-.312a.625.625 0 0 0 .473-.607V6.75"
      clipRule="evenodd"
    />
  </svg>
);
