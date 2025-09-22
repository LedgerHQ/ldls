import createIcon from "../../Components/Icon/createIcon";

/**
 * Home icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Home Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Home } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Home />
 *
 * @example
 * // With custom size and className
 * <Home size={40} className="text-warning" />
 */
export const Home = createIcon(
  "Home",
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
      d="M2 4.3v6.2h8V4.3M1 5l5-3.5L11 5m-3.5 5.5v-3a1 1 0 0 0-1-1h-1c-.555 0-1 .445-1 1v3"
    />
  </svg>
);
