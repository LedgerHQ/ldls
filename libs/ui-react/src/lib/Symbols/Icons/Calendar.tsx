import createIcon from "../../Components/Icon/createIcon";

/**
 * Calendar icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Calendar Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Calendar } from '@ldls/ui-react/symbols';
 *
 * <Calendar />
 *
 * @example
 * // With custom size and className
 * <Calendar size={40} className="text-warning" />
 */
export const Calendar = createIcon(
  "Calendar",
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
      d="M3.75 1.5V3m4.5-1.5V3m2.25 2h-9M3 2.25h6a1.5 1.5 0 0 1 1.5 1.5V9A1.5 1.5 0 0 1 9 10.5H3A1.5 1.5 0 0 1 1.5 9V3.75A1.5 1.5 0 0 1 3 2.25"
    />
  </svg>
);
