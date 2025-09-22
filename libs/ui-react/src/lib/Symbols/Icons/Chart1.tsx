import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart1 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Chart1 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Chart1 } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Chart1 />
 *
 * @example
 * // With custom size and className
 * <Chart1 size={40} className="text-warning" />
 */
export const Chart1 = createIcon(
  "Chart1",
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
      d="M3.5 8.75v-2.5m1.665 2.5v-5.5m1.665 5.5V5.7M8.5 8.75v-5m-6-2.25h7c.55 0 1 .448 1 1v7c0 .55-.45 1-1 1h-7c-.552 0-1-.45-1-1v-7c0-.555.445-1 1-1"
    />
  </svg>
);
