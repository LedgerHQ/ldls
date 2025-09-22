import createIcon from '../../Components/Icon/createIcon';

/**
 * Cart icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Cart Storybook}
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
  'Cart',
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m5.333 11.667-2-9.334H2m3.5 9.334h6.667m-6.667 0A1.167 1.167 0 1 0 5.5 14a1.167 1.167 0 0 0 0-2.333m6.667 0a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333M3.76 4.333h9.567a.66.66 0 0 1 .666.66.7.7 0 0 1-.026.167l-1.067 4a.68.68 0 0 1-.647.493H4.887"
    />
  </svg>,
);
