import createIcon from "../../Components/Icon/createIcon";

/**
 * Medal2 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Medal2 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Medal2 } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Medal2 />
 *
 * @example
 * // With custom size and className
 * <Medal2 size={40} className="text-warning" />
 */
export const Medal2 = createIcon(
  "Medal2",
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
      d="M3.06 6.9 1.495 8.5l1.25.75.75 1.25L5.44 8.45m1.11.002 1.945 2.046.75-1.25 1.25-.75-1.565-1.6m-.46-4.373A3.498 3.498 0 1 1 3.52 7.47a3.5 3.5 0 0 1-.005-4.95 3.49 3.49 0 0 1 4.945 0M5.995 6.291l.895.47c.175.09.375-.06.345-.255L7.06 5.502l.725-.71c.14-.14.06-.38-.135-.41l-1.005-.15-.45-.915a.239.239 0 0 0-.43 0l-.45.91-1.005.145a.238.238 0 0 0-.135.405l.725.705-.175 1c-.035.195.17.34.345.25l.895-.475H5.96z"
    />
  </svg>
);
