import createIcon from "../../Components/Icon/createIcon";

/**
 * PlusCircle icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PlusCircle Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PlusCircle } from '@ldls/ui-react/symbols';
 *
 * <PlusCircle />
 *
 * @example
 * // With custom size and className
 * <PlusCircle size={40} className="text-warning" />
 */
export const PlusCircle = createIcon(
  "PlusCircle",
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
      d="M6 4v4m2-2H4m2 4.5c-2.49 0-4.5-2.014-4.5-4.5A4.5 4.5 0 1 1 6 10.5"
    />
  </svg>
);
