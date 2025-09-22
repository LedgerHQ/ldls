import createIcon from "../../Components/Icon/createIcon";

/**
 * ChevronUpDown icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ChevronUpDown Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ChevronUpDown } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ChevronUpDown />
 *
 * @example
 * // With custom size and className
 * <ChevronUpDown size={40} className="text-warning" />
 */
export const ChevronUpDown = createIcon(
  "ChevronUpDown",
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
      d="m4 7.5 2 2 2-2M4 4.5l2-2 2 2"
    />
  </svg>
);
