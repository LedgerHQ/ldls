import createIcon from "../../Components/Icon/createIcon";

/**
 * GroupUsersAdd icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:GroupUsersAdd Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { GroupUsersAdd } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <GroupUsersAdd />
 *
 * @example
 * // With custom size and className
 * <GroupUsersAdd size={40} className="text-warning" />
 */
export const GroupUsersAdd = createIcon(
  "GroupUsersAdd",
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
      d="M1.5 10.5c0-.965.782-1.75 1.745-1.75H5.25c.965 0 1.745.782 1.745 1.745M8 8.753h.75c.965 0 1.745.782 1.745 1.745M8.94 2.25h2.12M10 3.31V1.19M4.25 4.252a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
