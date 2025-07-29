import createIcon from "../../Components/Icon/createIcon";

/**
 * Percentage icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Percentage Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Percentage } from '@ldls/ui-react/symbols';
 *
 * <Percentage />
 *
 * @example
 * // With custom size and className
 * <Percentage size={40} className="text-warning" />
 */
export const Percentage = createIcon(
  "Percentage",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M14 2 2 14m11.6-2.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6.4 4.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
