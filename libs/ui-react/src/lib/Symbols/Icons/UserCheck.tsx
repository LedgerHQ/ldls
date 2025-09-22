import createIcon from "../../Components/Icon/createIcon";

/**
 * UserCheck icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserCheck Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserCheck } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <UserCheck />
 *
 * @example
 * // With custom size and className
 * <UserCheck size={40} className="text-warning" />
 */
export const UserCheck = createIcon(
  "UserCheck",
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
      d="M2 10a2.247 2.247 0 0 1 2.25-2.25h1.292m3.958.719L8 9.969l-.9-.9M6 2a2.125 2.125 0 1 0 0 4.25A2.125 2.125 0 0 0 6 2"
    />
  </svg>
);
