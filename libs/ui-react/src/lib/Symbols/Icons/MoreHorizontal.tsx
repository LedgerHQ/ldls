import createIcon from "../../Components/Icon/createIcon";

/**
 * MoreHorizontal icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MoreHorizontal Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MoreHorizontal } from '@ldls/ui-react/symbols';
 *
 * <MoreHorizontal />
 *
 * @example
 * // With custom size and className
 * <MoreHorizontal size={40} className="text-warning" />
 */
export const MoreHorizontal = createIcon(
  "MoreHorizontal",
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
      d="M8.745 6c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255m-3-.005c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255m-3-.005c0 .14.11.25.25.25a.25.25 0 0 0 .25-.25.254.254 0 0 0-.25-.25c-.14 0-.25.115-.25.255"
    />
  </svg>
);
