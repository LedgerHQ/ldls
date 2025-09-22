import createIcon from "../../Components/Icon/createIcon";

/**
 * Percentage icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Percentage Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Percentage } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Percentage />
 *
 * @example
 * // With custom size and className
 * <Percentage size={40} className="text-warning" />
 */
export const Percentage = createIcon(
  "Percentage",
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
      d="m10.5 1.5-9 9m8.7-1.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM4.8 3.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
