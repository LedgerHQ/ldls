import createIcon from "../../Components/Icon/createIcon";

/**
 * UserCircle icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserCircle Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserCircle } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <UserCircle />
 *
 * @example
 * // With custom size and className
 * <UserCircle size={40} className="text-warning" />
 */
export const UserCircle = createIcon(
  "UserCircle",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M4 12a6.66 6.66 0 0 1 8 0M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 2.667a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
