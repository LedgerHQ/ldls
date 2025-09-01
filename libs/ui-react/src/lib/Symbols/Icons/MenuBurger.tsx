import createIcon from "../../Components/Icon/createIcon";

/**
 * MenuBurger icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MenuBurger Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MenuBurger } from '@ldls/ui-react/symbols';
 *
 * <MenuBurger />
 *
 * @example
 * // With custom size and className
 * <MenuBurger size={40} className="text-warning" />
 */
export const MenuBurger = createIcon(
  "MenuBurger",
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
      d="M2.75 6h6.5m-6.5 2.75h6.5m-6.5-5.5h6.5"
    />
  </svg>
);
