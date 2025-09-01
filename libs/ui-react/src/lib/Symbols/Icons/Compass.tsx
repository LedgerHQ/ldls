import createIcon from "../../Components/Icon/createIcon";

/**
 * Compass icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Compass Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Compass } from '@ldls/ui-react/symbols';
 *
 * <Compass />
 *
 * @example
 * // With custom size and className
 * <Compass size={40} className="text-warning" />
 */
export const Compass = createIcon(
  "Compass",
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
      d="M9.182 2.815a4.5 4.5 0 0 1 0 6.36 4.506 4.506 0 0 1-6.365 0 4.497 4.497 0 0 1 0-6.365 4.49 4.49 0 0 1 6.36 0M7.16 7.15l-2.32-2.3m0 .001L8 3.995 7.16 7.14 4 7.99z"
    />
  </svg>
);
