import createIcon from "../../Components/Icon/createIcon";

/**
 * Bell icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Bell Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Bell } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Bell />
 *
 * @example
 * // With custom size and className
 * <Bell size={40} className="text-warning" />
 */
export const Bell = createIcon(
  "Bell",
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
      d="M4.5 9v.125c0 .825.67 1.5 1.5 1.5.825 0 1.5-.675 1.5-1.5V9M9 6.875l.85.85c.09.09.145.22.145.35v.415c0 .275-.225.5-.5.5h-7c-.28 0-.5-.225-.5-.5v-.42c0-.135.05-.26.145-.355l.85-.855V4.735c0-1.66 1.34-3 3-3 1.655 0 3 1.34 3 3z"
    />
  </svg>
);
