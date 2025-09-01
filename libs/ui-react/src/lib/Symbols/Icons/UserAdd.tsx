import createIcon from "../../Components/Icon/createIcon";

/**
 * UserAdd icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserAdd Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserAdd } from '@ldls/ui-react/symbols';
 *
 * <UserAdd />
 *
 * @example
 * // With custom size and className
 * <UserAdd size={40} className="text-warning" />
 */
export const UserAdd = createIcon(
  "UserAdd",
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
      d="M9 8.875H7.75m.625-.625V9.5M5 7.5H3.5a2 2 0 0 0-2 2v.5m6.875-3.25a2.125 2.125 0 1 0 0 4.25 2.125 2.125 0 0 0 0-4.25M5.5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
