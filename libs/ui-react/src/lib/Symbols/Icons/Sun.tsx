import createIcon from "../../Components/Icon/createIcon";

/**
 * Sun icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Sun Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Sun } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Sun />
 *
 * @example
 * // With custom size and className
 * <Sun size={40} className="text-warning" />
 */
export const Sun = createIcon(
  "Sun",
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
      d="M6 2V1m0 10v-1m3.18-7.18.355-.355m-7.07 7.07.355-.355M10 6h1M1 6h1m7.18 3.18.355.355m-7.07-7.07.355.355m4.948 1.412a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536"
    />
  </svg>
);
