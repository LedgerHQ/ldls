import createIcon from "../../Components/Icon/createIcon";

/**
 * Medal1 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Medal1 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Medal1 } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Medal1 />
 *
 * @example
 * // With custom size and className
 * <Medal1 size={40} className="text-warning" />
 */
export const Medal1 = createIcon(
  "Medal1",
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
      d="M3.5 7v3.495c0 .135.11.245.25.245.035-.005.07-.01.1-.025l2.145-.98 2.145.975c.125.055.27 0 .33-.125.01-.035.02-.07.02-.105V6.925M6 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
    />
  </svg>
);
