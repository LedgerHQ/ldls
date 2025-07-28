import createIcon from "../../Components/Icon/createIcon";

/**
 * StarHalf icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:StarHalf Storybook}
 *
 * @example
 * // Basic usage with default size (24px)
 * import { StarHalf } from '@ldls/ui-react/symbols';
 *
 * <StarHalf />
 *
 * @example
 * // With custom size and className
 * <StarHalf size={40} className="text-warning" />
 */
export const StarHalf = createIcon(
  "StarHalf",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M4.12 13.33 7.5 11.654l.051-8.758-1.439 2.837-4.12.52L4.92 9.25z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M4.12 13.33 8 11.49l3.866 1.817-.8-4.08 2.927-2.987-4.12-.513-1.88-3.747-1.88 3.753M4.12 13.33l.8-4.08-2.926-2.997 4.12-.52M4.12 13.33l3.382-1.676.051-8.758-1.439 2.837"
    />
  </svg>
);
