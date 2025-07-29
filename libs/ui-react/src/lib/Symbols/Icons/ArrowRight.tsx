import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowRight icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:ArrowRight Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ArrowRight } from '@ldls/ui-react/symbols';
 *
 * <ArrowRight />
 *
 * @example
 * // With custom size and className
 * <ArrowRight size={40} className="text-warning" />
 */
export const ArrowRight = createIcon(
  "ArrowRight",
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
      d="M12.667 8H3.333m9.334 0-3.334 3.333M12.667 8 9.333 4.667"
    />
  </svg>
);
