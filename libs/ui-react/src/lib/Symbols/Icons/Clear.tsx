import createIcon from "../../Components/Icon/createIcon";

/**
 * Clear icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Clear Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Clear } from '@ldls/ui-react/symbols';
 *
 * <Clear />
 *
 * @example
 * // With custom size and className
 * <Clear size={40} className="text-warning" />
 */
export const Clear = createIcon(
  "Clear",
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
      d="M4.25 11v-1m3.5 1v-1M6 11v-1m2.38 1H3.615c-.555 0-1.005-.45-1.005-1-.005-.04 0-.075.005-.115l.175-1.61a1.99 1.99 0 0 1 1.985-1.78h2.42a2 2 0 0 1 1.99 1.78l.175 1.61a1 1 0 0 1-.885 1.1c-.04 0-.08.005-.115.005zM6 1c.41 0 .75.335.75.75v3c0 .135-.115.25-.25.25h-1a.25.25 0 0 1-.25-.25v-3c0-.415.335-.75.75-.75m1.125 5.5h-2.25A.503.503 0 0 1 4.37 6a.4.4 0 0 1 .035-.195l.205-.5a.49.49 0 0 1 .46-.31H6.9c.2-.005.38.12.46.305l.205.5a.5.5 0 0 1-.27.65.5.5 0 0 1-.195.035z"
    />
  </svg>
);
