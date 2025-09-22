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
    viewBox="0 0 12 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9a4.994 4.994 0 0 1 6 0M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </svg>
);
