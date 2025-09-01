import createIcon from "../../Components/Icon/createIcon";

/**
 * BookOpen icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:BookOpen Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { BookOpen } from '@ldls/ui-react/symbols';
 *
 * <BookOpen />
 *
 * @example
 * // With custom size and className
 * <BookOpen size={40} className="text-warning" />
 */
export const BookOpen = createIcon(
  "BookOpen",
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
      d="M9.5 2.5h.5a1 1 0 0 1 1 1v6c0 .55-.45 1-1 1H2c-.552 0-1-.45-1-1v-6c0-.555.448-1 1-1h.5M6 3a1.5 1.5 0 0 0-1.5-1.5H3c-.28 0-.5.22-.5.5v6.5c0 .275.22.5.5.5h1.5A1.5 1.5 0 0 1 6 10.5M6 3a1.5 1.5 0 0 1 1.5-1.5H9a.5.5 0 0 1 .5.5v6.5c0 .275-.225.5-.5.5H7.5A1.5 1.5 0 0 0 6 10.5M6 3v7.5"
    />
  </svg>
);
