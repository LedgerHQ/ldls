import createIcon from "../../Components/Icon/createIcon";

/**
 * BasketPutIn icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:BasketPutIn Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { BasketPutIn } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <BasketPutIn />
 *
 * @example
 * // With custom size and className
 * <BasketPutIn size={40} className="text-warning" />
 */
export const BasketPutIn = createIcon(
  "BasketPutIn",
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
      d="M4.125 9h5m-5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75M2.821 3.5H4M6.5 3v2.5m0 0-1-1m1 1 1-1M4 9 2.5 2h-1M9 3.5h1a.5.5 0 0 1 .483.629l-.8 3A.5.5 0 0 1 9.2 7.5H3.679"
    />
  </svg>
);
