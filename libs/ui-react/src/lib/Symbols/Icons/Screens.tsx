import createIcon from "../../Components/Icon/createIcon";

/**
 * Screens icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Screens Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Screens } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Screens />
 *
 * @example
 * // With custom size and className
 * <Screens size={40} className="text-warning" />
 */
export const Screens = createIcon(
  "Screens",
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
      d="M4 1.498h4M3 3.374H9m.175 7.128H2.824a1 1 0 0 1-.996-.9L1.503 6.35a1 1 0 0 1 .996-1.1H9.5a1 1 0 0 1 .996 1.1l-.325 3.251a1 1 0 0 1-.996.9"
    />
  </svg>
);
