import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowUp icon component.
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
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:ArrowUp Storybook}
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ArrowUp } from '@ldls/ui-react/symbols';
 *
 * <ArrowUp />
 *
 * @example
 * // With custom size and className
 * <ArrowUp size={40} className="text-warning" />
 */
export const ArrowUp = createIcon(
  "ArrowUp",
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
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M8 3.333v9.334m-3.334-6L8 3.327l3.333 3.333"
    />
  </svg>
);
