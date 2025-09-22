import createIcon from "../../Components/Icon/createIcon";

/**
 * Circles icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Circles Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Circles } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Circles />
 *
 * @example
 * // With custom size and className
 * <Circles size={40} className="text-warning" />
 */
export const Circles = createIcon(
  "Circles",
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
      d="M8.5 1.883a4.5 4.5 0 0 0-5 0M7.99 9.66a4.5 4.5 0 0 0 2.5-4.33M4.01 9.66a4.5 4.5 0 0 1-2.5-4.33m8.917-2.486a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06m-7.79 0a.75.75 0 1 1-1.061 1.06.75.75 0 0 1 1.06-1.06m3.895 6.75a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06m.705-5.207a1.75 1.75 0 1 1-2.474 2.475 1.75 1.75 0 0 1 2.474-2.475"
    />
  </svg>
);
