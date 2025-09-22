import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart3 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Chart3 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Chart3 } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Chart3 />
 *
 * @example
 * // With custom size and className
 * <Chart3 size={40} className="text-warning" />
 */
export const Chart3 = createIcon(
  "Chart3",
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
      d="M6.75 5.755V8m-1.5-4v4m-1.5-1.37V8m4.5-3.125V8M4 1.5h4A2.5 2.5 0 0 1 10.5 4v4A2.5 2.5 0 0 1 8 10.5H4A2.5 2.5 0 0 1 1.5 8V4A2.5 2.5 0 0 1 4 1.5"
    />
  </svg>
);
