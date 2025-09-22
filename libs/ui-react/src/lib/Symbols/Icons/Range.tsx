import createIcon from "../../Components/Icon/createIcon";

/**
 * Range icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Range Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Range } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Range />
 *
 * @example
 * // With custom size and className
 * <Range size={40} className="text-warning" />
 */
export const Range = createIcon(
  "Range",
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
      d="M1.5 10h4m-4-2h3m-3-2h4m-4-2h3m-3-2h4M9 10V2m0 8 1.25-1.25M9 10 7.75 8.75M9 2 7.75 3.25M9 2l1.25 1.25"
    />
  </svg>
);
