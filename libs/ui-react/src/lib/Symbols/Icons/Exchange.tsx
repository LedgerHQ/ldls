import createIcon from "../../Components/Icon/createIcon";

/**
 * Exchange icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Exchange Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Exchange } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Exchange />
 *
 * @example
 * // With custom size and className
 * <Exchange size={40} className="text-warning" />
 */
export const Exchange = createIcon(
  "Exchange",
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
      d="M6.5 9.5H5A2.5 2.5 0 0 1 2.5 7V2.5m0 0 1.25 1.25M2.5 2.5 1.25 3.75M5.5 2.5H7A2.5 2.5 0 0 1 9.5 5v4.5m0 0L8 8m1.5 1.5L11 8"
    />
  </svg>
);
