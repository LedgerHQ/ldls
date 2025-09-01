import createIcon from "../../Components/Icon/createIcon";

/**
 * Chart2 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Chart2 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Chart2 } from '@ldls/ui-react/symbols';
 *
 * <Chart2 />
 *
 * @example
 * // With custom size and className
 * <Chart2 size={40} className="text-warning" />
 */
export const Chart2 = createIcon(
  "Chart2",
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
      d="m2.5 7.94 2.535-2.536c.195-.2.51-.2.705 0l1.07 1.07c.196.195.51.195.705 0l2.98-2.98m-1.33.006h1.33v1.33m.005 5.634H.96V1.61"
    />
  </svg>
);
