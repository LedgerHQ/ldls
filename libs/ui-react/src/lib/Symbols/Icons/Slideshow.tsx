import createIcon from "../../Components/Icon/createIcon";

/**
 * Slideshow icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Slideshow Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Slideshow } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Slideshow />
 *
 * @example
 * // With custom size and className
 * <Slideshow size={40} className="text-warning" />
 */
export const Slideshow = createIcon(
  "Slideshow",
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
      d="M5 2.5 4 2v8l1-.5m-3-7L1 2v8l1-.5m9-1L7 10V2l4 1.5z"
    />
  </svg>
);
