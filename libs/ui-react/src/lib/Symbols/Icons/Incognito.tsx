import createIcon from "../../Components/Icon/createIcon";

/**
 * Incognito icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Incognito Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Incognito } from '@ldls/ui-react/symbols';
 *
 * <Incognito />
 *
 * @example
 * // With custom size and className
 * <Incognito size={40} className="text-warning" />
 */
export const Incognito = createIcon(
  "Incognito",
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
      d="m2.969 4.5.36-2.166c.08-.482.499-.836.987-.836h3.307a1 1 0 0 1 .987.836l.361 2.165M5.113 9.001a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.002 0m0 0c.473-.572 1.241-.572 1.715 0m0 0a1.5 1.5 0 1 0 3.001 0 1.5 1.5 0 0 0-3.001 0m-5.33-2.5c2.487-1.335 6.517-1.335 9.004 0"
    />
  </svg>
);
