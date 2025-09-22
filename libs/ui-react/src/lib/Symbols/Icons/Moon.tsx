import createIcon from "../../Components/Icon/createIcon";

/**
 * Moon icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Moon Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Moon } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Moon />
 *
 * @example
 * // With custom size and className
 * <Moon size={40} className="text-warning" />
 */
export const Moon = createIcon(
  "Moon",
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
      d="M9.85 7.5c-1.25.4-2.7.15-3.7-.85C4.9 5.4 4.8 3.4 5.8 2c-2.05.2-3.65 1.9-3.65 4 0 2.2 1.8 4 4 4 1.65 0 3.1-1.05 3.7-2.5"
      clipRule="evenodd"
    />
  </svg>
);
