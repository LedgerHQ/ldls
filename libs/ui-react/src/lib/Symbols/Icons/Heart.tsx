import createIcon from "../../Components/Icon/createIcon";

/**
 * Heart icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Heart Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Heart } from '@ldls/ui-react/symbols';
 *
 * <Heart />
 *
 * @example
 * // With custom size and className
 * <Heart size={40} className="text-warning" />
 */
export const Heart = createIcon(
  "Heart",
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
      d="M7.85 2c1.585 0 2.65 1.49 2.65 2.88C10.5 7.695 6.08 10 6 10S1.5 7.695 1.5 4.88C1.5 3.49 2.565 2 4.15 2c.91 0 1.505.455 1.85.855.345-.4.94-.855 1.85-.855"
    />
  </svg>
);
