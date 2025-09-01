import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowLeft icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ArrowLeft Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ArrowLeft } from '@ldls/ui-react/symbols';
 *
 * <ArrowLeft />
 *
 * @example
 * // With custom size and className
 * <ArrowLeft size={40} className="text-warning" />
 */
export const ArrowLeft = createIcon(
  "ArrowLeft",
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
      d="M2.5 6h7m-7 0L5 3.5M2.5 6 5 8.5"
    />
  </svg>
);
