import createIcon from "../../Components/Icon/createIcon";

/**
 * Share2 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Share2 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Share2 } from '@ldls/ui-react/symbols';
 *
 * <Share2 />
 *
 * @example
 * // With custom size and className
 * <Share2 size={40} className="text-warning" />
 */
export const Share2 = createIcon(
  "Share2",
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
      d="m4.52 5.405 2.96-1.48m-2.96 2.67 2.96 1.48M4.276 5.057A1.334 1.334 0 1 1 2.39 6.943a1.334 1.334 0 0 1 1.886-1.886M9.61 2.391a1.334 1.334 0 1 1-1.886 1.885A1.334 1.334 0 0 1 9.61 2.391m0 5.333a1.334 1.334 0 1 1-1.886 1.885A1.334 1.334 0 0 1 9.61 7.724"
    />
  </svg>
);
