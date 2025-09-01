import createIcon from "../../Components/Icon/createIcon";

/**
 * Expand icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Expand Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Expand } from '@ldls/ui-react/symbols';
 *
 * <Expand />
 *
 * @example
 * // With custom size and className
 * <Expand size={40} className="text-warning" />
 */
export const Expand = createIcon(
  "Expand",
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
      d="M8.5 1.5h2m0 0v2m0-2-3 3M2 5.5V3a1 1 0 0 1 1-1h2.5m-2 8.5h-2m0 0v-2m0 2 3-3m5.5-1V9a1 1 0 0 1-1 1H6"
    />
  </svg>
);
