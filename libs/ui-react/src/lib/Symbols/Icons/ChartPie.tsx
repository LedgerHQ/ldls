import createIcon from "../../Components/Icon/createIcon";

/**
 * ChartPie icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ChartPie Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ChartPie } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ChartPie />
 *
 * @example
 * // With custom size and className
 * <ChartPie size={40} className="text-warning" />
 */
export const ChartPie = createIcon(
  "ChartPie",
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
      d="M5.25 3A3.745 3.745 0 0 0 1.5 6.75c0 2.07 1.675 3.75 3.75 3.75C7.32 10.5 9 8.82 9 6.75H5.25z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 5A3.5 3.5 0 0 0 7 1.5V5z"
    />
  </svg>
);
