import createIcon from "../../Components/Icon/createIcon";

/**
 * ComputerMobile icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ComputerMobile Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ComputerMobile } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ComputerMobile />
 *
 * @example
 * // With custom size and className
 * <ComputerMobile size={40} className="text-warning" />
 */
export const ComputerMobile = createIcon(
  "ComputerMobile",
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
      d="M9.5 5.5V3a1 1 0 0 0-1-1H2c-.555 0-1 .445-1 1v4a1 1 0 0 0 1 1h6m-1.75 2V8m-2 0v2m-.625 0h3.25m3.375 0h-1.5A.75.75 0 0 1 8 9.25v-3c0-.415.335-.75.75-.75h1.5c.41 0 .75.335.75.75v3c0 .41-.34.75-.75.75"
    />
  </svg>
);
