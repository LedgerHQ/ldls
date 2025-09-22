import createIcon from "../../Components/Icon/createIcon";

/**
 * StarHalf icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:StarHalf Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { StarHalf } from '@ledgerhq/ldls-ui-react/symbols';
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
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="m3.09 9.997 2.536-1.256.038-6.569L4.585 4.3l-3.09.39 2.194 2.247z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.09 9.997 6 8.617 8.9 9.98l-.6-3.06 2.194-2.24-3.089-.385-1.41-2.81L4.585 4.3M3.09 9.997l.6-3.06L1.495 4.69l3.09-.39M3.09 9.997l2.536-1.256.038-6.569L4.585 4.3"
    />
  </svg>
);
