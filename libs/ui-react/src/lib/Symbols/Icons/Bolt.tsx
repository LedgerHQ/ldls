import createIcon from "../../Components/Icon/createIcon";

/**
 * Bolt icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Bolt Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Bolt } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Bolt />
 *
 * @example
 * // With custom size and className
 * <Bolt size={40} className="text-warning" />
 */
export const Bolt = createIcon(
  "Bolt",
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
      d="M6.48 1.5 2.37 7h3.625l-.485 3.5L9.615 5H5.99z"
    />
  </svg>
);
