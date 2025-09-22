import createIcon from "../../Components/Icon/createIcon";

/**
 * BitcoinComputer icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:BitcoinComputer Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { BitcoinComputer } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <BitcoinComputer />
 *
 * @example
 * // With custom size and className
 * <BitcoinComputer size={40} className="text-warning" />
 */
export const BitcoinComputer = createIcon(
  "BitcoinComputer",
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
      d="m7 8.5.25 2M5 8.5l-.25 2m-.68 0h3.86m-2.9-5.51V3.635h1.366a.676.676 0 1 1-.005 1.352M5.886 3.25v.385m0 3.115v-.438M9.214 8.5H2.785c-.71 0-1.29-.58-1.29-1.29V2.78c0-.71.575-1.29 1.285-1.29h6.429c.71 0 1.284.575 1.284 1.285V7.2c0 .71-.58 1.285-1.29 1.285zM6.562 6.305H5.027V4.99h1.53a.654.654 0 1 1-.005 1.31z"
    />
  </svg>
);
