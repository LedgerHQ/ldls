import createIcon from "../../Components/Icon/createIcon";

/**
 * Cart icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Cart Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Cart } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Cart />
 *
 * @example
 * // With custom size and className
 * <Cart size={40} className="text-warning" />
 */
export const Cart = createIcon(
  "Cart",
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
      d="m4 8.75-1.5-7h-1m2.625 7h5m-5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m5 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75M2.82 3.25h7.175c.275-.005.5.22.5.495 0 .04-.01.085-.02.125l-.8 3a.51.51 0 0 1-.485.37H3.665"
    />
  </svg>
);
